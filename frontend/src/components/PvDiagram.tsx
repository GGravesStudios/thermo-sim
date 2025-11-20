import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import type { IdealGasInput } from '../utils/thermo';

const R_L_ATM = 0.08206; // L·atm / (mol·K)

interface PvDiagramProps {
  inputs: IdealGasInput;
}

export const PvDiagram: React.FC<PvDiagramProps> = ({ inputs }) => {
  const { V_L, n_mol, T_K } = inputs;

  const pvData = useMemo(() => {
    if (V_L <= 0 || n_mol <= 0 || T_K <= 0) {
      return [];
    }

    const baseV = V_L;
    const factors = [0.5, 0.75, 1, 1.0, 1.25, 1.5];

    return factors
      .map(f => {
        const V = baseV * f;
        const P = (n_mol * R_L_ATM * T_K) / V;
        return { V, P };
      })
      .sort((a, b) => a.V - b.V);
  }, [V_L, n_mol, T_K]);

  const hasValidData = pvData.length > 0;

  return (
    <div className="pv-diagram">
      <p className="pv-description">
        This p–V diagram shows an isothermal-style curve generated from the current
        sandbox values of n, T, and V. Adjust the inputs on the left and this curve
        will update in real time.
      </p>

      {!hasValidData && (
        <p>
          Enter positive values for V, n, and T in the sandbox to see a p–V curve
          generated here.
        </p>
      )}

      {hasValidData && (
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <LineChart
              data={pvData}
              margin={{ top: 10, right: 20, bottom: 30, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="V"
                label={{ value: 'Volume V (L)', position: 'insideBottom', offset: -10 }}
                type="number"
                domain={['dataMin', 'dataMax']}
              />
              <YAxis
                label={{ value: 'Pressure P (atm)', angle: -90, position: 'insideLeft' }}
                type="number"
                domain={['dataMin', 'dataMax']}
              />
              <Tooltip
                formatter={(value: number, name: string) =>
                  name === 'P'
                    ? [`${value.toFixed(2)} atm`, 'P']
                    : [`${value.toFixed(2)} L`, 'V']
                }
              />
              <Line
                type="monotone"
                dataKey="P"
                dot={true}
                strokeWidth={2}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
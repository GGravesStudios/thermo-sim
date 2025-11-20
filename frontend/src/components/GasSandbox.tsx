import React, { useState } from 'react';
import { solveIdealGas, atmToPa, LToM3, kToC } from '../utils/thermo';
import type { IdealGasInput, SolveFor, IdealGasSolution } from '../utils/thermo';
import { solveIdealGasRemote } from '../utils/backend';

type NumericField = 'P_atm' | 'V_L' | 'T_K' | 'n_mol';

interface GasSandboxProps {
  inputs: IdealGasInput;
  onChange: (updated: IdealGasInput) => void;
}

export const GasSandbox: React.FC<GasSandboxProps> = ({ inputs, onChange }) => {
  const [backendResult, setBackendResult] = useState<IdealGasSolution | null>(null);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [backendLoading, setBackendLoading] = useState(false);

  const handleSolveBackend = async () => {
    try {
      setBackendLoading(true);
      setBackendError(null);
      const result = await solveIdealGasRemote(inputs);
      setBackendResult(result);
    } catch (err) {
      console.error(err);
      setBackendError(
        err instanceof Error ? err.message : 'Failed to contact backend solver.'
      );
      setBackendResult(null);
    } finally {
      setBackendLoading(false);
    }
  };

  const handleNumericChange =
    (field: NumericField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const value = parseFloat(raw);
      onChange({
        ...inputs,
        [field]: isNaN(value) ? 0 : value,
      });
    };

  const handleSolveForChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SolveFor;
    onChange({
      ...inputs,
      solveFor: value,
    });
  };

  const solved = solveIdealGas(inputs);

  return (
    <div className="gas-sandbox">
      <div className="field-row">
        <label>
          Pressure P (atm)
          <input
            type="number"
            value={inputs.P_atm}
            onChange={handleNumericChange('P_atm')}
            disabled={inputs.solveFor === 'P'}
          />
          <small>
            ≈ {Number.isFinite(inputs.P_atm) ? atmToPa(inputs.P_atm).toFixed(0) : '—'} Pa
          </small>
        </label>
      </div>

      <div className="field-row">
        <label>
          Volume V (L)
          <input
            type="number"
            value={inputs.V_L}
            onChange={handleNumericChange('V_L')}
            disabled={inputs.solveFor === 'V'}
          />
          <small>
            ≈ {Number.isFinite(inputs.V_L) ? LToM3(inputs.V_L).toExponential(3) : '—'} m³
          </small>
        </label>
      </div>

      <div className="field-row">
        <label>
          Temperature T (K)
          <input
            type="number"
            value={inputs.T_K}
            onChange={handleNumericChange('T_K')}
            disabled={inputs.solveFor === 'T'}
          />
          <small>
            ≈ {Number.isFinite(inputs.T_K) ? kToC(inputs.T_K).toFixed(2) : '—'} °C
          </small>
        </label>
      </div>

      <div className="field-row">
        <label>
          Amount n (mol)
          <input
            type="number"
            value={inputs.n_mol}
            onChange={handleNumericChange('n_mol')}
            disabled={inputs.solveFor === 'n'}
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Solve for:
          <select
            value={inputs.solveFor}
            onChange={handleSolveForChange}
          >
            <option value="P">P (atm)</option>
            <option value="V">V (L)</option>
            <option value="T">T (K)</option>
            <option value="n">n (mol)</option>
          </select>
        </label>
      </div>

      <div className="results">
        <h3>Local Result (Instant)</h3>
        {solved?.error && <p className="error">{solved.error}</p>}
        {!solved?.error && solved && (
          <>
            <p>
              <strong>Solved for: {inputs.solveFor}</strong>
            </p>
            <p>
              {solved.label}:{' '}
              {Number.isFinite(solved.value) ? solved.value.toFixed(4) : '—'}{' '}
              {solved.unit}
            </p>
          </>
        )}
        <p className="equation-note">
          Using PV = nRT (R = 0.08206 L·atm / (mol·K))
        </p>

        <hr style={{ margin: '0.75rem 0', opacity: 0.2 }} />

        <h3>Backend Solver</h3>
        <button
          type="button"
          onClick={handleSolveBackend}
          disabled={backendLoading}
          style={{ marginBottom: '0.5rem' }}
        >
          {backendLoading ? 'Solving…' : 'Solve via Backend API'}
        </button>

        {backendError && <p className="error">{backendError}</p>}

        {backendResult && !backendResult.error && (
          <p>
            {backendResult.label}:{' '}
            {Number.isFinite(backendResult.value)
              ? backendResult.value.toFixed(4)
              : '—'}{' '}
            {backendResult.unit}{' '}
            <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>
              (from /api/ideal-gas/solve)
            </span>
          </p>
        )}

        {backendResult?.error && (
          <p className="error">Backend error: {backendResult.error}</p>
        )}
      </div>
    </div>
  );
};
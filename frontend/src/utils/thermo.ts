// Basic ideal gas helpers, unit conversions, and p–V curve generation for the MVP.
// Uses R = 0.08206 L·atm / (mol·K) for ideal gas law calculations.

export type SolveFor = 'P' | 'V' | 'T' | 'n';

export interface IdealGasInput {
  P_atm: number;
  V_L: number;
  T_K: number;
  n_mol: number;
  solveFor: SolveFor;
}

export interface IdealGasSolution {
  value: number;
  unit: string;
  label: string;
  error?: string;
}

export interface PvPoint {
  V: number; // volume in L
  P: number; // pressure in atm
}

const R_L_ATM = 0.08206; // L·atm / (mol·K)

// --- Ideal Gas Solver ---

export function solveIdealGas(input: IdealGasInput): IdealGasSolution | null {
  const { P_atm, V_L, T_K, n_mol, solveFor } = input;

  try {
    switch (solveFor) {
      case 'P': {
        const value = (n_mol * R_L_ATM * T_K) / V_L;
        return { value, unit: 'atm', label: 'Pressure P' };
      }
      case 'V': {
        const value = (n_mol * R_L_ATM * T_K) / P_atm;
        return { value, unit: 'L', label: 'Volume V' };
      }
      case 'T': {
        const value = (P_atm * V_L) / (n_mol * R_L_ATM);
        return { value, unit: 'K', label: 'Temperature T' };
      }
      case 'n': {
        const value = (P_atm * V_L) / (R_L_ATM * T_K);
        return { value, unit: 'mol', label: 'Amount n' };
      }
      default:
        return {
          value: NaN,
          unit: '',
          label: 'Error',
          error: 'Unknown variable to solve for.',
        };
    }
  } catch {
    return {
      value: NaN,
      unit: '',
      label: 'Error',
      error: 'Invalid inputs or division by zero.',
    };
  }
}

// --- Unit Conversion Helpers ---

// Pressure
export function atmToPa(atm: number): number {
  return atm * 101325;
}

export function paToAtm(pa: number): number {
  return pa / 101325;
}

// Volume
export function LToM3(L: number): number {
  return L / 1000;
}

export function m3ToL(m3: number): number {
  return m3 * 1000;
}

// Temperature
export function kToC(K: number): number {
  return K - 273.15;
}

export function cToK(C: number): number {
  return C + 273.15;
}

// --- p–V Curve Generation (Isothermal-style) ---

/**
 * Generate simple isothermal-like p–V data around the current state.
 * Uses PV = const with const = P_atm * V_L.
 */
export function generateIsothermData(
  P_atm: number,
  V_L: number,
  numPoints = 20,
  spanFactor = 1.5,
): PvPoint[] {
  if (P_atm <= 0 || V_L <= 0) return [];

  const k = P_atm * V_L; // PV = constant
  const Vmin = V_L / spanFactor;
  const Vmax = V_L * spanFactor;
  const step = (Vmax - Vmin) / (numPoints - 1);

  const data: PvPoint[] = [];
  for (let i = 0; i < numPoints; i++) {
    const V = Vmin + step * i;
    const P = k / V;
    data.push({ V, P });
  }

  return data;
}
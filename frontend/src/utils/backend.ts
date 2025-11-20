// frontend/src/utils/backend.ts
export const BACKEND_BASE_URL = 'http://localhost:8080';

export async function fetchHealth() {
  const res = await fetch(`${BACKEND_BASE_URL}/api/health`);
  if (!res.ok) {
    throw new Error(`Health check failed with status ${res.status}`);
  }
  return res.json();
}

export async function fetchScenarios() {
  const res = await fetch(`${BACKEND_BASE_URL}/api/scenarios`);
  if (!res.ok) {
    throw new Error(`Failed to fetch scenarios: ${res.status}`);
  }
  return res.json();
}

// ✨ NEW: call backend ideal-gas solver
import type { IdealGasInput, IdealGasSolution } from './thermo';

export async function solveIdealGasRemote(
  input: IdealGasInput
): Promise<IdealGasSolution> {
  const res = await fetch(`${BACKEND_BASE_URL}/api/ideal-gas/solve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      P_atm: input.P_atm,
      V_L: input.V_L,
      T_K: input.T_K,
      n_mol: input.n_mol,
      solveFor: input.solveFor,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Backend error ${res.status}: ${text}`);
  }

  const data = await res.json();

  // Map backend response into our frontend IdealGasSolution shape
  const value =
    typeof data.value === 'number'
      ? data.value
      : Number.isFinite(Number(data.value))
      ? Number(data.value)
      : NaN;

  return {
    value,
    unit: data.unit ?? '',
    label: data.label ?? '',
    error: data.error ?? undefined,
  };
}
// frontend/src/utils/backend.ts
export const BACKEND_BASE_URL = (import.meta.env.VITE_BACKEND_URL ?? '').replace(/\/$/, '');

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
  input: IdealGasInput & {
    P?: number | null;
    V?: number | null;
    T?: number | null;
    n?: number | null;
  }
): Promise<IdealGasSolution> {
  const solveFor = input.solveFor?.toUpperCase?.() ?? "P";

  // Build payload expected by the backend controller.
  // If the specialized fields (P_atm, V_L, T_K, n_mol) are not present,
  // fall back to generic P, V, T, n from the UI state.
  const payload = {
    solveFor,
    P_atm: solveFor === "P" ? null : (input.P_atm ?? input.P ?? null),
    V_L:   solveFor === "V" ? null : (input.V_L ?? input.V ?? null),
    T_K:   solveFor === "T" ? null : (input.T_K ?? input.T ?? null),
    n_mol: solveFor === "N" ? null : (input.n_mol ?? input.n ?? null),
  };

  const res = await fetch(`${BACKEND_BASE_URL}/api/ideal-gas/solve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Backend error ${res.status}: ${text}`);
  }

  const data = await res.json();

  const value =
    typeof data.value === "number"
      ? data.value
      : Number.isFinite(Number(data.value))
      ? Number(data.value)
      : NaN;

  return {
    value,
    unit: data.unit ?? "",
    label: data.label ?? "",
    error: data.error ?? undefined,
  };
}

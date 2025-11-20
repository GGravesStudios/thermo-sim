import { describe, it, expect } from 'vitest';
import { solveIdealGas } from '../utils/thermo';

describe('solveIdealGas', () => {
  it('solves for missing pressure when other fields are valid', () => {
    const result = solveIdealGas({
      P_atm: 1,
      V_L: 1,
      T_K: 300,
      n_mol: 1,
      solveFor: 'P',
    });

    expect(result.error).toBeUndefined();
    expect(result.unit).toBe('atm');
    expect(result.value).toBeCloseTo(0.08206 * 300, 5);
  });

  it('returns error when any field is zero or negative', () => {
    const result = solveIdealGas({
      P_atm: 0,
      V_L: 1,
      T_K: 300,
      n_mol: 1,
      solveFor: 'V',
    });

    expect(result.error).to
package com.thermosim.backend.model;

public class IdealGasRequest {

    // Pressure in atm
    private Double P_atm;

    // Volume in Liters
    private Double V_L;

    // Temperature in Kelvin
    private Double T_K;

    // Amount of substance in moles
    private Double n_mol;

    // Which variable to solve for: "P", "V", "T", or "n"
    private String solveFor;

    public IdealGasRequest() {
    }

    public Double getP_atm() {
        return P_atm;
    }

    public void setP_atm(Double p_atm) {
        P_atm = p_atm;
    }

    public Double getV_L() {
        return V_L;
    }

    public void setV_L(Double v_L) {
        V_L = v_L;
    }

    public Double getT_K() {
        return T_K;
    }

    public void setT_K(Double t_K) {
        T_K = t_K;
    }

    public Double getN_mol() {
        return n_mol;
    }

    public void setN_mol(Double n_mol) {
        this.n_mol = n_mol;
    }

    public String getSolveFor() {
        return solveFor;
    }

    public void setSolveFor(String solveFor) {
        this.solveFor = solveFor;
    }
}
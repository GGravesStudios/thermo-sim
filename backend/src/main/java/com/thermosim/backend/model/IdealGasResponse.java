package com.thermosim.backend.model;

public class IdealGasResponse {

    private String solvedFor;
    private Double value;
    private String unit;
    private String label;
    private String error;

    public IdealGasResponse() {
    }

    public IdealGasResponse(String solvedFor, Double value, String unit, String label, String error) {
        this.solvedFor = solvedFor;
        this.value = value;
        this.unit = unit;
        this.label = label;
        this.error = error;
    }

    public String getSolvedFor() {
        return solvedFor;
    }

    public void setSolvedFor(String solvedFor) {
        this.solvedFor = solvedFor;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
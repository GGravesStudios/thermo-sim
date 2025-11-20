package com.thermosim.backend.api;

import com.thermosim.backend.model.IdealGasRequest;
import com.thermosim.backend.model.IdealGasResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ideal-gas")
public class IdealGasController {

    // R in L·atm / (mol·K)
    private static final double R_L_ATM = 0.08206;

    @PostMapping("/solve")
    public ResponseEntity<IdealGasResponse> solve(@RequestBody IdealGasRequest request) {

        if (request.getSolveFor() == null) {
            return badRequest("solveFor is required (P, V, T, or n)");
        }

        String solveFor = request.getSolveFor().trim().toUpperCase();

        try {
            switch (solveFor) {
                case "P":
                    return ResponseEntity.ok(solveForP(request));
                case "V":
                    return ResponseEntity.ok(solveForV(request));
                case "T":
                    return ResponseEntity.ok(solveForT(request));
                case "N":
                    return ResponseEntity.ok(solveForN(request));
                default:
                    return badRequest("solveFor must be one of: P, V, T, n");
            }
        } catch (IllegalArgumentException ex) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new IdealGasResponse(
                            solveFor,
                            null,
                            "",
                            "",
                            ex.getMessage()
                    ));
        } catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new IdealGasResponse(
                            solveFor,
                            null,
                            "",
                            "",
                            "Unexpected error: " + ex.getMessage()
                    ));
        }
    }

    private IdealGasResponse solveForP(IdealGasRequest req) {
        Double V = req.getV_L();
        Double T = req.getT_K();
        Double n = req.getN_mol();

        requirePositive(V, "V_L");
        requirePositive(T, "T_K");
        requirePositive(n, "n_mol");

        double P = (n * R_L_ATM * T) / V;
        return new IdealGasResponse("P", P, "atm", "Pressure P", null);
    }

    private IdealGasResponse solveForV(IdealGasRequest req) {
        Double P = req.getP_atm();
        Double T = req.getT_K();
        Double n = req.getN_mol();

        requirePositive(P, "P_atm");
        requirePositive(T, "T_K");
        requirePositive(n, "n_mol");

        double V = (n * R_L_ATM * T) / P;
        return new IdealGasResponse("V", V, "L", "Volume V", null);
    }

    private IdealGasResponse solveForT(IdealGasRequest req) {
        Double P = req.getP_atm();
        Double V = req.getV_L();
        Double n = req.getN_mol();

        requirePositive(P, "P_atm");
        requirePositive(V, "V_L");
        requirePositive(n, "n_mol");

        double T = (P * V) / (n * R_L_ATM);
        return new IdealGasResponse("T", T, "K", "Temperature T", null);
    }

    private IdealGasResponse solveForN(IdealGasRequest req) {
        Double P = req.getP_atm();
        Double V = req.getV_L();
        Double T = req.getT_K();

        requirePositive(P, "P_atm");
        requirePositive(V, "V_L");
        requirePositive(T, "T_K");

        double n = (P * V) / (R_L_ATM * T);
        return new IdealGasResponse("n", n, "mol", "Amount n", null);
    }

    private void requirePositive(Double value, String fieldName) {
        if (value == null) {
            throw new IllegalArgumentException(fieldName + " is required");
        }
        if (value <= 0) {
            throw new IllegalArgumentException(fieldName + " must be > 0");
        }
    }

    private ResponseEntity<IdealGasResponse> badRequest(String message) {
        IdealGasResponse resp = new IdealGasResponse(
                null,
                null,
                "",
                "",
                message
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
    }
}
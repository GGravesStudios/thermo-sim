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
    public Respo
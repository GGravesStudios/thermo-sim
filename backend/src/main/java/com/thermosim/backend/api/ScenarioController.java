package com.thermosim.backend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ScenarioController {

    @GetMapping("/api/scenarios")
    public List<Map<String, Object>> listScenarios() {
        return List.of(
                Map.of(
                        "id", 1,
                        "title", "Isothermal Expansion at 300 K",
                        "topic", "ideal_gas",
                        "description", "An ideal gas expands isothermally from 10 L to 20 L at 300 K.",
                        "initialState", Map.of(
                                "P_atm", 2.0,
                                "V_L", 10.0,
                                "T_K", 300.0,
                                "n_mol", 0.81
                        ),
                        "processType", "isothermal"
                ),
                Map.of(
                        "id", 2,
                        "title", "Isochoric Heating",
                        "topic", "ideal_gas",
                        "description", "A fixed volume container is heated from 280 K to 350 K.",
                        "initialState", Map.of(
                                "P_atm", 1.0,
                                "V_L", 5.0,
                                "T_K", 280.0,
                                "n_mol", 0.22
                        ),
                        "processType", "isochoric"
                ),
                Map.of(
                        "id", 3,
                        "title", "Calorimetry: Metal in Water",
                        "topic", "calorimetry",
                        "description", "A hot metal sample is placed into cooler water in a coffee-cup calorimeter.",
                        "initialState", Map.of(
                                "metalMass_g", 50.0,
                                "metalTemp_C", 100.0,
                                "waterMass_g", 100.0,
                                "waterTemp_C", 25.0
                        ),
                        "processType", "calorimetry"
                )
        );
    }
}
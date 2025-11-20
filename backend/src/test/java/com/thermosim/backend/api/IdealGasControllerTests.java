package com.thermosim.backend.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class IdealGasControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void rejectsZeroTemperature() throws Exception {
        String payload = """
            {
              "pressure": 1.0,
              "volume": 1.0,
              "temperature": 0.0,
              "moles": 1.0
            }
            """;

        mockMvc.perform(
            post("/api/ideal-gas")
                .contentType(MediaType.APPLICATION_JSON)
                .content(payload)
        )
        .andExpect(status().isBadRequest());
    }
}
# Thermo-Sim Architecture  
*High-level system design for the physics thermodynamics simulator.*

---

## 1. Overview

Thermo-Sim is structured as a **full-stack web application** with a JavaScript/TypeScript frontend and a Java Spring Boot backend, backed by a relational database (PostgreSQL).  

The primary goals of the architecture are:

- Separation of concerns (UI, simulation logic, persistence)
- Testability of physics and simulation logic
- Extensibility for future modules (calorimetry, phase changes, engine cycles)
- A clear path from MVP to more advanced features

---

## 2. High-Level Diagram (Conceptual)

**Client (Browser)**
- React SPA (Single Page Application)
- UI components, charts, controls
- Frontend physics utilities (ideal gas, basic thermo)

⬇️ communicates via HTTP/JSON

**Backend (Spring Boot)**
- REST API
- Scenario & concept management
- Validation and (optional) server-side physics checks

⬇️ persists data to

**Database (PostgreSQL)**
- Scenarios, concepts, metadata
- Future: users, progress, logs

---

## 3. Frontend Architecture

### 3.1 Tech Stack

- **Language:** TypeScript (preferred) or JavaScript  
- **Framework:** React  
- **Build Tool:** Vite or similar  
- **Charting:** Chart.js, Recharts, or similar library  
- **State Management:** React hooks (`useState`, `useReducer`); can introduce a global store later if needed  

### 3.2 Responsibilities

- Render the UI (controls, sliders, charts, text explanations)
- Perform **immediate** thermodynamics calculations for responsiveness  
- Animate processes on p–V diagrams  
- Call backend APIs to:
  - Fetch predefined scenarios
  - Save custom scenarios
  - Load concept cards/explanations

### 3.3 Suggested Directory Structure

```bash
frontend/
  src/
    components/
      GasSandbox.tsx
      PvDiagram.tsx
      ProcessControls.tsx
      ScenarioList.tsx
      ScenarioDetails.tsx
      Layout/
        Header.tsx
        Footer.tsx
        Sidebar.tsx
    pages/
      HomePage.tsx
      SimulatorPage.tsx
      StudyModePage.tsx
    utils/
      thermo.ts      # ideal gas + basic thermo helpers
      units.ts       # unit conversion helpers
    hooks/
      useScenario.ts
      useSimulationState.ts
    services/
      apiClient.ts   # wrapper for fetch/axios to call backend
    styles/
      global.css
      theme.css
    main.tsx
    App.tsx
```

---

## 4. Backend Architecture

### 4.1 Tech Stack

- **Language:** Java  
- **Framework:** Spring Boot  
- **Modules:**  
  - Spring Web (REST API)  
  - Spring Data JPA (ORM)  
  - Validation (for DTOs)  
  - Spring Security (optional, for auth later)  

### 4.2 Responsibilities

- Expose REST API endpoints to the frontend
- Store and retrieve:
  - Scenarios (predefined + user-created)
  - Physics concept explanations
- Optionally perform:
  - Additional validation on physics inputs
  - Heavier or more complex computations (future)

### 4.3 Suggested Package Structure

```bash
backend/
  src/main/java/com/thermosim/
    ThermoSimApplication.java
    config/
      WebConfig.java
    controller/
      ScenarioController.java
      ConceptController.java
    dto/
      ScenarioDto.java
      ConceptDto.java
    entity/
      Scenario.java
      Concept.java
    repository/
      ScenarioRepository.java
      ConceptRepository.java
    service/
      ScenarioService.java
      ConceptService.java
      PhysicsValidationService.java
```

---

## 5. Database Design

### 5.1 Database Choice

- **PostgreSQL** chosen for:
  - Good JSON support
  - Strong open-source ecosystem
  - Familiarity in many backend environments

### 5.2 Core Tables

**`scenarios`**

- `id` (PK, UUID or bigint)
- `title` (text)
- `description` (text)
- `topic` (text, e.g., "ideal_gas", "pv_diagram")
- `initial_state` (JSON: P, V, T, n)
- `process_type` (enum-like text: ISOTHERMAL, ISOBARIC, ISOCHORIC, CUSTOM)
- `final_state` (JSON)
- `difficulty_level` (int or text: "intro", "intermediate", "advanced")
- `created_at` (timestamp)
- `updated_at` (timestamp)

**`concepts`**

- `id` (PK)
- `topic` (text)
- `title` (text)
- `body_markdown` (text)
- `tags` (text[] or JSONB)
- `created_at` (timestamp)
- `updated_at` (timestamp)

Future tables:

- `users`
- `user_scenarios`
- `activity_logs`

---

## 6. API Design (Draft)

### 6.1 Scenario Endpoints

```http
GET /api/scenarios
  - List all scenarios (with optional filters)

GET /api/scenarios/{id}
  - Get details for one scenario

POST /api/scenarios
  - Create a new user-defined scenario

PUT /api/scenarios/{id}
  - Update an existing scenario (future)

DELETE /api/scenarios/{id}
  - Delete a scenario (future, likely restricted)
```

### 6.2 Concept Endpoints

```http
GET /api/concepts
  - List concepts, optionally filter by topic/tag

GET /api/concepts/{id}
  - Fetch a single concept card
```

### 6.3 Health & Utility

```http
GET /api/health
  - Basic health check

GET /api/version
  - Returns app version and build info
```

---

## 7. Simulation Logic Placement

### 7.1 Frontend-First Simulation (MVP)

For responsiveness and simplicity, initial implementations of:

- Ideal gas law solving
- Work/heat calculations for simple processes
- Unit conversions

…will live in `frontend/src/utils/thermo.ts`.

Advantages:

- Instant feedback without network latency
- Easier iteration on UI + math logic
- No backend dependency to run simulations locally

### 7.2 Backend Validation & Advanced Computation (Future)

For more complex simulations or multi-user / heavy-load features:

- Mirror key physics functions on the backend, e.g., `PhysicsValidationService`
- Add endpoints like `/api/compute/engine-cycle` for server-side simulation
- Enable future features:
  - Exporting reports
  - Running long/complex simulations
  - Sharing scenarios via public links

---

## 8. Security & Auth (Future)

Initially, the app can run **without authentication**.  

Later, if user accounts are implemented:

- Introduce JWT-based auth or session-based login
- Add roles:
  - `student`
  - `instructor`
  - `admin`
- Restrict operations like:
  - Deleting scenarios
  - Editing global/shared content

---

## 9. Logging & Monitoring (Future)

### Frontend
- Basic console logging during development
- Error boundary components to catch UI crashes

### Backend
- Structured logs via Spring Boot logging
- Request/response logs for critical endpoints
- Potential integration with external log services in production

---

## 10. Testing Strategy

### Frontend Tests

- Unit tests for `thermo.ts` (math & physics helpers)
- Component tests for key views (Jest + React Testing Library)

### Backend Tests

- Unit tests for services
- Integration tests for controllers (MockMVC or WebTestClient)
- Database integration tests (Testcontainers or local test DB)

---

## 11. Deployment Considerations

### Local Development

- Run frontend and backend separately:
  - Frontend: `npm run dev` on `http://localhost:5173` (example)
  - Backend: Spring Boot on `http://localhost:8080`

- Use a CORS policy in backend to allow the frontend origin.

### Production (Future)

- Frontend built as static assets and served via:
  - CDN (Netlify, Vercel, GitHub Pages with a separate backend host)
- Backend deployed to:
  - A cloud VM (e.g., AWS EC2, DigitalOcean)
  - A container platform (Docker + Kubernetes, or Docker Compose)

---

## 12. Evolution Path

As the project grows:

- Extract physics logic into a shared library (potentially reused by both frontend & backend)
- Introduce a more formal plugin system for new modules (calorimetry, phase changes)
- Add role-based access control if needed for classes/instructors
- Consider a public API for external tools to query scenarios or concepts

---

## 13. Notes

This architecture document is a **living document**.  
As the project evolves, this file should be updated to reflect real-world decisions, refactors, and lessons learned.

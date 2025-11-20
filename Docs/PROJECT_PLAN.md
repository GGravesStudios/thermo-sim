# Thermo-Sim Project Plan  
*Technical roadmap and current state overview for the thermodynamics simulator.*

---

## 1. Overview

Thermo-Sim is an open-source interactive learning tool that helps students visualize and compute core thermodynamics relationships. The MVP delivers an ideal gas sandbox with a live p–V diagram, backed by a Spring Boot API for solving PV = nRT.

---

## 2. Goals & Educational Purpose

### 🎯 Primary Goals (MVP delivered)
- Provide an intuitive interface for exploring ideal gas laws (solve for P/V/T/n).  
- Visualize p–V behavior for the current state.  
- Establish a modular path toward calorimetry, phase changes, and engine cycles.  
- Support both self-paced learning and classroom demos.

### 📘 Pedagogical Philosophy
- Explain why formulas work, not just what they compute.  
- Reinforce concepts with real-time feedback and visuals.  
- Keep interfaces approachable for students and educators.

---

## 3. MVP Feature Set (current)

### ✔️ Ideal Gas Sandbox
- Numeric inputs for P, V, T, n with a solve-for selector.  
- Live calculation of the fourth variable using PV = nRT.  
- Inline unit conversions (atm/Pa, L/m³, K/°C).  
- Backend solver call available from the UI.

### ✔️ p–V Diagram Module
- Recharts curve derived from current state (isothermal-style).  
- Updates instantly as inputs change.

### ⚙️ Study Mode (foundation)
- Stubbed sample scenarios from the backend (`GET /api/scenarios`) for future study cards.  
- UI wiring to be built next.

---

## 4. Future Features (Phase 2+)

- Calorimetry simulation (coffee-cup), equilibrium temperature, heat balance.  
- Phase changes & heating curves with latent heat plateaus.  
- Engine cycles (Otto, Carnot) with efficiency indicators.  
- Advanced visuals (particle box, thermal energy hints).  
- Optional user accounts to save scenarios and track progress.

---

## 5. Architecture Overview

### 5.1 Frontend (current)
**Tech:** TypeScript, React 19, Vite, Recharts  
**Responsibilities:** UI, client-side solver, unit conversions, backend calls  

Key files:
```
frontend/src/App.tsx
frontend/src/components/GasSandbox.tsx
frontend/src/components/PvDiagram.tsx
frontend/src/components/BackendStatus.tsx
frontend/src/utils/thermo.ts
frontend/src/utils/backend.ts
```

### 5.2 Backend (current)
**Tech:** Java 17, Spring Boot 3  
**Responsibilities:** Health check, scenario stub, backend ideal gas solver, CORS for Vite  

Endpoints:
```
GET  /api/health
GET  /api/scenarios
POST /api/ideal-gas/solve
```

### 5.3 Database (planned)
Not yet wired. Planned tables:
- `scenarios` — state JSON, process metadata, difficulty, timestamps.  
- `concepts` — topic, title, markdown body, tags, timestamps.  

---

## 6. Development Workflow

1. Open or pick up an issue (label with frontend/backend/docs/physics).  
2. Branch from main:
   ```
   git checkout -b feature/my-feature
   ```
3. Develop locally  
   - Backend: `cd backend && ./mvnw spring-boot:run` (port 8080)  
   - Frontend: `cd frontend && npm install && npm run dev` (port 5173)  
4. Keep commits small and descriptive.  
5. Open a PR with what/why/how to test; include physics notes if relevant.  

Coding notes:
- Add concise comments for any non-obvious physics/math.  
- Prefer pure functions in `thermo.ts` for testability.  
- Lint/format per project defaults (TypeScript/ESLint, Java conventions).

---

## 7. Milestones

- 🟦 **Milestone 1 — Frontend Prototype (Done):** Ideal gas UI, live p–V chart, thermo helpers.  
- 🟩 **Milestone 2 — Interactive Simulator (In progress):** Backend solver integration ✅; add tests; wire study mode UI.  
- 🟧 **Milestone 3 — Backend + DB (Planned):** Scenario persistence, concept storage, migrations.  
- 🟪 **Milestone 4 — Expanded Curriculum (Planned):** Calorimetry, phase changes, engine cycles.  

---

## 8. Physics Validation Checklist

- Unit checks and dimensional analysis.  
- Standard identities: \(PV = nRT\), \(W = \int P\, dV\), \(Q = n C \Delta T\), \(ΔU = n C_v ΔT\).  
- When adding new formulas, cite references in docs or PR description.  

---

## 9. Next Steps

- Add automated tests (frontend thermo helpers; backend ideal gas controller).  
- Build study mode UI that consumes `/api/scenarios`.  
- Implement work/heat for basic processes in `thermo.ts`.  
- Draft calorimetry module requirements and UI sketches.  
- Publish “good first issue” items to onboard contributors.  

---

## 10. Maintainer

Gabriel Graves (GGravesStudios) — Creator, Developer, Student Researcher

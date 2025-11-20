

# Thermo-Sim Roadmap  
*A living plan for features, phases, and milestones.*

---

## 1. Vision

Thermo-Sim aims to become a robust, open-source platform for learning and visualizing thermodynamics concepts.  
This roadmap outlines how the project will grow from an MVP into a richer ecosystem of simulations, study tools, and educator resources.

---

## 2. Phase Overview

- **Phase 0 – Foundation & Docs**  
  Repository setup, documentation, architecture, contributor guidelines.

- **Phase 1 – MVP Simulator (Ideal Gas + p–V)**  
  Core simulator for ideal gas laws and basic thermodynamic processes.

- **Phase 2 – Extended Thermodynamics Modules**  
  Calorimetry, phase changes, and more advanced energy concepts.

- **Phase 3 – Engine Cycles & Advanced Visualizations**  
  Cycles (Carnot, Otto, etc.) and more sophisticated visual and numerical tools.

- **Phase 4 – Learning Platform Features**  
  User accounts, progress tracking, class integration, and educator tools.

Each phase can overlap; this is a guide, not a rigid schedule.

---

## 3. Phase 0 – Foundation & Docs ✅ (Done)

**Goals:**
- Create a clean, welcoming repository.
- Define architecture and contribution expectations.
- Set up a structure that scales with complexity.

**Key Tasks:**
- [x] Initialize GitHub repo (public, MIT license).
- [x] Add `README.md` with project overview.
- [x] Create `Docs/PROJECT_PLAN.md`.
- [x] Create `Docs/CONTRIBUTING.md`.
- [x] Create `Docs/CODE_OF_CONDUCT.md`.
- [x] Create `Docs/architecture.md`.
- [x] Create `Docs/ROADMAP.md`.
- [x] Start dev logs in `Docs/`.

---

## 4. Phase 1 – MVP Simulator (Ideal Gas + p–V) ✅ (Delivered)

**Core Goal:**  
Deliver a working, interactive simulator for ideal gas behavior and simple p–V processes that runs locally.

### 4.1 Frontend

- [x] Scaffolded React + TypeScript frontend via Vite.
- [x] Implemented base layout (header, panels, footer).
- [x] Built **Ideal Gas Sandbox** UI:
  - [x] Inputs for P, V, T, n with solve-for selector.
  - [x] Live calculation of the fourth variable using PV = nRT.
  - [x] Basic unit conversions (atm/Pa, L/m³, °C/K) shown inline.
- [x] Created **p–V chart** with Recharts:
  - [x] Generates isothermal-style curve from current state.
- [x] Added a **results/explanation panel**:
  - [x] Shows solved variable, units, and PV = nRT reminder.
- [x] Backend connectivity indicator.

### 4.2 Simulation Logic

- [x] Implemented `thermo.ts` utility:
  - [x] Ideal gas law solver.
  - [ ] Work/heat calculations for isothermal, isobaric, isochoric. *(planned)*
  - [x] Unit conversion helpers.
- [ ] Add unit/component tests for core physics helpers. *(todo)*

### 4.3 Backend Skeleton

- [x] Scaffolded Spring Boot application.
- [x] `GET /api/health` endpoint.
- [x] `GET /api/scenarios` stub for study mode seeds.
- [x] `POST /api/ideal-gas/solve` endpoint.
- [x] CORS configuration for Vite dev origin.
- [x] Local dev conventions: backend `:8080`, frontend `:5173`.

### 4.4 Completion Criteria

- A user can:
  - Run frontend and backend locally. ✅
  - Adjust ideal gas variables and see correct outputs. ✅
  - View a p–V diagram updated from current state. ✅
  - Read a short equation reminder. ✅

---

## 5. Phase 2 – Extended Thermodynamics Modules (Next)

**Core Goal:**  
Expand beyond simple ideal gas and basic processes into more topics encountered in intro thermo courses.

### 5.1 Calorimetry

- [ ] Add module for:
  - [ ] Coffee cup calorimeter simulations.
  - [ ] Heat exchange between substances.
- [ ] Input options:
  - [ ] Mass, specific heat, initial temperatures.
- [ ] Output:
  - [ ] Final equilibrium temperature.
  - [ ] Heat gained/lost by each component.
- [ ] Visuals:
  - [ ] Simple container graphic.
  - [ ] Heat flow indicators.

### 5.2 Phase Change & Heating Curves

- [ ] Implement **heating curve** simulator:
  - [ ] Track temperature vs heat added.
  - [ ] Represent phase changes with plateaus.
- [ ] Allow users to:
  - [ ] Select substance (e.g., water, etc.).
  - [ ] Specify mass and heating rate.
- [ ] Highlight:
  - [ ] Specific heat regions.
  - [ ] Latent heat sections.

### 5.3 Study Mode Enhancements

- [ ] Add “guided examples” that step through:
  - [ ] Calorimetry problems.
  - [ ] Heating curve interpretation.
- [ ] Include small multiple-choice questions or reflection prompts.

---

## 6. Phase 3 – Engine Cycles & Advanced Visualizations (Future)

**Core Goal:**  
Introduce more advanced concepts often taught in thermodynamics and physical chemistry.

### 6.1 Engine Cycles

- [ ] Implement visualizations for:
  - [ ] Otto cycle.
  - [ ] Carnot cycle (as ideal reference).
- [ ] Show:
  - [ ] p–V diagrams of cycles.
  - [ ] Work done per cycle.
  - [ ] Efficiency (η) calculations.
- [ ] Optional: allow parameter adjustments (compression ratio, temperatures, etc.).

### 6.2 Advanced Visualizations

- [ ] Explore 3D or 2D particle-based visualization:
  - [ ] Simulate gas particles in a box.
  - [ ] Show how changes in temperature/pressure affect motion.
- [ ] Animate:
  - [ ] Expansion/compression.
  - [ ] Energy transfer.

---

## 7. Phase 4 – Learning Platform Features (Future)

**Core Goal:**  
Turn Thermo-Sim from a single tool into a learning platform that supports students and educators.

### 7.1 User Accounts (Optional / Future)

- [ ] Authentication system (JWT or session-based).
- [ ] User roles (student, educator, admin).
- [ ] Save/load:
  - [ ] Custom scenarios.
  - [ ] Progress and completion of study modules.

### 7.2 Instructor Tools

- [ ] Ability to:
  - [ ] Create curated sets of scenarios.
  - [ ] Share links with students.
- [ ] Analytics (optional):
  - [ ] Track scenario usage.
  - [ ] Aggregate performance on embedded quizzes.

---

## 8. Community & Ecosystem

**Ongoing Goals:**

- [ ] Create “good first issue” tasks for new contributors.
- [ ] Maintain clear docs and changelogs.
- [ ] Encourage student contributions from physics, math, and CS communities.
- [ ] Explore translations / localization for international use.

---

## 9. Roadmap Maintenance

This roadmap is a **living document**.  
As the project evolves:

- Tasks may be re-prioritized.
- New phases may be added.
- Some items may be removed or postponed.

Contributors are welcome to propose changes to the roadmap via issues or pull requests.

---

# Thermo-Sim Project Plan  
*A detailed technical and development roadmap for the physics thermodynamics simulator.*

---

## 1. Overview

**Thermo-Sim** is an open-source interactive learning tool designed to help students understand core thermodynamics concepts through visualization, simulation, and guided problem-solving. This document outlines the vision, architecture, milestones, and development workflow for the project.

---

## 2. Goals & Educational Purpose

### 🎯 Primary Goals
- Provide an intuitive interface for exploring **ideal gas laws**  
- Visualize **p-V diagrams**, thermodynamic processes, and heat/work calculations  
- Build a modular system to expand into **calorimetry**, **phase changes**, and **engine cycles**  
- Support both **self-paced learning** and **classroom demonstrations**

### 📘 Pedagogical Philosophy
- Show *why* formulas work, not just *what* they calculate  
- Foster scientific intuition with animations & real-time feedback  
- Provide explanations that reinforce conceptual understanding  

---

## 3. MVP Feature Set

### ✔️ 3.1 Ideal Gas Sandbox
- Input fields & sliders for:
  - Pressure (P)
  - Volume (V)
  - Temperature (T)
  - Moles (n)
- Automatically compute the fourth variable
- Unit conversions:
  - atm ↔ Pa  
  - L ↔ m³  
  - °C ↔ K  
- "Lock variable" system: user chooses which variable stays constant

### ✔️ 3.2 p–V Diagram Module
- Real-time plotting of state points  
- Support for:
  - Isothermal processes
  - Isobaric processes
  - Isochoric processes
- Animated transitions between states  
- Calculations:
  - Work (W)
  - Heat (Q)
  - Internal energy ΔU

### ✔️ 3.3 Study Mode (Scenarios)
- Pre-built example simulations  
- Step-by-step explanation panels  
- Conceptual questions  
- Scenario “cards” loaded from DB or local config  

---

## 4. Future Features (Phase 2+)

- **Calorimetry simulation**
  - Coffee cup calorimeter
  - Bomb calorimeter (approx.)
  - Heating curves & latent heat

- **Phase Changes**
  - Solid ↔ liquid ↔ gas transitions
  - Heat vs. temperature graphs

- **Engine Cycles**
  - Otto cycle (spark ignition engine)
  - Carnot cycle
  - Efficiency display + process animations

- **Advanced Visualizations**
  - 3D particle motion (molecular simulation)
  - Heat transfer animations

- **User Accounts (Optional)**
  - Save scenarios
  - Track learning progress  

---

## 5. Architecture Overview

### 5.1 Frontend Architecture
**Tech:** JavaScript/TypeScript, React (planned), Vite  
**Responsibilities:**
- UI components (sliders, inputs, charts)
- p-V diagram rendering
- Simulation control logic
- Fetching/storing scenario data from backend
- Interactive animations

**Key Components (Planned):**
```
/frontend/src/
  components/
    GasSandbox.jsx
    PvDiagram.jsx
    ProcessControls.jsx
    ScenarioCard.jsx
  utils/
    thermo.js
  pages/
    Home.jsx
    Simulator.jsx
    StudyMode.jsx
```

---

### 5.2 Backend Architecture
**Tech:** Java + Spring Boot  
**Responsibilities:**
- Serve REST API endpoints
- Store/retrieve scenarios, concepts, and logs
- Basic physics calculation verification (optional)
- Handle future user accounts

**Planned Endpoints:**
```
GET /api/scenarios         
GET /api/scenarios/{id}   
POST /api/scenarios      
GET /api/concepts         
```

---

### 5.3 Database Schema (Initial)

**Tables:**

**`scenarios`**
- id (PK)  
- title  
- description  
- initial_state (JSON: P,V,T,n)
- process_type (enum)
- final_state (JSON)
- difficulty_level  

**`concepts`**
- id (PK)
- topic
- title
- body_markdown

---

## 6. Development Workflow

### 6.1 Flow
1. Create issue for feature/bug  
2. Assign label: `frontend`, `backend`, `documentation`, `physics-check`, etc.  
3. Branch naming convention:
```
feature/pv-diagram
feature/ideal-gas-solver
docs/architecture
fix/unit-conversion
```
4. Submit pull request  
5. Automatic checks (future)  
6. Merge  

---

## 7. Milestones

### 🟦 **Milestone 1 — Frontend Prototype**
- Ideal gas calculator UI  
- Basic p–V chart using dummy data  
- Thermodynamics utilities module  

### 🟩 **Milestone 2 — Interactive Simulator**
- Animations for isothermal/isobaric/isochoric  
- Equation/explanation panel  
- Study mode v1  

### 🟧 **Milestone 3 — Backend + DB**
- Spring Boot API structure  
- Scenario CRUD  
- DB integration  

### 🟪 **Milestone 4 — Expanded Curriculum**
- Calorimetry  
- Phase changes  
- Engine cycles  

---

## 8. Physics Validation Checklist

Each calculation/module will be validated by:
- Unit checks  
- Dimensional analysis  
- Standard thermodynamic identities:
  - \(PV=nRT\)  
  - \(W = \int P\,dV\)  
  - \(Q = n C \Delta T\)
  - \(ΔU = n C_v ΔT\)

(Optional) Add a `physics-tests/` directory later.

---

## 9. Community & Contribution Philosophy

Thermo-Sim aims to be:
- Beginner-friendly  
- Transparent  
- Educational for both developers *and* users  
- Open to students learning to code and learning physics  

A separate `CONTRIBUTING.md` file will outline contributor workflows.

---

## 10. Next Steps

- Build frontend skeleton  
- Implement ideal gas calculator  
- Start backend scaffolding  
- Add architecture documentation  
- Open issues for community contributions  

---

## 11. Maintainer

**Gabriel Graves (GGravesStudios)**  
Creator, Developer, Student Researcher

---

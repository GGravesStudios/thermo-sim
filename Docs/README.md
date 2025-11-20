# Thermo-Sim 🔥  
**An open-source thermodynamics simulator for students, educators, and science enthusiasts.**

Thermo-Sim now has a working MVP: an ideal gas sandbox with a live p–V diagram, backed by a Spring Boot API that can solve PV = nRT on demand.

---

## 🎯 What you can do today

- Solve the ideal gas law locally in the browser or via the backend solver.
- Plot an isothermal-style p–V curve that updates as you change P, V, T, and n.
- Hit a health endpoint to verify backend connectivity.
- Fetch sample learning scenarios (stub data) for future study mode work.

---

## 🚀 Run it locally

### Prereqs
- Node.js 18+ (uses Vite)  
- Java 17+ (Spring Boot)  
- npm (or pnpm/yarn) + Maven wrapper provided

### Backend (Spring Boot)
```
cd backend
./mvnw spring-boot:run
# serves on http://localhost:8080
```

### Frontend (Vite + React + Recharts)
```
cd frontend
npm install
npm run dev
# opens on http://localhost:5173
```

The frontend expects the API at `http://localhost:8080` (see `frontend/src/utils/backend.ts`). CORS is already configured for the Vite dev origin.

---

## 🛠️ Dev quickstart (copy/paste)

```
# Terminal 1 — backend
cd backend
./mvnw spring-boot:run

# Terminal 2 — frontend
cd frontend
npm install
npm run dev
```

---

## 🧪 API surface (MVP)

- `GET /api/health` — basic status payload with timestamp.  
- `GET /api/scenarios` — returns placeholder scenarios (ideal gas and calorimetry draft).  
- `POST /api/ideal-gas/solve` — solves for one variable given the other three.

Example request:
```http
POST /api/ideal-gas/solve
Content-Type: application/json

{
  "P_atm": 1,
  "V_L": 22.4,
  "T_K": 273.15,
  "n_mol": 1,
  "solveFor": "V"
}
```

Example response:
```json
{
  "solvedFor": "V",
  "value": 22.4,
  "unit": "L",
  "label": "Volume V",
  "error": null
}
```

Backend constants: R = 0.08206 L·atm / (mol·K). Inputs must be positive; invalid input returns 400 with an error message.

---

## 📂 Repository layout

```
thermo-sim/
├── backend/      # Spring Boot API (health, sample scenarios, ideal-gas solver)
├── frontend/     # Vite + React UI (ideal gas sandbox, p–V chart, backend probe)
├── Docs/         # Architecture, roadmap, project plan, contributing guide
└── .vscode/      # Workspace settings
```

Key entry points:  
- Frontend UI: `frontend/src/App.tsx`, `frontend/src/components/GasSandbox.tsx`, `frontend/src/components/PvDiagram.tsx`  
- Backend routes: `backend/src/main/java/com/thermosim/backend/api/*`

---

## 🧭 Next steps

- Flesh out study mode: render scenario cards from the backend stub.  
- Add unit tests for backend solvers and frontend math helpers.  
- Expand physics modules (calorimetry, phase changes, engine cycles) per `Docs/ROADMAP.md`.

---

## 📝 License

MIT — see `Docs/LICENSE`.

---

## 👨‍💻 Maintainer

**Gabriel Graves (GGravesStudios)** — Creator, Developer, Student Researcher

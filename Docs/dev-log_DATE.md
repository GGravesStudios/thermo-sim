# Development Log — TEMPLATE  
*Copy this file to `dev-log_YYYY-MM-DD.md` for daily notes.*

---

## 📝 Overview  
Use this template to capture daily progress, decisions, obstacles, and next steps for Thermo-Sim.  
Replace the sections below with the specifics for the day.

---

## ✅ Completed Today
<bullets for what shipped today, e.g.>
- Implemented MVP ideal gas sandbox UI and backend solver integration.
- Added p–V diagram using Recharts.
- Documented endpoints in `Docs/README.md`.

---

## 🧠 Key Decisions
<bullets for decisions, e.g.>
- Keep MVP calculations client-side; backend used for validation/teaching parity.
- Use Vite + React 19 for dev speed; Recharts for initial plotting.
- Use Spring Boot 3 with simple controllers before adding persistence.

---

## 🧩 Challenges / Notes
<bullets for issues/blockers, e.g.>
- Need automated tests around `thermo.ts` and `IdealGasController`.
- Decide on persistence approach for scenarios (DB vs. JSON first).
- Performance of chart with more points still to evaluate.

---

## 🚀 Next Steps
<bullets for upcoming work, e.g.>
- Add tests for physics helpers and backend solver endpoints.
- Wire study mode UI to `/api/scenarios`.
- Outline calorimetry module scope and equations to support.

---

## 📅 Additional Notes  
Duplicate this template per day as `Docs/dev-log_YYYY-MM-DD.md`.  
Keep logs in `Docs/` (or a `Docs/dev-log/` folder if you prefer grouping them).

---

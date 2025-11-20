# Contributing to Thermo-Sim

Thanks for your interest in **Thermo-Sim**!  
This project welcomes developers, students, physics enthusiasts, educators, and anyone who wants to help build an open-source thermodynamics simulation tool.

This guide covers how to contribute, the workflow, coding conventions, and community expectations.

---

## 🧭 How to Contribute

There are several ways you can help:

### ✔️ 1. Report Bugs
If you encounter a problem, please open an issue describing:

- What you expected to happen  
- What actually happened  
- Steps to reproduce  
- Screenshots or error messages (if relevant)

Issue template(s) will be added soon.

### ✔️ 2. Suggest Features or Improvements
Have an idea for a new simulation, UI enhancement, or educational feature?  
Open an issue with:

- Description  
- Why it's useful  
- Any reference images/links  
- Technical suggestions (optional)

### ✔️ 3. Submit Pull Requests
If you'd like to contribute code:

1. Find or open an issue  
2. Assign it to yourself (optional)  
3. Create a new branch  
4. Write clean, well-documented code  
5. Open a pull request with a clear title and description  

See the workflow below for details.

### ✔️ 4. Improve Documentation
Contributions to:
- README  
- Project Plan  
- Architecture docs  
- Physics explanations  
- Developer logs  

…are always appreciated.

---

## 🛠 Development Workflow

### 🔀 1. Fork → Clone → Branch

```
git clone https://github.com/GGravesStudios/thermo-sim.git
git checkout -b feature/my-feature
```

Branch naming convention:

```
feature/<name>
fix/<name>
docs/<name>
refactor/<name>
experiment/<name>
```

### 🧪 2. Develop Locally
- Backend: `cd backend && ./mvnw spring-boot:run` (port 8080)  
- Frontend: `cd frontend && npm install && npm run dev` (port 5173)  
- Keep commits small and descriptive  

Good commit examples:
```
feat: add basic p-V diagram renderer
fix: correct unit conversion error in ideal gas calc
docs: expand contributing guidelines
```

### 🧹 3. Coding Standards
- Use clear, descriptive names.  
- Comment physics/math where it might be non-obvious; keep comments concise.  
- Keep components small & modular.  
- Prefer pure functions in simulation logic for easier testing (`thermo.ts`).  

### 📤 4. Submit a Pull Request

Include:
- What the change does and why it matters.  
- How to test it (commands, expected behavior).  
- Any physics references or assumptions.  

Maintainers will review and provide feedback.

---

## 🧪 Physics Validation Expectations

- Cite sources for equations when adding new ones.  
- Standard references used today:
  - \(PV = nRT\)
  - \(W = \int P\, dV\)
  - \(Q = nC\Delta T\)
  - \(ΔU = nC_v\Delta T\)  
- If unsure, open a discussion — collaboration is encouraged.

---

## 🗂 Project Structure Overview (current)

```
Docs/
  README.md
  PROJECT_PLAN.md
  ROADMAP.md
  architecture.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
backend/
  src/main/java/com/thermosim/backend/...   # Spring Boot API
frontend/
  src/...                                  # Vite + React app
```

---

## 🌱 Beginner-Friendly Issues

Look for labels such as:

- `good first issue`
- `help wanted`
- `documentation`
- `frontend`
- `backend`

These are ideal for new contributors or students learning to code.

---

## 🧑‍🤝‍🧑 Community Guidelines

Thermo-Sim follows the project’s **Code of Conduct** (`Docs/CODE_OF_CONDUCT.md`):

- Be respectful and patient.  
- Assume positive intent.  
- Support newcomers.  
- Focus on collaboration.  
Harassment or discrimination is never tolerated.

---

## 💬 Questions?

Feel free to open an issue or start a discussion in the GitHub repository.

---

## 🙌 Thank You

Your contributions — whether code, documentation, physics insight, or suggestions — help move Thermo-Sim forward.  
Thank you for helping build something that supports physics learners everywhere!

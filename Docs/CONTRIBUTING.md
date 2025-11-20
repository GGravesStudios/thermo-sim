# Contributing to Thermo-Sim

Thank you for your interest in contributing to **Thermo-Sim**!  
This project welcomes developers, students, physics enthusiasts, educators, and anyone who wants to help build an open-source thermodynamics simulation tool.

This document outlines how to contribute, the workflow, coding conventions, and community expectations.

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
- Follow frontend/backend setup from README  
- Ensure code runs locally  
- Keep commits small and descriptive  

Good commit examples:
```
feat: add basic p-V diagram renderer
fix: correct unit conversion error in ideal gas calc
docs: expand contributing guidelines
```

### 🧹 3. Coding Standards
- Use clear, descriptive variable names  
- Comment physics calculations generously  
- Keep components small & modular  
- Avoid deeply nested logic when possible  
- Prefer pure functions in simulation logic  

### 📤 4. Submit a Pull Request

A PR should include:

- What the change does  
- Why it's needed  
- How to test it  
- Any physics references (if applicable)  

Maintainers will review and provide feedback.

---

## 🧪 Physics Validation Expectations

Thermo-Sim involves real physics, so contributors should:

- Include references for any equations used  
- Follow standard conventions:
  - \(PV = nRT\)
  - \(W = \int P\, dV\)
  - \(Q = nC\Delta T\)
  - \(ΔU = nC_v\Delta T\)

If you aren’t confident in the physics, open a discussion — it's totally okay.

---

## 🗂 Project Structure Overview

```
Docs/
  PROJECT_PLAN.md
  CONTRIBUTING.md
  ARCHITECTURE.md (coming soon)
backend/ (planned)
frontend/ (planned)
README.md
LICENSE
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

Thermo-Sim follows the project’s **Code of Conduct** (coming soon):

- Be respectful  
- Be patient  
- Assume positive intent  
- Support newcomers  
- Focus on collaboration  

Harassment or discrimination is never tolerated.

---

## 💬 Questions?

Feel free to open an issue or start a discussion in the GitHub repository.

---

## 🙌 Thank You

Your contributions — whether code, documentation, physics insight, or suggestions — help move Thermo-Sim forward.  
Thank you for helping build something that supports physics learners everywhere!


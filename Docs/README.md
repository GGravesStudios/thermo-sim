# Thermo-Sim 🔥  
**An open‑source physics thermodynamics simulator for students, educators, and science enthusiasts.**

Thermo‑Sim is a web application designed to help users visualize and interact with core thermodynamics concepts such as gas laws, heat transfer, calorimetry, and p‑V diagrams. The goal: take what students normally only see as formulas, and turn it into an intuitive, interactive learning tool.

---

## 🎯 Project Goals

- Provide an accessible, visual way to explore **ideal gas behavior**  
- Simulate **thermodynamic processes** (isothermal, isobaric, isochoric)  
- Display **p‑V diagrams** with real‑time calculations  
- Offer **study mode** with guided examples and physics explanations  
- Support open‑source contributions from students and developers  
- Eventually include calorimetry, phase changes, and heat engine cycles  

---

## 🧪 Key Features (MVP)

### ✔️ Ideal Gas Calculator  
- Input or lock values of P, V, T, n  
- Automatically compute the missing variable using \( PV = nRT \)  
- Unit conversions (atm/Pa, L/m³, °C/K)

### ✔️ p‑V Diagram Viewer  
- Plot thermodynamic processes  
- Animate transitions between states  
- Display work, heat, and internal energy changes

### ✔️ Guided Study Mode  
- Pre‑built scenarios  
- Explanation panels  
- Conceptual questions

---

## 🚧 Future Features (Roadmap)

- Calorimetry simulations  
- Phase change + heating curves  
- Carnot / Otto engine visualization  
- User accounts & saved scenarios  
- Physics‑explanation “cards” stored in database  
- 3‑D molecular‑scale gas visualization (stretch goal)

A detailed roadmap will be added soon.

---

## 🖥️ Technology Stack

### **Frontend**
- JavaScript / TypeScript  
- React (planned)  
- Chart.js or Recharts for visualizations  

### **Backend**
- Java + Spring Boot REST API  
- Spring Data JPA  

### **Database**
- PostgreSQL (recommended)  

---

## 📂 Repository Structure (initial)

```
thermo-sim/
├── backend/           # Java Spring Boot backend (TBA)
├── frontend/          # JS/React frontend (TBA)
├── docs/
│   ├── dev-log/
│   └── architecture.md
├── README.md
└── LICENSE
```

*This structure will evolve as the project grows.*

---

## 🚀 Getting Started

### Clone the repository
```
git clone https://github.com/GGravesStudios/thermo-sim.git
cd thermo-sim
```

### Frontend setup (placeholder)
```
cd frontend
npm install
npm run dev
```

### Backend setup (placeholder)
```
cd backend
./mvnw spring-boot:run
```

---

## 🤝 Contributing

We welcome contributions!  
A full `CONTRIBUTING.md` will be added soon, but early contributions may include:

- Bug reports  
- Feature suggestions  
- UI mockups  
- Physics validation checks  
- Starter implementations for frontend or backend  

If you're new to open source, this is a friendly project to learn with.

---

## 📝 License

This project will be released under the **MIT License**.  
The `LICENSE` file will describe permissions and limitations.

---

## 🌟 Why This Matters

Physics is hard — but understanding it shouldn’t be inaccessible.

This simulator aims to help:
- Students who struggle with visualization  
- Instructors who need demonstration tools  
- Self-learners exploring physics  
- Developers who want to collaborate on an educational open-source project  

---

## 👨‍💻 Maintainer

**Gabriel Graves (GGravesStudios)**  
Creator, Developer, Student Researcher

---

## 📢 Stay Tuned

New features, UI mockups, architecture docs, and contributor guides are coming soon.  
Watch the repo ⭐ to follow updates.
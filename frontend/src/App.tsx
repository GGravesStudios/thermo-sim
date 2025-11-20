import React, { useState } from 'react';
import './styles/global.css';
import { GasSandbox } from './components/GasSandbox';
import { PvDiagram } from './components/PvDiagram';
import type { IdealGasInput } from './utils/thermo';
import { BackendStatus } from './components/BackendStatus';

const App: React.FC = () => {
  const [gasState, setGasState] = useState<IdealGasInput>({
    P_atm: 1,
    V_L: 22.4,
    T_K: 273.15,
    n_mol: 1,
    solveFor: 'V',
  });

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Thermo-Sim</h1>
        <p>Interactive Thermodynamics Simulator (MVP)</p>
      </header>

      <main className="app-main">
        <section className="panel panel-left">
          <h2>Ideal Gas Sandbox</h2>
          <GasSandbox inputs={gasState} onChange={setGasState} />
        </section>

        <section className="panel panel-right">
          <h2>p–V Diagram</h2>
          <PvDiagram inputs={gasState} />
          <BackendStatus />
        </section>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Thermo-Sim · Built by Gabriel Graves</small>
      </footer>
    </div>
  );
};

export default App;
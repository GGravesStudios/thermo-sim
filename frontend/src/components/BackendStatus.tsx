import React, { useEffect, useState } from 'react';
import { fetchHealth } from '../utils/backend';

interface HealthState {
  status: string;
  app: string;
  timestamp: string;
}

export const BackendStatus: React.FC = () => {
  const [health, setHealth] = useState<HealthState | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealth()
      .then(data => {
        setHealth(data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError('Backend not reachable');
      });
  }, []);

  return (
    <div style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.8 }}>
      <strong>Backend status:</strong>{' '}
      {error && <span style={{ color: '#f97373' }}>{error}</span>}
      {health && !error && (
        <span>
          {health.status} · {health.app} · {new Date(health.timestamp).toLocaleTimeString()}
        </span>
      )}
    </div>
  );
};
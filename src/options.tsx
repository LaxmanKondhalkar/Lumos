import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from './pages/Options';

const container = document.getElementById('options-root');
if (container) {
  const root = createRoot(container);
  root.render(<Options />);
}

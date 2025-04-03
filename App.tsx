import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <Dashboard />;
}

export default App;
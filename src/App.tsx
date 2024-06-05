// App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/styles.css';

const App: React.FC = () => {



  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;

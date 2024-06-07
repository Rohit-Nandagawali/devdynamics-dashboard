// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/styles.css';
import { Github, Loader } from 'lucide-react';
import './App.css'
import { ApiResponse, AuthorWorklog } from './types/types';
import { fetchActivityData } from './services/api';




const App: React.FC = () => {

  const [activityData, setActivityData] = useState<AuthorWorklog>();
  const [developerNames, setDeveloperNames] = useState<string[]>([]);


  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Making api call
        const worklogData = await fetchActivityData()

        // storing all activity data
        setActivityData(worklogData.AuthorWorklog);

        const FetchedDeveloperNames = worklogData.AuthorWorklog.rows.map((row) => row.name)

        // storing names
        setDeveloperNames(FetchedDeveloperNames)

      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="app">
      {!loading && !error && developerNames.length > 0 ? (
        <Router>
          <Sidebar developerNames={developerNames} />
          <Routes>
            <Route path="/" element={<Navigate to={`/${developerNames[0]}`} />} />
            <Route path="/:developer" element={<Dashboard authorWorklog={activityData} />} />
          </Routes>
        </Router>
      ) : (
        loading ? (
          <div className='loader'><Loader size={100} /></div>
        ) : (
          error && <div className='loader'><Loader size={100} /></div>
        )

      )
      }

      <a href='#' className="github">
        <Github />
        <span className='myname'>Design & Developed by Rohit Nandagawali</span>
      </a>

    </div>
  );
};

export default App;

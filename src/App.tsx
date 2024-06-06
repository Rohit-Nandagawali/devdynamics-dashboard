// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/styles.css';

interface ActivityMeta {
  label: string;
  fillColor: string;
}
interface ActiveDays {
  days: number;
  isBurnOut: boolean;
  insight: string[] | undefined | null
}

interface Activity {
  name: string;
  totalActivity: any[];
  dayWiseActivity: any[];
  activeDays: ActiveDays;
}
export interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: Activity[];
}

interface ApiResponse {
  AuthorWorklog: AuthorWorklog;
}


const App: React.FC = () => {

  const [activityData, setActivityData] = useState<AuthorWorklog>();
  const [developerNames, setDeveloperNames] = useState<string[]>([]);


  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:3001/data');
        const worklogData = response.data
        // storing all activity data
        setActivityData(worklogData.AuthorWorklog);


        const FetchedDeveloperNames = worklogData.AuthorWorklog.rows.map((row) => row.name)

        // storing names
        setDeveloperNames(FetchedDeveloperNames)

        // console.log(developerNames);

      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="app">
      {/* 
      <Sidebar developerNames={developerNames} />
      <Dashboard /> */}
      <Router>
        <Sidebar developerNames={developerNames} />
        <Routes>
          <Route path="/:developer" element={<Dashboard authorWorklog={activityData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

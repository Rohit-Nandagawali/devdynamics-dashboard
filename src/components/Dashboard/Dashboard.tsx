// components/Dashboard.tsx
import React from 'react';
import './Dashboard.css'
import ActiveCard from '../ActiveCard/ActiveCard';
import BurnoutCard from '../BurnoutCard/BurnoutCard';
import DailyActivityChart from '../Charts/DailyActivityChart';
import SummaryCard from '../SummaryCard/SummaryCard';
import DailyActivityCard from '../DailyActivityCard/DailyActivityCard';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-content-first">
                <BurnoutCard isBurnOut={true} />
                <ActiveCard title={"Active"} number={10} unit={"10 Days of Consistency"} />
                <ActiveCard title={"Insights"} number={10} unit={"days"} />
            </div>
            <div className="dashboard-content-second">
                <SummaryCard />
                <DailyActivityCard />
            </div>
        </div>
    );
};

export default Dashboard;
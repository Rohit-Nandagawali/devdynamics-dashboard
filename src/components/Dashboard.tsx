// components/Dashboard.tsx
import React from 'react';
import './Dashboard.css'
import ActiveCard from './ActiveCard';
import BurnoutCard from './BurnoutCard';
import DashboardSummery from './DashboardSummery';
import DailyActivity from './DailyActivity';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-content-first">
                <BurnoutCard isBurnOut={true} />
                <ActiveCard title={"Active"} number={10} unit={"10 Days of Consistency"} />
                <ActiveCard title={"Insights"} number={10} unit={"days"} />
            </div>
            <div className="dashboard-content-second">
                <div className="dashboard-summery">
                    <div className="dashboard-summery-header">
                        <h3>Activity Summery</h3>
                    </div>
                    <DashboardSummery />
                </div>
                <div className="developer-activity">
                    <div className="dashboard-summery-header">
                        <h3>Activity Summery</h3>
                    </div>
                    <DailyActivity />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
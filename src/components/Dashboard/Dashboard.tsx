// components/Dashboard.tsx
import React from 'react';
import './Dashboard.css'
import ActiveCard from '../ActiveCard/ActiveCard';
import BurnoutCard from '../BurnoutCard/BurnoutCard';
import SummaryCard from '../SummaryCard/SummaryCard';
import DailyActivityCard from '../DailyActivityCard/DailyActivityCard';
import { AuthorWorklog } from '../../App';
import { useParams } from 'react-router-dom';

interface DashboardProps {
    authorWorklog: AuthorWorklog | undefined;
}

const Dashboard: React.FC<DashboardProps> = ({ authorWorklog }) => {

    const { developer } = useParams()

    const developerData = authorWorklog?.rows.find(row => row.name === developer);

    console.log(developerData);


    return (
        <div className="dashboard">
            <div className="dashboard-content-first">
                <BurnoutCard isBurnOut={developerData?.activeDays?.isBurnOut ?? false} />
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
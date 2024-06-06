import React from 'react';
import './Dashboard.css'
import ActiveCard from '../ActiveCard/ActiveCard';
import BurnoutCard from '../BurnoutCard/BurnoutCard';
import SummaryCard from '../SummaryCard/SummaryCard';
import DailyActivityCard from '../DailyActivityCard/DailyActivityCard';
import { AuthorWorklog } from '../../App';
import { useParams } from 'react-router-dom';

import { TotalActivity } from "../../App"

interface DashboardProps {
    authorWorklog: AuthorWorklog | undefined;
}

const Dashboard: React.FC<DashboardProps> = ({ authorWorklog }) => {

    const { developer } = useParams()


    const developerData = authorWorklog?.rows.find(row => row.name === developer);

    console.log("dfdfdj", developerData?.dayWiseActivity);




    return (
        <div className="dashboard">
            <div className="dashboard-content-first">
                <BurnoutCard isBurnOut={developerData?.activeDays?.isBurnOut} />
                <ActiveCard title={"Active"} number={developerData?.activeDays?.days ?? 0} />
                <ActiveCard title={"Insights"} number={10} />
            </div>
            <div className="dashboard-content-second">
                <SummaryCard totalActivity={developerData?.totalActivity ?? null} />
                <DailyActivityCard dayWiseActivityData={developerData?.dayWiseActivity} />
            </div>
        </div>
    );
};

export default Dashboard;
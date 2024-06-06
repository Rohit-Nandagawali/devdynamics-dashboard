import React, { useEffect, useState } from 'react';
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




    // extracting developer data from the name
    const developerData = authorWorklog?.rows.find(row => row.name === developer);


    // extracting colors
    const colors = authorWorklog?.activityMeta?.map(item => (
        item?.fillColor
    ))

    // extracting lables
    const labels = authorWorklog?.activityMeta?.map(item => (
        item?.label
    ))


    return (
        <div className="dashboard">


            <div className="dashboard-content-first">
                <BurnoutCard isBurnOut={developerData?.activeDays?.isBurnOut} />
                <ActiveCard title={"Active"} number={developerData?.activeDays?.days ?? 0} />
                <ActiveCard title={"Insights"} number={10} />
            </div>
            <div className="dashboard-content-second">
                <SummaryCard colors={colors} totalActivity={developerData?.totalActivity ?? null} />
                <DailyActivityCard labels={labels} colors={colors} dayWiseActivityData={developerData?.dayWiseActivity} />
            </div>


        </div>
    );
};

export default Dashboard;
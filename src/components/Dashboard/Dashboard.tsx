import React from 'react';
import './Dashboard.css'
import ActiveCard from '../ActiveCard/ActiveCard';
import BurnoutCard from '../BurnoutCard/BurnoutCard';
import SummaryCard from '../SummaryCard/SummaryCard';
import DailyActivityCard from '../DailyActivityCard/DailyActivityCard';
import { useParams } from 'react-router-dom';
import InsightsCard from '../InsightsCard/InsightsCard';
import { AuthorWorklog } from '../../types/types';


interface DashboardProps {
    authorWorklog: AuthorWorklog | undefined;
}

const Dashboard: React.FC<DashboardProps> = ({ authorWorklog }) => {

    const { developer } = useParams()


    // extracting developer data from the name
    const developerData = authorWorklog?.rows.find(row => row.name === developer)

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

            {
                authorWorklog ?
                    <>
                        <div className="dashboard-content-first">
                            <BurnoutCard isBurnOut={developerData?.activeDays?.isBurnOut} />
                            <ActiveCard title={"Active"} number={developerData?.activeDays?.days ?? 0} />

                            <InsightsCard title={"Insights"} insights={developerData?.activeDays?.insight ?? []} />

                        </div>
                        <div className="dashboard-content-second">

                            <SummaryCard colors={colors} totalActivity={developerData?.totalActivity ?? null} />

                            <DailyActivityCard labels={labels} colors={colors} dayWiseActivityData={developerData?.dayWiseActivity} />
                        </div>
                    </>
                    :
                    <h1>Error </h1>


            }


        </div>
    );
};

export default Dashboard;
import { DayWiseActivity } from "../../types/types";
import DailyActivityChart from "../Charts/DailyActivityChart"
import './DailyActivityCard.css'

interface DailyActivityCardProps {
    dayWiseActivityData: DayWiseActivity[] | undefined;
    colors: string[] | undefined;
    labels: string[] | undefined;
}


const DailyActivityCard: React.FC<DailyActivityCardProps> = ({ dayWiseActivityData, colors, labels }) => {


    return (

        <div className="developer-activity">
            <div className="dashboard-dailyAct-header">
                <h3>Daily Activity</h3>
            </div>
            <DailyActivityChart labels={labels} colors={colors} dayWiseActivityData={dayWiseActivityData} />
        </div>
    )
}
export default DailyActivityCard
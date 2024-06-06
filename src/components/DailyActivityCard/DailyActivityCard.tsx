import { DayWiseActivity } from "../../App"
import DailyActivityChart from "../Charts/DailyActivityChart"
import './DailyActivityCard.css'

interface DailyActivityCardProps {
    dayWiseActivityData: DayWiseActivity[] | undefined
}


const DailyActivityCard: React.FC<DailyActivityCardProps> = ({ dayWiseActivityData }) => {


    return (

        <div className="developer-activity">
            <div className="dashboard-dailyAct-header">
                <h3>Daily Activity</h3>
            </div>
            <DailyActivityChart dayWiseActivityData={dayWiseActivityData} />
        </div>
    )
}
export default DailyActivityCard
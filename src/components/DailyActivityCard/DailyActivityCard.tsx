import DailyActivityChart from "../Charts/DailyActivityChart"
import './DailyActivityCard.css'

const DailyActivityCard: React.FC = () => {
    return (

        <div className="developer-activity">
            <div className="dashboard-dailyAct-header">
                <h3>Daily Activity</h3>
            </div>
            <DailyActivityChart />
        </div>
    )
}
export default DailyActivityCard
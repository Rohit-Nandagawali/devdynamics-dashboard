import { TotalActivity } from "../../App"
import SummaryChart from "../Charts/SummaryChart"
import './SummaryCard.css'

interface SummaryCardProps {
    totalActivity: any[] | null
}

const SummaryCard: React.FC<SummaryCardProps> = ({ totalActivity }) => {
    return (

        <div className="dashboard-summary">
            <div className="dashboard-summary-header">
                <h3>Activity Summery</h3>
            </div>
            <SummaryChart totalActivity={totalActivity} />
        </div>
    )
}
export default SummaryCard
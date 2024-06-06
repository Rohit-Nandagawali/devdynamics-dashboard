import { TotalActivity } from "../../App"
import SummaryChart from "../Charts/SummaryChart"
import './SummaryCard.css'

interface SummaryCardProps {
    totalActivity: TotalActivity[] | null;
    colors: string[] | undefined;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ totalActivity, colors }) => {
    return (

        <div className="dashboard-summary">
            <div className="dashboard-summary-header">
                <h3>Activity Summery</h3>
            </div>
            <SummaryChart colors={colors} totalActivity={totalActivity} />
        </div>
    )
}
export default SummaryCard
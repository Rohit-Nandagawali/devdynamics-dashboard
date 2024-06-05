import SummaryChart from "../Charts/SummaryChart"
import './SummaryCard.css'

const SummaryCard: React.FC = () => {
    return (

        <div className="dashboard-summary">
            <div className="dashboard-summary-header">
                <h3>Activity Summery</h3>
            </div>
            <SummaryChart />
        </div>
    )
}
export default SummaryCard
import React from 'react';
import './InsightsCard.css'
import { Quote } from 'lucide-react';

interface InsightsCardProps {
    title: string;
    insights: string[];
}

const InsightsCard: React.FC<InsightsCardProps> = ({ title, insights }) => {


    return (
        <div className="insight-card">
            <div className="insight-card-header">
                <h3>{title}</h3>
            </div>

            {
                (insights.length === 1 && insights[0] === '') || (!insights.length) ?
                    <span className='No-insight'>No insights available</span>

                    : <div className="insights-container">
                        {insights.map((insight, key) => (
                            <span key={key} className="insight"><Quote />{' '}{insight}</span>
                        ))}
                    </div>

            }


        </div>
    );
};

export default InsightsCard;
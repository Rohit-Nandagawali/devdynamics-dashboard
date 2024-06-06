import React from 'react';
import './ActiveCard.css'

interface ActiveCardProps {
    title: string;
    number: number;
}

const ActiveCard: React.FC<ActiveCardProps> = ({ title, number }) => {
    return (
        <div className="dashboard-card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>

            <span className="number">{number}</span>
            <span className="unit">{number} Days of Consistency</span>
        </div>
    );
};

export default ActiveCard;
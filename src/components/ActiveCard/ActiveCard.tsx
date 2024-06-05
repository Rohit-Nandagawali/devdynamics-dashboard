import React from 'react';
import './ActiveCard.css'

interface ActiveCardProps {
    title: string;
    number: number;
    unit: string;
}

const ActiveCard: React.FC<ActiveCardProps> = ({ title, number, unit }) => {
    return (
        <div className="dashboard-card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>

            <span className="number">{number}</span>
            <span className="unit">{unit}</span>
        </div>
    );
};

export default ActiveCard;
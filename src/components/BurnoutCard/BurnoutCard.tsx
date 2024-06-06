import React from 'react';
import './BurnoutCard.css'
import energy from '../../assets/energy.svg'
import tired from '../../assets/tired.svg'


interface BurnoutCardProps {
    isBurnOut: boolean | undefined
}


const BurnoutCard: React.FC<BurnoutCardProps> = ({ isBurnOut }) => {
    console.log("isBurnOut", isBurnOut);

    return (
        <div className="burnout-card">
            <div className="burnoutcard-header">
                <h3 className='burnout-status'>Burnout Status</h3>
            </div>

            <img className='burnout-icon' src={isBurnOut ? tired : energy} alt={isBurnOut ? "Tired" : "Energytic"} />
            <span className="burnout-msg">{"High spirits, no burnout."}</span>

        </div>
    );
};

export default BurnoutCard;
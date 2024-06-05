import React from 'react';
import './BurnoutCard.css'
import energy from '../assets/energy.svg'


interface BurnoutCardProps {

}


const BurnoutCard: React.FC<BurnoutCardProps> = ({ }) => {
    return (
        <div className="burnout-card">
            <div className="burnoutcard-header">
                <h3 className='burnout-status'>Burnout Status</h3>
            </div>

            <img className='burnout-icon' src={energy} alt="" />
            <span className="burnout-msg">{"High spirits, no burnout."}</span>

        </div>
    );
};

export default BurnoutCard;
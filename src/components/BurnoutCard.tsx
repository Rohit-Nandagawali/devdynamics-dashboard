import React from 'react';
import './BurnoutCard.css'
import energy from '../assets/energy.svg'
import tired from '../assets/tired.svg'


interface BurnoutCardProps {
    isBurnOut: boolean
}


const BurnoutCard: React.FC<BurnoutCardProps> = ({ isBurnOut }) => {
    return (
        <div className="burnout-card">
            <div className="burnoutcard-header">
                <h3 className='burnout-status'>Burnout Status</h3>
            </div>

            <img className='burnout-icon' src={isBurnOut ? tired : energy} alt="" />
            {/* <img className='burnout-icon' src={tired} alt="" /> */}
            <span className="burnout-msg">{"High spirits, no burnout."}</span>

        </div>
    );
};

export default BurnoutCard;
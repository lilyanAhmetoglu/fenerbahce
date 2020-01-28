import React from 'react';
import PromotionAnimation from './animation'
import Enrol from './enroll'
const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:"#ffffff"}}>
            <div className="container">
                <PromotionAnimation />
                <Enrol/>
            </div>
        </div>
    );
};

export default Promotion;
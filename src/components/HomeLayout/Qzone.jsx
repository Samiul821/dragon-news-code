import React from 'react';
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import groundImg from "../../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='text-xl font-semibold mb-5'>Q-Zone</h2>
            <div className='space-y-5 flex flex-col justify-center'>
               <img src={swimmingImg} alt="Swimming" />
               <img src={classImg} alt="Class" />
               <img src={groundImg} alt="Play Ground" />
            </div>
        </div>
    );
};

export default Qzone;
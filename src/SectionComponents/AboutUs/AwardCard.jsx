

// src/components/Card.jsx
import React from 'react';



const awardCard = ({ title, description, icon }) => {
    return (
        <div className="bg-[rgb(243,243,243)] flex flex-col  w-full max-h-[550px] gap-[30px]  rounded-[30px] p-6 text-center hover:shadow-xl transition duration-300">
            <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default awardCard;

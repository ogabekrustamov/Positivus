

// src/components/Card.jsx
import React from 'react';



const awardCard = ({ title, description, icon }) => {
    return (
        <div className="bg-[rgb(243,243,243)] flex flex-col  max-w-[250px] max-h-[450px] gap-[20px] max-sm:w-[180px] rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
            <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default awardCard;

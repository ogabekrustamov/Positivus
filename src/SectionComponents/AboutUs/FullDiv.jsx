



// src/components/Card.jsx
import React from 'react';


const FullDiv = () => {
    return (
        <div className="bg-[rgb(207,255,113)] flex  w-[90vw] max-w-[1240px] max-h-[750px]  border-[1px] border-black p-[70px] gap-[30px] rounded-[45px]  mt-[60px] mb-[40px]  max-lg:flex-col   ">

            <div className="w-[60%] flex flex-col gap-[20px] justify-center max-lg:w-full">
                <h3 className="text-xl font-semibold mb-2 text-[30px]">Join Our Team</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis doloribus earum libero necessitatibus quas quibusdam quidem vitae. Dignissimos, praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet, facilis illum molestias quis voluptatibus.</p>
                <button className="w-[200px] h-[50px] text-white transition-transform duration-400  hover:scale-105 bg-black hover:bg-[white] hover:text-black  border-[1px] border-black rounded-[15px]">Explore Careers</button>
            </div>
            <div className="w-[40%] h-full flex max-lg:w-full max-lg:justify-center ">
                <img src="/Image/pod.svg" alt="" className="w-[350px]" />
            </div>


        </div>
    );
};

export default FullDiv;





// src/components/Card.jsx
import React from 'react';
import pod from '../../../public/Image/pod.svg';


const FullDiv = () => {
    return (
        <div className="bg-[rgb(207,255,113)] flex  w-[1240px] h-[400px]  border-[1px] border-black p-[70px] gap-[30px] rounded-[45px]  mt-[60px] max-lg:w-[600px] max-lg:flex-col max-lg:h-[680px] max-sm:h-[730px] max-sm:w-[410px]">

            <div className="w-[60%] flex flex-col gap-[20px] justify-center max-lg:w-full">
                <h3 className="text-xl font-semibold mb-2 text-[30px]">Join Our Team</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis doloribus earum libero necessitatibus quas quibusdam quidem vitae. Dignissimos, praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet, facilis illum molestias quis voluptatibus.</p>
                <button className="w-[200px] h-[50px] text-white bg-black rounded-[15px]">Explore Careers</button>
            </div>
            <div className="w-[40%] h-full flex max-lg:w-full max-lg:justify-center ">
                <img src={pod} alt="" className="w-[350px]" />
            </div>


        </div>
    );
};

export default FullDiv;

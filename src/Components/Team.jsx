
import firstp from '../assets/firstp.svg';
import linkedin from '../assets/linkedin.svg';
import secondp from '../assets/secondp.svg';
import thirdp from '../assets/thirdp.svg';
import fourthp from '../assets/fourthp.svg';
import fifthp from '../assets/fifthp.svg';
import sixthp from '../assets/sixthp.svg';

import React from "react";

const Team = () => {

    return (
        <div className="flex flex-col max-lg:items-center">
            <div data-aos="fade-up" className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>

            <div className="grid grid-cols-3 grid-row-2 gap-[40px] mt-[50px] max-lg:grid-cols-2 max-lg:grid-rows-3  max-lg:gap-[40px] max-sm:flex max-sm:flex-col items-center">
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={firstp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[55px]">
                            <h2 className="font-bold">John Smith</h2>
                            <p>CEO and Founder</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                    </div>
                </div>
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={secondp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[30px]">
                            <h2 className="font-bold">Jane Doe</h2>
                            <p>Director of Operations</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        7+ years of experience in project management and team leadership. Strong organizational and communication skills
                    </div>
                </div>
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={thirdp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[30px]">
                            <h2 className="font-bold">Michael Brown</h2>
                            <p>Senior SEO Specialist</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
                    </div>
                </div>
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={fourthp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[55px]">
                            <h2 className="font-bold">Emily Johnson</h2>
                            <p>PPC Manager</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
                    </div>
                </div>
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={fifthp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[30px]">
                            <h2 className="font-bold">Brian Williams</h2>
                            <p>Social Media Specialist</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
                    </div>
                </div>
                <div data-aos="fade-up" className="w-[387px] h-[331px] p-[40px] flex flex-col border-[1px] border-black border-b-[6px] rounded-[45px] items-center">
                    <div className="flex gap-[15px] pb-[20px] border-b-[1px] border-black">
                        <img src={sixthp} className="w-[102px] h-[102px]" alt=""/>
                        <div className=" mt-[55px]">
                            <h2 className="font-bold">Sarah Kim</h2>
                            <p>Content Creator</p>
                        </div>
                        <img src={linkedin}  className="w-[34px] mb-[50px]" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center" >
                        2+ years of experience in writing and editing
                        Skilled in creating compelling, SEO-optimized content for various industries
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team

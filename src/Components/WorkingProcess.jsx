// import React from "react";
// import DropdownItem from "./AccordionItem.jsx";

import React from "react";
import AccordionList from "./AccordionList";



const WorkingProcess = () => {




    return (
        <div className=" flex flex-col max-lg:items-center mb-[40px]">

            <div data-aos="fade-up" className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Our Working Process </h1></span>
                <div
                    className=" h-[46px]  max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Step-by-Step Guide to Achieving Your Business Goals
                </div>
            </div>


            <div className=" bg-white mt-[40px]">
                <AccordionList />
            </div>

        </div>
    );
};

export default WorkingProcess;
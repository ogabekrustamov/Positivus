import React from "react";

const OurJourney = () => {

    return (
        <div className="flex flex-col max-lg:justify-center max-lg:items-center max-sm:justify-center  mt-[60px]">
            <div  className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>
            <div className="w-[1240px] h-[1200px] grid grid-cols-8 grid-rows-4 gap-[40px] mt-[40px]" >
                <div className="col-start-1 col-end-2  rounded-[30px] bg-blue-300">

                </div>
                <div className="col-start-2 col-end-6  rounded-[30px] bg-amber-200"></div>
                <div className="col-start-4  col-end-5  rounded-[30px] bg-blue-300"></div>
                <div className="col-start-5 col-end-9  rounded-[30px] bg-amber-200"></div>
                <div className="col-start-1 col-end-2  rounded-[30px] bg-blue-300"></div>
                <div className="col-start-2 col-end-6  rounded-[30px] bg-amber-200"></div>
                <div className="col-start-4  col-end-5 rounded-[30px]  bg-blue-300"></div>
                <div className="col-start-5 col-end-9  rounded-[30px] bg-amber-200"></div>


            </div>

        </div>
    )
}

export default OurJourney
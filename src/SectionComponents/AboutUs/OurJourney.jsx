import React from "react";



const OurJourney = () => {

    return (
        <div className="flex w-[90vw] max-w-[1240px] mx-auto flex-col max-lg:justify-center max-lg:items-center   max-sm:mt-[20px] mt-[60px] mb-[30px]">
            <div  className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>
            <div className="w-[90vw] max-w-[1240px] mx-auto h-[1200px] grid grid-cols-8 grid-rows-4 gap-[40px] mt-[140px] max-sm:mt-[70px] max-lg:flex max-lg:flex-col max-sm:h-[1550px] max-lg:h-[1600px] max-sm:w-[410px] max-lg:items-start max-lg:w-[540px] max-sm:items-center" >
                <div data-aos="fade-right"  className="text-[50px] font-bold">
                    <h1>2019</h1>
                </div>
                <div data-aos="fade-right" className="col-start-2 col-end-6  rounded-[30px] flex bg-black p-[20px]  max-sm:w-[410px] pb-0">
                    <div className="w-[20%]  flex flex-col gap-[20px] items-center justify-start p-[30px] pb-0">
                        <img src="/Image/greenicon.svg" alt="Green Icon" />
                        <div className="w-[2px] h-[180px] bg-[rgb(207,255,113)]"></div>
                    </div>
                    <div className="w-[70%] flex flex-col  h-full p-[40px] gap-[20px] max-sm:gap-[15px]">
                        <h1 className="text-[30px] max-sm:text-[24px] font-semibold text-white"> The beginning</h1>
                        <p className="text-[18px] max-sm:text-[16px] text-white ">Positivus was founded to help business navigate world the digital and achieve onlinesucces </p>
                    </div>
                </div>
                <div data-aos="fade-left"  className="col-start-4  col-end-5  rounded-[30px] ">
                    <div className=" text-[50px] font-bold"> 2021</div>
                </div>
                <div data-aos="fade-left" className="col-start-5 col-end-9  rounded-[30px]  flex bg-black p-[20px] max-sm:w-[410px] pt-0 pb-0">
                    <div className="w-[20%]  flex flex-col items-center justify-start p-[30px] pt-0 pb-0">
                        <div className="w-[2px] h-[40px] bg-[rgb(207,255,113)]"></div>
                        <img src="/Image/greenicon.svg" alt="Green Icon" />
                        <div className="w-[2px] h-[180px] bg-[rgb(207,255,113)]"></div>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center h-full p-[30px] gap-[20px]">
                        <h1 className="text-[30px] max-sm:text-[24px] font-semibold text-white"> Industry Recognition</h1>
                        <p className="text-[18px] max-sm:text-[16px] text-white ">Positivus was named among the top 50 global digital agencies, affirming our leadership.

                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" className="col-start-1 col-end-2  rounded-[30px] ">
                    <div className="text-[50px] font-bold"> 2023</div>
                </div>
                <div data-aos="fade-right" className="col-start-2 col-end-6  rounded-[30px] flex bg-black p-[20px] max-sm:w-[410px] pt-0 pb-0">
                    <div className="w-[20%]  flex flex-col  items-center justify-start p-[30px] pt-0 pb-0">
                        <div className="w-[2px] h-[40px] bg-[rgb(207,255,113)]"></div>
                        <img src="/Image/greenicon.svg" alt="Green Icon" />
                        <div className="w-[2px] h-[180px] bg-[rgb(207,255,113)]"></div>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center h-full p-[30px] gap-[20px]">
                        <h1 className="text-[30px] max-sm:text-[24px] font-semibold text-white"> Innovation and Growth</h1>
                        <p className="text-[18px] max-sm:text-[16px] text-white ">With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-start-4  col-end-5 rounded-[30px] text-[50px] font-bold ">2024</div>
                <div data-aos="fade-left" className="col-start-5 col-end-9  rounded-[30px] flex bg-black p-[20px] max-sm:w-[410px] pt-0 pb-0 max-lg:h-[260px]">
                    <div className="w-[20%]  flex flex-col  items-center justify-start p-[30px] pt-0 pb-0">
                        <div className="w-[2px] h-[40px] bg-[rgb(207,255,113)]"></div>
                        <img src="/Image/greenicon.svg" alt="Green Icon" />
                        <div className="w-[2px] h-[180px] bg-black"></div>

                    </div>
                    <div className="w-[70%] flex flex-col justify-center h-full p-[30px] gap-[20px]">
                        <h1 className="text-[30px] max-sm:text-[24px] font-semibold text-white"> Leading the Future</h1>
                        <p className="text-[18px] max-sm:text-[16px] text-white ">This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default OurJourney
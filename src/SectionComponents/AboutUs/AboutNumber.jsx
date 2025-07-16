import React from "react";

const Aboutnumber = () => {

    return (
        <div  className="flex flex-col w-[90vw] max-w-[1240px] mx-auto max-lg:justify-center max-lg:items-center max-sm:justify-center  mt-[60px]">
            <div  className="flex max-sm:flex-col max-lg:justify-center ">
                <span className=" text-[30px]   flex justify-center font-[500] mr-5 max-sm:text-[28px]  max-sm:h-[45px] max-sm:items-center">
                    <h1 className={`bg-[rgb(207,255,113)] rounded-[4px] px-[5px] `}>Our Impact In Numbers</h1>
                </span>
                <div className=" h-[46px] w-[500px] max-sm:w-full max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>
            <div className=" w-full  flex mt-[60px] flex-wrap  justify-evenly max-sm:w-[410px] max-lg:w-[650px] max-lg:mt-[100px] mb-[60px]">
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"  className="w-[248px] mb-[20px] max-sm:w-[200px] h-[80px] border-t-[2px] border-black flex flex-col items-center justify-center rounded-[16px]">
                    <div>
                        <h1 className={`text-[25px] font-semibold`}>8+</h1>
                        <h4>Years of Experience</h4>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="w-[248px] mb-[20px] max-sm:w-[200px] h-[80px] border-t-[2px] border-black flex flex-col items-center justify-center rounded-[16px]">
                    <div>
                        <h1 className={`text-[25px] font-semibold`}>50+</h1>
                        <h4>Experts</h4>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" className="w-[248px] mb-[20px] max-sm:w-[200px] h-[80px] border-t-[2px] border-black flex flex-col items-center justify-center rounded-[16px]">
                    <div>
                        <h1 className={`text-[25px] font-semibold`}>100+</h1>
                        <h4>Succesful Campaigns</h4>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="w-[248px] mb-[20px] max-sm:w-[200px] h-[80px] border-t-[2px] border-black flex flex-col items-center justify-center rounded-[16px]">
                    <div>
                        <h1 className={`text-[25px] font-semibold`}>20+</h1>
                        <h4>Industry Awards</h4>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" className="w-[248px] mb-[20px] max-sm:w-[200px] h-[80px] border-t-[2px] border-black flex flex-col items-center justify-center rounded-[16px]">
                    <div>
                        <h1 className={`text-[25px] font-semibold`}>500%</h1>
                        <h4>ROI for our clients</h4>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Aboutnumber
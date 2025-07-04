import React from "react";
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {

    return (
        <div className="mt-[40px] flex flex-col max-lg:items-center">
            <div data-aos="fade-up" className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>

            <div data-aos="fade-up" className="bg-[rgb(25,26,35)] h-[450px] w-[1240px] max-sm:w-[385px] max-lg:w-[700px] max-lg:h-[400px] flex items-center justify-center rounded-[45px] mt-[40px] max-sm:mt-[20px]">
                <TestimonialSlider />
            </div>
        </div>

    )
}

export default Testimonials;
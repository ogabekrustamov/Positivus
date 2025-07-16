import React from "react";
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {

    return (
        <div className=" w-[90vw] max-w-[1240px] mt-[40px] mb-[60px] mx-auto flex flex-col max-lg:items-center">


            <div data-aos="fade-up"  className="flex w-full mx-auto  max-lg:justify-center ">
                <span className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] rounded-[7px]  max-sm:items-center"><h1>Testimonials</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
            </div>

            <div data-aos="fade-up" className=" w-full mx-auto bg-[rgb(25,26,35)] h-[450px]   max-lg:h-[400px] flex items-center justify-center rounded-[45px] mt-[40px] max-sm:mt-[20px]">
                <TestimonialSlider />
            </div>
        </div>

    )
}

export default Testimonials;
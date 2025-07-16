
import CardSlider from "./CardSlider.jsx";
import React from "react";

const Studies = () => {


    return (
        <div className="max-lg:flex  max-lg:flex-col max-lg:items-center mb-[40px]">
            <div  className="flex  max-lg:hidden max-lg:justify-center w-[90vw] max-w-[1240px] mx-auto max-sm:justify-center ">
                <span
                    className=" h-[51px] flex justify-center font-[500] text-[30px] mr-5 "><h1>Case Studies</h1></span>
                <div
                    className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">At
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </div>
            </div>
            <div data-aos="fade-up"
                className="bg-[rgb(31,32,39)] text-white   flex flex-col md:flex-row md:divide-x md:divide-gray-500/50 gap-8 w-[90vw] max-w-[1240px] mx-auto  h-[347px]  p-[70px] rounded-[45px] mt-[60px]  justify-center items-center max-lg:hidden ">

                <div className="md:w-1/3 space-y-6">
                    <p>
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                        in website traffic and a 25% increase in sales.
                    </p>
                    <a href="#" className=" font-semibold text-[rgb(207,255,113)] inline-flex items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45 transition-transform duration-300">&#8594;</span>
                    </a>
                </div>


                <div className="md:w-1/3 space-y-6 md:px-6">
                    <p>
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                        for key keywords and a 200% increase in organic traffic.
                    </p>
                    <a href="#" className="font-semibold inline-flex text-[rgb(207,255,113)] items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45 transition-transform duration-300">&#8594;</span>
                    </a>
                </div>


                <div className="md:w-1/3 space-y-6">
                    <p>
                        For a national retail chain, we created a social media marketing campaign that increased
                        followers by 25% and generated a 20% increase in online sales.
                    </p>
                    <a href="#" className=" font-semibold inline-flex text-[rgb(207,255,113)] items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45  transition-transform duration-300">&#8594;</span>
                    </a>
                </div>
            </div>

        </div>


    )
}
export default Studies
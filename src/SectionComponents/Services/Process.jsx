// import greenicon from "../../../public/Image/greenicon.svg";
// import Icon from "/src/assets/Icon.svg";

import React from "react";

const Process = () => {

    return (
        <div  className="mt-[60px]">
            <div  className="w-[90vw] max-w-[1240px] mx-auto max-h-[650px]  flex bg-[rgb(31,32,39)]  max-lg:gap-[30px] max-lg:flex-col   rounded-[45px] p-[60px]">
                <div className="w-[30%] max-lg:w-full h-full flex flex-col">
                        <div className="flex  gap-[20px]">
                            <img src="/Image/greenicon.svg" alt="Green Icon" />
                            <div className={``}>
                                <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Search engine </span>
                                <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">optimization</span>
                            </div>
                        </div>

                </div>
                <div className="w-[70%] max-lg:w-full flex gap-[30px] flex-col">
                    <p className={`text-white `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum eveniet excepturi ipsam laboriosam officia, porro quasi quidem voluptatem voluptatum! Ad at aut consectetur consequatur consequuntur corporis debitis et excepturi facilis illum, inventore laboriosam minima natus numquam provident qui quibusdam quos reiciendis repellat, sed tenetur, totam ut veniam vero voluptas.</p>
                    <button className={`w-full h-[60px] bg-white hover:bg-[rgb(207,255,113)] hover:scale-105 transition-all duration-400 rounded-[14px] flex justify-center items-center`}>Boost My Rankings</button>
                </div>
            </div>

            <div className={`mt-[60px]`}>
                <div data-aos="fade-up" className="flex max-lg:justify-center max-sm:justify-center  ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Contact Us</h1></span>
                    <div
                        className=" h-[46px]  max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                        Connect with Us: Let's Discuss Your <br/> Digital Marketing Needs
                    </div>

                </div>
                <div className="w-[90vw] max-w-[1240px] mx-auto mt-[60px]">
                    <div className="flex flex-col gap-[30px]">
                        <div  data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">01</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">Website Audit & Analysis <br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                    <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">02</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">Keyword Research & Strategy <br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                    <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">03</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">On-Page Optimization <br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                    <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">04</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">Content Creation & Optimization <br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                    <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">05</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">Link Building<br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w-full flex max-h-[400px] max-lg:max-h-[400px] bg-[rgb(243,243,243)] rounded-[14px] p-[20px]">
                            <div className="w-[130px] h-full flex justify-center items-center">
                                <div className="w-[88px] max-sm:w-[60px] max-sm:h-[60px] flex items-center justify-center bg-cover h-[88px] bg-no-repeat transition-all duration-700 ease-out transform"  style={{ backgroundImage: "url('/Image/Icon.svg')" }}>
                                    <h1 className="text-[48px] max-lg:text-[30px] text-[rgb(207,255,113)]">06</h1></div>
                            </div>
                            <div className="w-[85%] text-black h-full flex justify-center items-center">
                                <div>
                                    <h4 className="text-[25px] font-semibold">Monitoring & Reporting <br/></h4>
                                    <h4 className="text-[16px] max-lg:text-[16px]">

                                        We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}
export default Process;
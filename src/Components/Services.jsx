

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';



const  Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // har bir animatsiya davomiyligi (ms)
            once: true, // faqat bir marta animate qiladi
        });
    }, []);

    return (
        <div data-aos="fade-up"  className=" w-[90vw] max-w-[1240px] mx-auto  h-[1700px] max-lg:h-[2650px] max-sm:h-[2020px]">
            <div  className="flex max-sm:flex-col max-lg:justify-center mb-[60px] max-sm:mb-0 ">
                <span className=" text-[30px]   flex justify-center font-[500] mr-5 max-sm:text-[28px]  max-sm:h-[45px] max-sm:items-center">
                    <h1 className={`bg-[rgb(207,255,113)] rounded-[4px] px-[5px] `}>Services</h1>
                </span>
                <div className=" h-[46px] w-[600px] max-sm:w-full max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </div>
            </div>
            <div  className="   grid grid-rows-3 grid-cols-2 gap-[40px] pt-[40px] max-lg:flex max-lg:flex-col max-lg:items-center ">
                <div  className="  w-full max-h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] justify-between border-b-6 p-[50px]  max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105 ">
                    <div className=" w-[400px]  ">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Searchengine</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">optimization</span>
                        <div className="mt-[90px]  flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]"
                                 alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className="   " >
                        <img src="/Image/serch.svg" className=" w-[350px]  h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div  className="w-full h-[310px] flex gap-[5vw] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px]    max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" w-[400px] ">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Pay-per-click</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">advertising</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className="  " >
                        <img src="/Image/click.svg" className="w-[350px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div className="w-full h-[310px] flex gap-[5vw] bg-[rgb(31,32,39)] rounded-[45px]  border-[1px] border-b-6 p-[50px]  max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" w-[400px]">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Social Media</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arroww.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] text-white max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/media.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div  className="w-full h-[310px] flex gap-[4vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px]  max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-transform duration-400  hover:scale-105">
                    <div className=" w-[400px]">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Email</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className="" >
                        <img src="/Image/message.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div className="w-full flex gap-[5vw] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px]  max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]  hover:scale-105 transform transition-transform ease-in-out duration-300">
                    <div className=" w-[400px]">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Content</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Creation</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/content.svg" className=" h-[200px] inline-block float-right   max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div  className=" w-full h-[310px] flex gap-[5vw] bg-[rgb(31,32,39)] rounded-[45px]  border-[1px] border-b-6 p-[50px]  max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" w-[400px]">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Analytics and</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Tracking</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arroww.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] text-white max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className="   " >
                        <img src="/Image/statistic.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div className=" hidden bg-[rgb(243,243,243)] rounded-[45px] mt-[60px] w-full max-lg:h-[310px] max-lg:block  max-sm:h-[220px] max-sm:p-[20px] max-sm:mt-[20px] max-sm:rounded-[30px]">
                    <div className="w-[500px]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px] max-sm:ml-[35px] max-sm:w-[300px] max-sm:gap-[15px]">
                        <h1 className="text-[25px] max-sm:text-[18px]">Let’s make things happen</h1>
                        <p className="text-[14px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button className="w-[288px] h-[68px] bg-[rgb(31,32,39)] text-white rounded-[14px] max-sm:text-[14px] max-sm:w-[200px] max-sm:h-[48px]">Get your free proposal</button>
                    </div>
                    <div className="h-full float-right inline-flex items-center max-lg:hidden">
                        <img src="/Image/star.svg" className="w-[500px] h-[550px]" alt="salom"/>
                    </div>
                </div>


            </div>
            <div  className=" w-[90vw] max-w-[1240px] mx-auto h-[347px] bg-[rgb(243,243,243)] rounded-[45px] mt-[100px] max-lg:hidden">
                <div className="max-w-[30vw]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px]">
                    <h1 className="text-[25px]">Let’s make things happen</h1>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="w-[288px] h-[68px]  hover:bg-lime-300 transition-all duration-400 hover:text-black hover:scale-105  bg-[rgb(31,32,39)] text-white rounded-[14px]">Get your free proposal</button>
                </div>
                <div className="h-full float-right inline-flex items-center max-lg:hidden">
                    <img src="/Image/star.svg" className="max-w-[40vw] " alt="salom"/>
                </div>
            </div>
        </div>



    )

}
export default Services;

import arroww from '../assets/arroww.svg';
import arrowb from '../assets/arrowb.svg';
import serch from '../assets/serch.svg';
import message from '../assets/message.svg';
import star from '../assets/star.svg';
import statistic from '../assets/statistic.svg';
import content from '../assets/content.svg';
import click from '../assets/click.svg';
import media from '../assets/media.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const  Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // har bir animatsiya davomiyligi (ms)
            once: true, // faqat bir marta animate qiladi
        });
    }, []);

    return (
        <div className="h-[1700px] max-lg:h-[2650px] max-sm:h-[2020px]">
            <div data-aos="fade-up" className="flex max-lg:justify-center max-sm:justify-center ">
                <span className="bg-[rgb(207,255,113)] text-[30px] w-[178px] h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] max-sm:items-center"><h1>Services</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
            </div>
            <div  className="grid grid-rows-3 grid-cols-2 gap-[40px] pt-[40px] max-lg:flex max-lg:flex-col max-lg:items-center ">
                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] ">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Search engine</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">optimization</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} className="max-sm:w-[30px]"
                                 alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={serch} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Pay-per-click</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">advertising</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} className="max-sm:w-[30px]" alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={click} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-black rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Social Media</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arroww} className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] text-white max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={media} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Email</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={message} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Content</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Creation</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={content} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="w-[600px] h-[310px] bg-black rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Analytics and</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Tracking</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arroww} className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] text-white max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={statistic} className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className=" hidden bg-[rgb(243,243,243)] rounded-[45px] mt-[60px] max-lg:w-[600px] max-lg:h-[310px] max-lg:block max-sm:block max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:mt-[20px] max-sm:rounded-[30px]">
                    <div className="w-[500px]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px] max-sm:ml-[35px] max-sm:w-[300px] max-sm:gap-[15px]">
                        <h1 className="text-[25px] max-sm:text-[18px]">Let’s make things happen</h1>
                        <p className="text-[14px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button className="w-[288px] h-[68px] bg-black text-white rounded-[14px] max-sm:text-[14px] max-sm:w-[200px] max-sm:h-[48px]">Get your free proposal</button>
                    </div>
                    <div className="h-full float-right inline-flex items-center max-lg:hidden">
                        <img src={star} className="w-[500px] h-[550px]" alt="salom"/>
                    </div>
                </div>


            </div>
            <div data-aos="fade-up" className="w-[1240px] h-[347px] bg-[rgb(243,243,243)] rounded-[45px] mt-[100px] max-lg:hidden">
                <div className="w-[500px]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px]">
                    <h1 className="text-[25px]">Let’s make things happen</h1>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="w-[288px] h-[68px] bg-black text-white rounded-[14px]">Get your free proposal</button>
                </div>
                <div className="h-full float-right inline-flex items-center max-lg:hidden">
                    <img src={star} className="w-[500px] h-[550px]" alt="salom"/>
                </div>
            </div>
        </div>
    )

}
export default Services;
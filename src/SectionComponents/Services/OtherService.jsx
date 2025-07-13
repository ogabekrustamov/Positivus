
//
//
// import arroww from '../assets/arroww.svg';
// import arrowb from '../assets/arrowb.svg';
// import serch from '../assets/serch.svg';
// import message from '../assets/message.svg';
// import star from '../assets/star.svg';
// import statistic from '../assets/statistic.svg';
// import content from '../assets/content.svg';
// import click from '../assets/click.svg';
// import media from '../assets/media.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const  OtherService = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // har bir animatsiya davomiyligi (ms)
            once: true, // faqat bir marta animate qiladi
        });
    }, []);

    return (
        <div className=" w-[90vw] max-w-[1240px] mx-auto  max-h-[1700px] max-lg:h-[2650px] max-sm:h-[2020px]">
            <div data-aos="fade-up"  className="flex w-[90vw] max-w-[1240px] mx-auto  max-lg:justify-center ">
                <span className="bg-[rgb(207,255,113)] text-[30px] w-[178px] h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] max-sm:items-center"><h1>Services</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
            </div>
            <div  className="   grid grid-rows-3 grid-cols-2 gap-[40px] pt-[40px] max-lg:flex max-lg:flex-col max-lg:items-center ">
                <div data-aos="fade-up" className="  max-w-[600px] max-h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] justify-between border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105 ">
                    <div className=" w-[400px]  ">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Searchengine</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">optimization</span>
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

                <div data-aos="fade-up" className=" max-w-[600px] h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px]   max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block ">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Pay-per-click</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">advertising</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/click.svg" className="w-[200px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-[600px] h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Social Media</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px]  max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/media.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-[600px] h-[310px] flex gap-[4vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Email</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/message.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-[600px] flex gap-[5vw] h-[310px] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Content</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Creation</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src=" /Image/content.svg" className=" h-[200px] inline-block float-right   max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className=" max-w-[600px] h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Analytics and</span><br/>
                        <span className="bg-white  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Tracking</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px]  max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/statistic.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>



            </div>

        </div>



    )

}
export default OtherService;
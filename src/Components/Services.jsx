
// import arroww from '/public/Image/arroww.svg';
// import arrowb from '../../public/Image/arrowb.svg';
// import serch from '../../public/Image/serch.svg';
// import message from '../../public/Image/message.svg';
// import star from '../../public/Image/star.svg';
// import statistic from '../../public/Image/statistic.svg';
// import content from '../../public/Image/content.svg';
// import click from '../../public/Image/click.svg';
// import media from '../../public/Image/media.svg';

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
        <div className=" w-[90vw] max-w-[1240px] mx-auto  h-[1700px] max-lg:h-[2650px] max-sm:h-[2020px]">
            <div data-aos="fade-up"  className="flex w-[90vw] max-w-[1240px] mx-auto  max-lg:justify-center ">
                <span className="bg-[rgb(207,255,113)] text-[30px] w-[178px] h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] max-sm:items-center"><h1>Services</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
            </div>
            <div  className="   grid grid-rows-3 grid-cols-2 gap-[40px] pt-[40px] max-lg:flex max-lg:flex-col max-lg:items-center ">
                <div data-aos="fade-up" className="  max-w-[600px] max-h-[310px] flex gap-[5vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] justify-between border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105 ">
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

                <div data-aos="fade-up" className="max-w-[600px] h-[310px] flex gap-[5vw] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px]   max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block ">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Pay-per-click</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">advertising</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt="arrowb"/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/click.svg" className="w-[200px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-[600px] h-[310px] flex gap-[5vw] bg-black rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
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

                <div data-aos="fade-up" className="max-w-[600px] h-[310px] flex gap-[4vw] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Email</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Marketing</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arrowb.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/message.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-[600px] flex gap-[5vw] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px]  hover:scale-105 transform transition-transform ease-in-out duration-300">
                    <div className=" inline-block">
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

                <div data-aos="fade-up" className=" max-w-[600px] h-[310px] flex gap-[5vw] bg-black rounded-[45px]  border-[1px] border-b-6 p-[50px] max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:rounded-[30px] transition-all ease-in-out duration-300 hover:scale-105">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Analytics and</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[25px] leading-tight max-sm:text-[23px]">Tracking</span>
                        <div className="mt-[90px] w-[170px] flex items-center text-[20px]">
                            <img src="/Image/arroww.svg" className="max-sm:w-[30px]" alt=""/>
                            <a href="" className="ml-[20px] text-white max-sm:text-[17px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src="/Image/statistic.svg" className="w-[230px] h-[200px] inline-block float-right ml-[70px] max-sm:w-[170px] max-sm:h-[140px] max-sm:ml-8 max-sm:mb-4" alt=""/>
                    </div>
                </div>

                <div data-aos="fade-up" className=" hidden bg-[rgb(243,243,243)] rounded-[45px] mt-[60px] max-lg:w-[600px] max-lg:h-[310px] max-lg:block max-sm:block max-sm:w-[410px] max-sm:h-[220px] max-sm:p-[20px] max-sm:mt-[20px] max-sm:rounded-[30px]">
                    <div className="w-[500px]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px] max-sm:ml-[35px] max-sm:w-[300px] max-sm:gap-[15px]">
                        <h1 className="text-[25px] max-sm:text-[18px]">Let’s make things happen</h1>
                        <p className="text-[14px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button className="w-[288px] h-[68px] bg-black text-white rounded-[14px] max-sm:text-[14px] max-sm:w-[200px] max-sm:h-[48px]">Get your free proposal</button>
                    </div>
                    <div className="h-full float-right inline-flex items-center max-lg:hidden">
                        <img src="/Image/star.svg" className="w-[500px] h-[550px]" alt="salom"/>
                    </div>
                </div>


            </div>
            <div data-aos="fade-up" className=" w-[90vw] max-w-[1240px] mx-auto h-[347px] bg-[rgb(243,243,243)] rounded-[45px] mt-[100px] max-lg:hidden">
                <div className="max-w-[30vw]  inline-flex flex-col gap-[30px] justify-center h-full ml-[60px]">
                    <h1 className="text-[25px]">Let’s make things happen</h1>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="w-[288px] h-[68px] bg-black text-white rounded-[14px]">Get your free proposal</button>
                </div>
                <div className="h-full float-right inline-flex items-center max-lg:hidden">
                    <img src="/Image/star.svg" className="max-w-[40vw] " alt="salom"/>
                </div>
            </div>
        </div>



    )

}
export default Services;
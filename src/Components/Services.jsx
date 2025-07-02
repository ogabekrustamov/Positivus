
import arroww from '../assets/arroww.svg';
import arrowb from '../assets/arrowb.svg';
import serch from '../assets/serch.svg';
import message from '../assets/message.svg';
import star from '../assets/star.svg';
import statistic from '../assets/statistic.svg';
import content from '../assets/content.svg';
import click from '../assets/click.svg';
import media from '../assets/media.svg';

const  Services = () => {
    return (
        <div>
            <div className="flex max-lg:justify-center">
                <span className="bg-[rgb(207,255,113)] text-[30px] w-[178px] h-[51px] flex justify-center font-[500] mr-5"><h1>Services</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
            </div>
            <div className="grid grid-rows-3 grid-cols-2 gap-[40px] pt-[40px] max-lg:flex max-lg:flex-col max-lg:items-center">
                <div className="w-[600px] h-[310px] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">Search engine</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">optimization</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb}
                                 alt="arrowb"/>
                            <a href="" className="ml-[20px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={serch} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className="w-[600px] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">Pay-per-click</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">advertising</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} alt="arrowb"/>
                            <a href="" className="ml-[20px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={click} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className="w-[600px] h-[310px] bg-black rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">Social Media</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">Marketing</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arroww} alt=""/>
                            <a href="" className="ml-[20px] text-white">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={media} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className="w-[600px] h-[310px] bg-[rgb(243,243,243)] rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">Email</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">Marketing</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} alt=""/>
                            <a href="" className="ml-[20px]">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={message} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className="w-[600px] h-[310px] bg-[rgb(207,255,113)] rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">Content</span><br/>
                        <span className="bg-[rgb(243,243,243)]  rounded-[5px] text-[28px] leading-tight ">Creation</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arrowb} alt=""/>
                            <a href="" className="ml-[20px] ">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={content} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className="w-[600px] h-[310px] bg-black rounded-[45px]  border-[1px] border-b-8 p-[50px]">
                    <div className=" inline-block">
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">Analytics and</span><br/>
                        <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight ">Tracking</span>
                        <div className="mt-[90px] flex items-center text-[20px]">
                            <img src={arroww} alt=""/>
                            <a href="" className="ml-[20px] text-white">Learn more</a>
                        </div>
                    </div>
                    <div className=" inline-block  " >
                        <img src={statistic} className="w-[230px] h-[200px] inline-block float-right ml-[70px]" alt=""/>
                    </div>
                </div>

                <div className=" bg-[rgb(243,243,243)] rounded-[45px] mt-[60px] max-lg:w-[600px] max-lg:h-[310px]">
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
            <div className="w-[1240px] h-[347px] bg-[rgb(243,243,243)] rounded-[45px] mt-[100px] max-lg:hidden">
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
import React from "react";
// import gh from '../../public/Image/gh.svg';

const ContactUs = () => {

    return (
        <div className="flex w-[90vw] max-w-[1240px] mx-auto flex-col  mt-[40px] ">
            <div data-aos="fade-up" className="flex max-w-[1240px] max-lg:justify-center max-sm:justify-center  ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] rounded-[7px] px-[3px] max-sm:h-[45px] max-sm:items-center"><h1>Contact Us</h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Connect with Us: Let's Discuss Your <br/> Digital Marketing Needs
                </div>
            </div>

            <div data-aos="fade-up" className="  w-full h-[773px] bg-[rgb(243,243,243)] rounded-[45px] pl-[100px] pt-[60px] p-[40px] mt-[40px] flex items-center justify-center max-sm:h-[670px]  max-lg:p-[70px]  max-sm:p-[40px]">
                <div className="">
                    <form action="" method="GET">

                        <div className="mb-[40px] ">

                            <label className="inline-flex items-center space-x-2 cursor-pointer mr-[30px]">
                                <input type="radio" name="option" value="sayHi" className="peer hidden"/>
                                <div
                                    className="w-6 h-6 rounded-full border-1 border-gray-400 peer-checked:border-[rgb(207,255,113)] peer-checked:bg-[rgb(207,255,113)] relative">
                                    <div
                                        className="absolute inset-1 rounded-full bg-white peer-checked:bg-[rgb(207,255,113)] scale-50"></div>
                                </div>
                                <span>Say Hi</span>
                            </label>

                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="option" value="getQ" className="peer hidden"/>
                                <div
                                    className="w-6 h-6 rounded-full border-1 border-gray-400 peer-checked:border-[rgb(207,255,113)] peer-checked:bg-[rgb(207,255,113)] relative">
                                    <div
                                        className="absolute inset-1 rounded-full bg-white peer-checked:bg-[rgb(207,255,113)] scale-50"></div>
                                </div>
                                <span>Get a Quote</span>
                            </label>
                        </div>

                        <label htmlFor="name" className="block mb-[10px] ">Name</label>
                        <input type="text" placeholder="Name" id="name"
                               className="w-[44vw] max-w-[556px] h-[59px] rounded-[14px] max-sm:w-[320px] bg-[white] max-sm:h-[50px] border-black border-[1px] p-[20px] mb-[25px]"/>

                        <label htmlFor="email" className="block mb-[10px]">Email*</label>
                        <input type="text" placeholder="Email" id="email"
                               className="w-[44vw] max-w-[556px] h-[59px] rounded-[14px] border-black bg-[white] border-[1px] p-[20px] mb-[25px] max-sm:w-[320px]  max-sm:h-[50px]"/>

                        <label htmlFor="message" className="block mb-[10px]">Message*</label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            className="w-[44vw] max-w-[556px] h-[190px] rounded-[14px] text-left max-sm:w-[320px] bg-[white]  border-black border-[1px] p-[20px] mb-[25px] resize-none"
                        ></textarea>

                        <button
                                className="w-[44vw] max-w-[556px] h-[68px] hover:bg-lime-300 transition-all duration-400  hover:scale-105 hover:text-black bg-black rounded-[14px] text-white block max-sm:w-[320px]  max-sm:h-[50px]">Send Message
                        </button>
                    </form>
                </div>
                <div className="inline-block float-right w-[500px] max-lg:hidden">
                {/*<img  src="/Image/form.svg" alt=""/>*/}
                </div>
            </div>
        </div>
    )
}
export default ContactUs;
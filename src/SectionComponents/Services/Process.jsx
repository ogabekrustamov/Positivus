import greenicon from "../../assets/greenicon.svg";
import Icon from "../../assets/Icon.svg";

import React from "react";

const Process = () => {

    return (
        <div className="mt-[60px]">
            <div className="w-[90vw] max-w-[1240px] mx-auto max-h-[550px]  flex bg-[rgb(31,32,39)]  max-lg:gap-[30px] max-lg:flex-col   rounded-[45px] p-[60px]">
                <div className="w-[30%] max-lg:w-full h-full flex flex-col">
                        <div className="flex  gap-[20px]">
                            <img src={greenicon} alt="" className="w-[35px] "/>
                            <div className={``}>
                                <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">Search engine </span>
                                <span className="bg-[rgb(207,255,113)]  rounded-[5px] text-[28px] leading-tight max-sm:text-[23px]">optimization</span>
                            </div>
                        </div>

                </div>
                <div className="w-[70%] max-lg:w-full flex gap-[30px] flex-col">
                    <p className={`text-white`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum eveniet excepturi ipsam laboriosam officia, porro quasi quidem voluptatem voluptatum! Ad at aut consectetur consequatur consequuntur corporis debitis et excepturi facilis illum, inventore laboriosam minima natus numquam provident qui quibusdam quos reiciendis repellat, sed tenetur, totam ut veniam vero voluptas.</p>
                    <button className={`w-full h-[60px] bg-white rounded-[14px] flex justify-center items-center`}>Boost My Rankings</button>
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
                {/*<div className={`w-[1240px] h-[900px] flex-col gap-[30px]  bg-blue-300 mt-[60px] flex`}>*/}
                {/*    <div className={`w-[80vw] h-[120px] bg-green-100 p-[20px]`}>*/}
                {/*        <div className={`w-[20%] bg-[url('../../assets/Icon.svg')]`}>*/}
                {/*            <img src={Icon} alt="" className={`h-full z-[-1]`}/>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={`w-full h-[120px] bg-green-100`}></div>*/}
                {/*    <div className={`w-full h-[120px] bg-green-100`}></div>*/}
                {/*    <div className={`w-full h-[120px] bg-green-100`}></div>*/}
                {/*    <div className={`w-full h-[120px] bg-green-100`}></div>*/}
                {/*    <div className={`w-full h-[120px] bg-green-100`}></div>*/}
                {/*</div>*/}


                <div className="w-[90vw] max-w-[1240px] mx-auto">
                    <div className="flex flex-col gap-[2vw]">
                        <div className="w-full h-[10vw] bg-blue-200 rounded-[1vw]">Child 1</div>
                        <div className="w-full h-[10vw] bg-blue-300 rounded-[1vw]">Child 2</div>
                        <div className="w-full h-[10vw] bg-blue-400 rounded-[1vw]">Child 3</div>
                        <div className="w-full h-[10vw] bg-blue-500 rounded-[1vw]">Child 4</div>
                        <div className="w-full h-[10vw] bg-blue-600 rounded-[1vw]">Child 5</div>
                        <div className="w-full h-[10vw] bg-blue-700 rounded-[1vw]">Child 6</div>
                    </div>
                </div>


            </div>


        </div>
    )
}
export default Process;
import React from "react";
// import innovation from '../../../public/Image/innovation.svg';
// import calloboration from '../../../public/Image/calloboration.svg';


const Values = () => {

    return (
        <div className="flex w-[90vw] max-w-[1240px]   flex-col max-lg:justify-center max-lg:items-center  max-sm:mt-[20px] mt-[60px] mb-[30px] ">

            <div  className="flex max-lg:justify-center max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>
            <div className="  w-[90vw] max-w-full mx-auto grid grid-cols-2 grid-rows-2  max-lg:items-center gap-[40px] mt-[60px] max-lg:flex max-lg:flex-col  ">
                <div className="max-w-full max-lg:w-[600px] max-h-[510px] flex flex-col gap-[20px] border-[1px] rounded-[45px] max-sm:p-[30px] p-[45px] max-lg:order-1 ">
                    <div className="text-[28px] max-sm:text-[24px]">Client Succes first</div>
                    <div className="w-[250px] h-[1px]  max-sm:w-[350px]  bg-black"></div>
                    <div className="text-[18px] max-sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse facere minima molestiae optio quod reprehenderit ullam unde. Ad consequatur cum dicta et modi, nemo provident quos repellendus vero voluptates.</div>
                </div>

                <div className="max-w-full max-sm:gap-[30px]   max-lg:w-[600px] max-h-[510px] flex  border-[1px] max-sm:flex-col max-sm:h-[450px] items-center rounded-[45px] max-sm:p-[30px] p-[45px] max-lg:order-2 ">
                    <div className="w-[50%] max-xl:w-full max-sm:w-full ">
                        <div className="text-[25px] max-sm:text-[24px] mb-[20px]">Client Succes first</div>
                        <div className="w-[250px] h-[1px] mb-[20px] max-sm:w-[350px] bg-black"></div>
                        <div className="text-[18px] max -sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse facere minima molestiae  quos repellendus vero voluptates.</div>
                    </div>
                    <div className="w-[50%] max-sm:w-[210px]    pl-[30px] max-sm:pl-0 ">
                        <img src="/Image/innovation.svg" className=" " alt=""/>
                    </div>
                </div>

                <div className="max-w-full  max-lg:w-[600px] max-h-[510px] flex  border-[1px] max-sm:flex-col max-sm:h-[410px] items-center rounded-[45px] max-sm:p-[30px] p-[45px] max-lg:order-4 ">
                    <div className="w-[50%] max-sm:w-full ">
                        <div className="text-[25px] max-sm:text-[24px] mb-[20px]">Client Succes first</div>
                        <div className="w-[250px] h-[1px] mb-[20px] max-sm:w-[350px] bg-black"></div>
                        <div className="text-[18px] max-sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse facere minima molestiae  quos repellendus vero voluptates.</div>
                    </div>
                    <div className="w-[50%] max-sm:w-full pl-[20px] ">
                        <img src="/Image/calloboration.svg" className="w-[210px]" alt=""/>
                    </div>
                </div>

                <div className="max-w-full  max-lg:w-[600px] max-h-[510px] flex flex-col gap-[20px] border-[1px] rounded-[45px] max-sm:p-[30px] p-[45px] max-lg:order-3 ">
                    <div className="text-[28px] max-sm:text-[24px]">Client Succes first</div>
                    <div className="w-[250px] h-[1px]  max-sm:w-[350px]  bg-black"></div>
                    <div className="text-[18px] max-sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse facere minima molestiae optio quod reprehenderit ullam unde. Ad consequatur cum dicta et modi, nemo provident quos repellendus vero voluptates.</div>
                </div>

            </div>


        </div>
    )
};

export default Values
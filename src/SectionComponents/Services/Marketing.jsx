
// import servicep from "../../../public/Image/servicep.svg";



const Marketing = () => {

    return (




        <div className="w-full flex justify-center px-4">
            <div
                data-aos="fade-up"
                className="w-full max-w-[1240px]  max-lg:bg-white bg-[rgb(243,243,243)] flex flex-row items-center justify-center rounded-[45px] max-sm:py-[40px] p-[5vw] gap-[4vw]
              max-lg:flex-col-reverse max-lg:gap-[5vw]"
            >
                <div className="w-[40vw] max-w-[600px] flex justify-center h-auto max-sm:w-[80vw] max-lg:w-[60vw] mt-[5vh]">
                    <img src="/Image/join.svg" alt="Service" className="w-[400px]  " />
                </div>

                <div className="flex flex-col justify-center items-start w-[28vw] max-w-[650px] max-lg:w-full gap-[2.5vw] max-sm:w-[80vw] h-full">
                    <h2 className=" max-sm:text-[40px] text-[3rem]   font-semibold leading-snug transition-all duration-700 ease-out">
                        Expert Digital <br/> Marketing  Services
                    </h2>
                    <p className="text-[16px]  transition-all duration-700 ease-out">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Marketing;
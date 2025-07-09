
// import servicep from "../../../public/Image/servicep.svg";



const Marketing = () => {

    return (



        <div className="w-full flex justify-center px-4">
            <div
                data-aos="fade-up"
                className="w-full max-w-[1240px] bg-[rgb(243,243,243)] flex flex-row items-center justify-center rounded-[45px] max-sm:py-[40px] p-[5vw] gap-[4vw]
              max-lg:flex-col-reverse max-lg:gap-[5vw]"
            >
                <div className="w-[40vw] max-w-[600px] flex justify-center h-auto max-sm:w-[80vw] max-lg:w-[60vw] mt-[5vh]">
                    <img src="/Image/servicep.svg" alt="Service" className="w-[70vw] h-auto " />
                </div>

                <div className="flex flex-col justify-center items-start w-[35vw] max-w-[500px] gap-[2.5vw] max-sm:w-[80vw] h-full">
                    <h2 className="text-[2.6vw] max-sm:text-[6vw] max-lg:text-[5vw] font-semibold leading-snug transition-all duration-700 ease-out">
                        Expert Digital <br /> Marketing <br /> Services
                    </h2>
                    <p className="text-[1.1vw] max-sm:text-[3.5vw] max-lg:text-[2vw] transition-all duration-700 ease-out">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Marketing;
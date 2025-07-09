// import servicep from "../../../public/Image/servicep.svg";


const BlogDiv = () => {

    return (
        // <div>
        //     <div data-aos="fade-up" className="w-[1240px] h-[606px] bg-[rgb(243,243,243)] flex flex-row items-center p-[70px] justify-center max-sm:h-[620px] max-sm:w-[410px]   max-lg:h-[850px]  max-lg:flex-col-reverse max-lg:w-[650px] max-sm:gap-0 rounded-[45px] gap-[60px]">
        //         <div className="w-[600px] h-[450px] max-sm:w-[310px] max-lg:w-[450px] max-lg:mt-[40px] mt-[80px]">
        //             <img src={servicep} alt=""/>
        //         </div>
        //
        //         <div className="flex flex-col justify-center items-start gap-[40px] w-[500px] h-full max-sm:w-[350px]" >
        //             <div className={`text-[50px] font-semibold transition-all duration-700 ease-out transform max-sm:text-[40px]`}>
        //                 Expert Digital <br/> Marketing <br/> Services
        //             </div>
        //
        //             <div className={`text-[20px] transition-all duration-700 ease-out transform max-sm:text-[15px]`}>
        //                 Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="w-full flex justify-center px-4">
            <div
                data-aos="fade-up"
                className="w-full max-w-[1240px] bg-[rgb(243,243,243)] flex flex-row items-center justify-center rounded-[45px] p-[5vw] gap-[4vw]
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

    )
}
export default BlogDiv;
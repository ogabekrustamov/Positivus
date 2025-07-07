
import servicep from "../../assets/servicep.svg";



const Marketing = () => {

    return (

            <div data-aos="fade-up" className="w-[1240px] h-[606px] bg-[rgb(243,243,243)] flex flex-row items-center p-[70px] justify-center max-sm:h-[620px] max-sm:w-[410px]   max-lg:h-[850px]  max-lg:flex-col-reverse max-lg:w-[650px] max-sm:gap-0 rounded-[45px] gap-[60px]">
                <div className="w-[600px] h-[450px] max-sm:w-[310px] max-lg:w-[450px] max-lg:mt-[40px] mt-[80px]">
                    <img src={servicep} alt=""/>
                </div>

                <div className="flex flex-col justify-center items-start gap-[40px] w-[500px] h-full max-sm:w-[350px]" >
                    <div className={`text-[50px] font-semibold transition-all duration-700 ease-out transform max-sm:text-[40px]`}>
                        Expert Digital <br/> Marketing <br/> Services
                    </div>

                    <div className={`text-[20px] transition-all duration-700 ease-out transform max-sm:text-[15px]`}>
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </div>
                </div>
            </div>

    );
};

export default Marketing;
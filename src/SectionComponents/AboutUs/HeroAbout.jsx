import aboutill from '../../assets/aboutill.svg';


const HeroAbout = () => {
    return (
        <div className="w-[1240px] h-[606px] bg-[rgb(243,243,243)] flex flex-row items-center p-[70px] rounded-[45px] gap-[60px]">
            <div className="w-[600px] h-[450px]">
                <img src={aboutill} alt=""/>
            </div>

            <div className="flex flex-col justify-center items-start w-[500px] h-full" >
                <div className={`text-[50px] font-semibold transition-all duration-700 ease-out transform max-sm:text-[40px]`}>
                    Together for <br/> Succes
                </div>

                <div
                    className={`text-[20px] transition-all duration-700 ease-out transform max-sm:text-[15px]`}
                >
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </div>
            </div>





        </div>
    )
}
export default HeroAbout;
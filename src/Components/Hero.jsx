

// import Illustration from '../../public/Image/Illustration.svg';
// import amazon from '../assets/amazon.svg';
// import dribble from '../../public/Image/dribble.svg';
// import hubspot from '../../public/Image/hubspot.svg';
// import notion from '../../public/Image/notion.svg';
// import netflix from '../../public/Image/netflix.svg';
// import zoom from '../../public/Image/zoom.svg';


import { useEffect, useState,} from "react";






const Hero = () => {
    const [showItems, setShowItems] = useState([]);

    useEffect(() => {
        // 0 - Title
        setTimeout(() => {
            setShowItems((prev) => [...prev, "title"]);
        }, 200);

        // 1 - Description
        setTimeout(() => {
            setShowItems((prev) => [...prev, "desc"]);
        }, 400);

        // 2 - Button
        setTimeout(() => {
            setShowItems((prev) => [...prev, "button"]);
        }, 600);

        // 3 - Image
        setTimeout(() => {
            setShowItems((prev) => [...prev, "image"]);
        }, 800);

        setTimeout(() => {
            setShowItems((prev) => [...prev, "container-"]);
        }, 1000);
    }, []);

    return (
        <div className="w-full h-[800px]  mt-[150px]  max-lg:h-[1180px] max-sm:h-[1150px]">
            {/* Text Side */}

            <div className="w-[90vw] max-w-[1240px] mx-auto max-h-[950px] bg-white flex flex-row  mt-17 px-10 gap-15 max-lg:flex-col max-lg:items-center max-lg:gap-[50px;]  max-sm:h-[800px] ">
                <div className="w-[535px] h-[515px] max-lg:w-full max-lg:max-h-[380px] bg-white flex flex-col  gap-[35px] max-sm:w-[360px]   ">
                    <div
                        className={`text-[50px] font-semibold transition-all duration-700 ease-out transform
                        ${showItems.includes("title") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} max-sm:text-[40px]`}
                    >
                        Navigating the digital landscape for success
                    </div>

                    <div
                        className={`text-[20px] transition-all duration-700 ease-out transform
                        ${showItems.includes("desc") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} max-sm:text-[15px]`}
                    >
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </div>

                    <button
                        className={`w-[264px] h-[68px] text-white bg-[rgb(31,32,39)] text-[20px] rounded-[14px] 
                        ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} max-sm:text-[18px] max-sm:w-[250px] hover:bg-lime-300 transition-all duration-400 hover:text-black hover:scale-105 max-sm:h-[48px]`}
                    >
                        Book a consultation
                    </button>
                </div>

                {/* Image Side */}
                <div
                    className={`transition-all duration-700 ease-out transform
                    ${showItems.includes("image") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}  max-sm:w-[360px] max-sm:h-[300px] max-sm:lg-[60px] max-lg:w-[500px] max-lg:h-[400px] `}
                >
                    <img
                        src="/Image/Illustration.svg"
                        className="w-[550px] h-[515px] max-sm:w-[360px] max-sm:h-[300px]"
                        alt="Illustration"
                    />
                </div>
            </div>


                <div data-aos="fade-up" className={`
               mt-[100px]
              filter grayscale
              flex flex-row justify-around
              max-lg:grid max-lg:grid-cols-3 max-lg:grid-rows-2
              max-lg:gap-[40px] 
              max-sm:grid-cols-2 max-sm:grid-rows-3
               w-[90vw] max-w-[1240px] mx-auto max-h-[150px]
              `}>
                    <div className="w-full h-[50px] flex justify-center items-center">
                        <img src="/Image/amazon.svg" alt="logo1"/>
                    </div>
                    <div className="w-full h-[50px] flex  justify-center items-center">
                        <img src="/Image/dribble.svg" alt="logo2"/>
                    </div>
                    <div className="w-full h-[50px] flex  justify-center items-center">
                        <img src="/Image/hubspot.svg" alt="logo3"/>
                    </div>
                    <div className="w-full h-[50px] flex  justify-center items-center">
                        <img src="/Image/netflix.svg" alt="logo4"/>
                    </div>
                    <div className="w-full h-[50px] flex  justify-center items-center">
                        <img src="/Image/notion.svg" alt="logo5"/>
                    </div>
                    <div className="w-full h-[50px] flex justify-center items-center">
                        <img src="/Image/zoom.svg" alt="logo6"/>
                    </div>
                </div>



        </div>



    );
};

export default Hero;

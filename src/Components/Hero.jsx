
//
// const Hero = () =>{
//     return (
//         <div className="w-full h-[515px] bg-white flex flex-row gap-[180px] mt-17">
//             <div className="w-[535px] h-[515px] bg-white flex flex-col gap-[35px] ">
//                 <div className="text-[50px] ">Navigating the digital landscape for success</div>
//                 <div className="text-[20px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
//                 <button className="w-[264px] h-[68px] text-white bg-black text-[20px] rounded-[14px]">Book a consultation</button>
//             </div>
//             <div className="w-550px h-515px inline-flex">
//                 <img src="/src/assets/Illustration.svg" className="w-[600px] h-[515px]" alt=""/>
//             </div>
//
//         </div>
//     )
// }
// export default Hero

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
    }, []);

    return (
        <div className="w-[1300px] h-[800px]  mt-[150px]   ">
            {/* Text Side */}

            <div className="w-[1300px] h-[500px] bg-white flex flex-row  mt-17 px-10 justify-between max-lg:flex-col max-lg:items-center max-lg:gap-[50px;] max-lg:h-[950px] max-sm:h-[800px] ">
                <div className="w-[535px] h-[515px] bg-white flex flex-col  gap-[35px] max-sm:w-[360px]  ">
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
                        className={`w-[264px] h-[68px] text-white bg-black text-[20px] rounded-[14px] transition-all duration-700 ease-out transform
                        ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} max-sm:w-[280px] max-sm:h-[48px]`}
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
                        src="/src/assets/Illustration.svg"
                        className="w-[550px] h-[515px] max-sm:w-[360px] max-sm:h-[300px]"
                        alt="Illustration"
                    />
                </div>
            </div>


                        <div className="
              w-full mt-[100px]
              filter grayscale
              flex flex-row justify-around
              max-lg:grid max-lg:grid-cols-3 max-lg:grid-rows-2
              max-lg:gap-[40px] max-lg:w-[600px] max-lg:h-[150px]
              max-sm:w-[360px] max-sm:grid-cols-2 max-sm:grid-rows-3
              mx-auto
            ">
                <div className="w-[173px] h-[50px] flex justify-center items-center">
                    <img src="/src/assets/Company_logo.svg" alt="logo 1"/>
                </div>
                <div className="w-[173px] h-[50px] flex  justify-center items-center">
                    <img src="/src/assets/Company_logo_(7).svg" alt="logo 2"/>
                </div>
                <div className="w-[173px] h-[50px] flex  justify-center items-center">
                    <img src="/src/assets/Company_logo_(8).svg" alt="logo 3"/>
                </div>
                <div className="w-[173px] h-[50px] flex  justify-center items-center">
                    <img src="/src/assets/Company_logo_(9).svg" alt="logo 4"/>
                </div>
                <div className="w-[173px] h-[50px] flex  justify-center items-center">
                    <img src="/src/assets/Company_logo_(10).svg" alt="logo 5"/>
                </div>
                <div className="w-[173px] h-[50px] flex justify-center items-center">
                    <img src="/src/assets/Company_logo_(11).svg" alt="logo 6"/>
                </div>
            </div>






        </div>
    );
};

export default Hero;

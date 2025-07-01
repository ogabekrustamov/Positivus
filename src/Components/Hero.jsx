
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

import { useEffect, useState } from "react";

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
        <div className="w-full h-[800px]  ">
            {/* Text Side */}

            <div className="w-full h-[515px] bg-white flex flex-row gap-[180px] mt-17 px-10">
                <div className="w-[535px] h-[515px] bg-white flex flex-col gap-[35px] justify-center">
                    <div
                        className={`text-[50px] font-semibold transition-all duration-700 ease-out transform
                        ${showItems.includes("title") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                    >
                        Navigating the digital landscape for success
                    </div>

                    <div
                        className={`text-[20px] transition-all duration-700 ease-out transform
                        ${showItems.includes("desc") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                    >
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </div>

                    <button
                        className={`w-[264px] h-[68px] text-white bg-black text-[20px] rounded-[14px] transition-all duration-700 ease-out transform
                        ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                    >
                        Book a consultation
                    </button>
                </div>

                {/* Image Side */}
                <div
                    className={`w-[600px] h-[515px] transition-all duration-700 ease-out transform
                    ${showItems.includes("image") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    <img
                        src="/src/assets/Illustration.svg"
                        className="w-[600px] h-[515px]"
                        alt="Illustration"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-around w-full mt-[150px]">
                <img src="/src/assets/Company%20logo.svg" alt=""/>
                <img src="/src/assets/Company%20logo%20(7).svg" alt=""/>
                <img src="/src/assets/Company%20logo%20(8).svg" alt=""/>
                <img src="/src/assets/Company%20logo%20(9).svg" alt=""/>
                <img src="/src/assets/Company%20logo%20(10).svg" alt=""/>
                <img src="/src/assets/Company%20logo%20(11).svg" alt=""/>
            </div>
        </div>
    );
};

export default Hero;

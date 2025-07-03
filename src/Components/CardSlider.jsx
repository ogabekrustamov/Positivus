// CardSlider.jsx
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
//
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
//
// const CardSlider = () => {
//     const cards = [
//         { id: 1, title: "Card 1", description: "Description 1" },
//         { id: 2, title: "Card 2", description: "Description 2" },
//         { id: 3, title: "Card 3", description: "Description 3" },
//     ];
//
//     return (
//         <div className="w-[1800px] h-[310px]   gap-[30px] lg:hidden ">
//             <Swiper
//                 modules={[Navigation, Pagination]}
//                 spaceBetween={30}
//                 navigation
//                 pagination={{ clickable: true }}
//                 breakpoints={{
//                     500: {
//                         slidesPerView: 1,
//                     },
//                     640: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//
//                 }}
//             >
//                 {cards.map((card) => (
//                     <SwiperSlide key={card.id}   >
//                         <div className="bg-black w-[600px] h-[310px] rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center max-lg:block lg:hidden">
//                             <h3 className="text-xl font-semibold">{card.title}</h3>
//                             <p className="text-gray-600 mt-2">{card.description}</p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };
//
// export default CardSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {
    const cards = [
        { id: 1, title: "Card 1", description: "Description 1" },
        { id: 2, title: "Card 2", description: "Description 2" },
        { id: 3, title: "Card 3", description: "Description 3" },
    ];

    return (
        <div className="w-full  lg:hidden">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    450: { slidesPerView: 1 },
                    768: { slidesPerView: 1 }, // planshet ham 1 ta
                    // optional
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="bg-black text-white w-full h-[310px] rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-semibold">{card.title}</h3>
                            <p className="text-gray-300 mt-2">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;


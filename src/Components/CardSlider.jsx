
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {
    const cards = [
        { id: 1, title: "Card 1", description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales. 1" },
        { id: 2, title: "Card 2", description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." },
        { id: 3, title: "Card 3", description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." },
    ];

    return (
        <div className="w-full  lg:hidden ">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation

                pagination={{ clickable: true }}
                className="custom-swiper"
                breakpoints={{
                    450: { slidesPerView: 1 },
                    768: { slidesPerView: 1 }, // planshet ham 1 ta
                    // optional
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="bg-[rgb(31,32,39)] text-white w-full h-[310px] max-sm:h-[220px] max-sm:rounded-[30px] rounded-[45px] shadow-lg p-6 flex flex-col justify-center max-sm: items-center text-start text-green ">
                            <h3 className="text-xl font-semibold hidden">{card.title}</h3>
                            <p className="text-gray-300 text-[16px] max-sm:text-[14px] max-sm:w-[300px] mt-2 w-[450px] leading-[28px]">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;


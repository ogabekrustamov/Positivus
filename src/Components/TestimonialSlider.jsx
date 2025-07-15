

// TestimonialSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const testimonials = [
    {
        name: "John Smith",
        title: "Marketing Director at XYZ Corp",
        text: `We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive,recommend Positivus to any company looking to grow their online presence.`,
    },
    {
        name: "Jane Doe",
        title: "CEO at Example Inc.",
        text: `Positivus helped us revamp our marketing strategy. We've seen outstanding results in just a few months. Highly recommend their services!`,
    },
    {
        name: "Michael Green",
        title: "CTO at StartupHub",
        text: `Their technical expertise and business understanding were crucial in growing our traffic. The results speak for themselves.`,
    },
    {
        name: "Michael Green",
        title: "CTO at StartupHub",
        text: `Their technical expertise and business understanding were crucial in growing our traffic. The results speak for themselves.`,
    },
    {
        name: "Michael Green",
        title: "CTO at StartupHub",
        text: `Their technical expertise and business understanding were crucial in growing our traffic. The results speak for themselves.`,
    },
];

export default function TestimonialSlider() {
    return (

        <div className="max-w-6xl mx-auto py-18 px-4 bg-[rgb(25,26,35)] rounded-[2rem] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1.5}
                loop={true}
                autoplay={{ delay: 2000 }}
                centeredSlides={true}
                pagination={{ clickable: true, el: '.custom-pagination' }} // custom joy
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2.2 },
                }}
                className="relative"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="border border-[rgb(207,255,113)] text-white max-sm:rounded-[30px] rounded-[45px] p-8 relative bg-[rgb(25,26,35)] w-full max-w-[606px] h-[250px] max-lg:h-[200px] max-sm:h-[250px] max-sm:max-w-[500px] max-lg:max-w-[450px] mx-auto">
                            <p className="text-[16px] mb-4">“{item.text}”</p>
                            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[rgb(31,32,39)] border-[rgb(207,255,113)] border-b border-l rotate-45 z-10" />
                            <div className="mt-6">
                                <p className="text-[rgb(207,255,113)] font-semibold">{item.name}</p>
                                <p className="text-sm ">{item.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="flex justify-between items-center mt-6 px-6">
                <div className="custom-prev text-[rgb(207,255,113)] text-2xl cursor-pointer">←</div>
                {/* Pagination dots */}
                {/*<div className="custom-pagination text-[rgb(207,255,113)]  space-x-5 "></div>*/}
                <div className="custom-next text-[rgb(207,255,113)] text-2xl cursor-pointer">→</div>
            </div>
        </div>

    );
}


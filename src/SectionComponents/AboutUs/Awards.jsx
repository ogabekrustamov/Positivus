import React from "react";
import AwardCard from "./AwardCard.jsx";
import award1 from '../../../public/Image/award1.png';
import award2 from '../../../public/Image/award2.png';


const Awards = () => {

    const awards = [
        {
            title: 'Tezkor xizmat',
            description: 'Bizning jamoa sizga qisqa muddatda eng yaxshi yechimlarni taqdim etadi.',
            icon: award1,
        },
        {
            title: 'Xavfsizlik',
            description: 'Biz sizning ma’lumotlaringizni himoya qilishga katta e’tibor beramiz.',
            icon: award2,
        },
        {
            title: 'Mijozlarga g‘amxo‘rlik',
            description: 'Mijozlar biz uchun doim birinchi o‘rinda turadi.',
            icon: award1,
        },
        {
            title: 'Mijozlarga g‘amxo‘rlik',
            description: 'Mijozlar biz uchun doim birinchi o‘rinda turadi.',
            icon: award2,
        },
    ];

    return (
        <div className="w-[90vw] max-w-[1240px]">
            <div  className="flex max-lg:justify-center max-sm:justify-center mb-[60px]">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px]  h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px]  max-sm:h-[45px] max-sm:items-center"><h1>Team </h1></span>
                <div
                    className=" h-[46px] w-[500px] max-sm:w-[250px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>

            {/*<div className="flex w-[1240px] justify-between max-lg:w-[610px]">*/}
            {/*    <div className="w-[250px]  h-[350px] bg-green-100"></div>*/}
            {/*    <div className="w-[250px] h-[350px] bg-green-100"></div>*/}
            {/*    <div className="w-[250px] h-[350px] bg-green-100"></div>*/}
            {/*    <div className="w-[250px] h-[350px] bg-green-100"></div>*/}

            {/*</div>*/}

            <div className="flex w-full justify-between max-lg:w-[610px] max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-[40px] max-sm:w-[410px]">
                {awards.map((award, index) => (
                    <AwardCard

                        key={index}
                        title={award.title}
                        description={award.description}
                        icon={award.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Awards
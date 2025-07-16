import React from "react";
import AwardCard from "./AwardCard.jsx";
import award1 from '/Image/award1.png';
import award2 from '/Image/award2.png';


const Awards = () => {

    const awards = [
        {
            title: 'Best Small Business Digital Marketing Agency of the Year',
            description: 'Celebrating our success in delivering innovative strategies and measurable results for small business clients.',
            icon: award1,
        },
        {
            title: 'Innovative Website Design',
            description: 'Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand’s essence and boost conversions.',
            icon: award2,
        },
        {
            title: 'Top Performing PPC Campaign of the Year',
            description: 'Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results.',
            icon: award1,
        },
        {
            title: 'Expertise in Social Media Marketing',
            description: 'Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engaging content.',
            icon: award2,
        },
    ];

    return (
        <div className="w-[90vw] max-w-[1240px]">
            <div   className="flex max-sm:flex-col max-lg:justify-center mb-[60px] mt-[60px]">
                <span className=" text-[30px]   flex justify-center font-[500] mr-5 max-sm:text-[28px]  max-sm:h-[45px] max-sm:items-center">
                    <h1 className={`bg-[rgb(207,255,113)] rounded-[4px] px-[5px] `}>Awards & Recognition</h1>
                </span>
                <div className=" h-[46px] w-[500px] max-sm:w-full max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </div>
            </div>




            <div className="flex w-full gap-[20px] justify-around max-lg:grid max-lg:grid-cols-2  ">
                {awards.map((award, index) => (
                    <AwardCard className={`w-full`}

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
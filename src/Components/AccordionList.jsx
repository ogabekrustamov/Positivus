//
// // AccordionList.jsx
// import React, { useState } from "react";
// import AccordionItem from "./AccordionItem";
//
// const AccordionList = () => {
//     const [openIndex, setOpenIndex] = useState(null);
//
//     const toggleAccordion = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };
//
//     const items = [
//         {
//             number: "01",
//             title: "Consultation",
//             content:
//                 "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. our services to best fit your requirements.",
//         },
//         {
//             number: "02",
//             title: "Research and Strategy Development",
//             content:
//                 "Our team will conduct market research, analyze competition, and formulate a detailed marketing strategy tailored to your business goals.",
//         },
//         {
//             number: "03",
//             title: "Implementation & Optimization",
//             content:
//                 "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
//         },
//         {
//             number: "04",
//             title: "Monitoring and Optimization",
//             content:
//                 "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
//         },
//         {
//             number: "05",
//             title: "Reporting and Communication",
//             content:
//                 "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
//         },
//         {
//             number: "06",
//             title: "Continual Improvement",
//             content:
//                 "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
//         },
//     ];
//
//     return (
//         <div data-aos="fade-up" className=" w-full ">
//             {items.map((item, index) => (
//                 <AccordionItem
//                     key={index}
//                     number={item.number}
//                     title={item.title}
//                     content={item.content}
//                     isOpen={openIndex === index}
//                     onClick={() => toggleAccordion(index)}
//                 />
//             ))}
//         </div>
//     );
// };
//
// export default AccordionList;

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionList = ({ variant = "first" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // 1-chi variantdagi itemlar (boshlang'ich)
    const firstItems = [
        {
            number: "01",
            title: "Consultation",
            content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
        },
        {
            number: "02",
            title: "Research and Strategy Development",
            content: "Our team will conduct market research, analyze competition, and formulate a detailed marketing strategy tailored to your business goals.",
        },
        {
            number: "03",
            title: "Implementation & Optimization",
            content: "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
        },
        {
            number: "04",
            title: "Monitoring and Optimization",
            content: "We will monitor performance and continuously optimize to achieve the best possible ROI.",
        },
        {
            number: "05",
            title: "Reporting and Communication",
            content: "We will provide regular reports and maintain open communication throughout the process.",
        },
        {
            number: "06",
            title: "Continual Improvement",
            content: "We will analyze data and feedback to continuously improve your marketing strategy.",
        },
    ];

    // 2-chi variantdagi itemlar (yangi qo'shilganlar)
    const secondItems = [
        {

            title: "Onboarding",
            content: "We help you get started by integrating our systems with yours for a seamless onboarding experience.",
        },
        {

            title: "Training and Support",
            content: "We provide comprehensive training and support to ensure your team is fully prepared.",
        },
        {

            title: "Performance Reviews",
            content: "We conduct regular performance reviews to ensure everything is on track and goals are being met.",
        },
        {

            title: "Feedback Integration",
            content: "Client feedback is actively integrated to improve our processes and outcomes.",
        },
        {

            title: "Future Planning",
            content: "We assist in planning future campaigns and strategic goals beyond the current project.",
        },
        {

            title: "Wrap-up & Handover",
            content: "We finalize the project and provide all deliverables with a detailed summary and insights.",
        },
    ];

    // variantga qarab qaysi listni chiqarish
    const items = variant === "second" ? secondItems : firstItems;

    return (
        <div data-aos="fade-up" className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    number={item.number}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default AccordionList;


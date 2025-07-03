
// AccordionList.jsx
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionList = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            number: "01",
            title: "Consultation",
            content:
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. our services to best fit your requirements.",
        },
        {
            number: "02",
            title: "Research and Strategy Development",
            content:
                "Our team will conduct market research, analyze competition, and formulate a detailed marketing strategy tailored to your business goals.",
        },
        {
            number: "03",
            title: "Implementation & Optimization",
            content:
                "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
        },
        {
            number: "04",
            title: "Monitoring and Optimization",
            content:
                "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
        },
        {
            number: "05",
            title: "Reporting and Communication",
            content:
                "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
        },
        {
            number: "06",
            title: "Continual Improvement",
            content:
                "We will launch your campaign, monitor performance, and continuously optimize to achieve the best possible ROI.",
        },
    ];

    return (
        <div className=" max-w-[1240px] max-lg:w-[600px] max-sm:w-[410px] ">
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



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

            title: "Are there any additional fees or changes that may apply?",
            content: "Yes, there may be additional fees depending on your needs. Our base pricing includes core services, but optional add-ons like advanced features, extra users, custom integrations, or increased usage (e.g., storage, bandwidth) may incur extra charges. A one-time setup fee might apply for onboarding or technical configuration. Payment processing fees could occur for certain methods like international cards. If invoices are paid late, a small late fee may apply.",
        },
        {

            title: "Can I change or cancel my plant at any time?",
            content: "you can change or cancel your plan at any time. We offer flexible options so you can upgrade, downgrade, or cancel based on your current needs. Changes take effect immediately or at the end of your billing cycle, depending on the plan type. If you cancel, you’ll retain access to your features until the end of the paid period—no hidden fees or penalties. ",
        },
        {

            title: "Do you offer a free trial or consultattion?",
            content: "we offer a free trial and/or consultation to help you get started with confidence. The free trial lets you explore key features before committing, while our consultation gives you a chance to ask questions, discuss your goals, and see how our solution fits your needs. There's no obligation—just a chance to see if we’re the right fit for you.",
        },
        {

            title: "How do you bill and invoice your clients?",
            content: "We bill clients based on their selected plan, either monthly or annually, depending on their preference. Invoices are generated automatically and sent via email at the start of each billing cycle. Each invoice includes a detailed breakdown of services, charges, applicable taxes, and payment instructions. We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. ",
        },
        {

            title: "Are you services guaranteed to deliver result?",
            content: "While we are fully committed to delivering high-quality service and measurable value, we cannot guarantee specific results. Success depends on various factors, including your goals, industry, market conditions, and how consistently our services are applied. What we do guarantee is our dedication to working closely with you, providing expert support, proven strategies, and transparent reporting. Our goal is to set realistic expectations, track progress, and continuously optimize to help you achieve the best possible outcome.",
        },
        {

            title: "Do you offer contratc-based or monthly retrainer-based pricing?",
            content: "Contract-Based: Suitable for project-based work or defined deliverables. These contracts have a clear start and end date, fixed pricing, and detailed scope. They’re perfect for clients who prefer structure and timeline-based results.",
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


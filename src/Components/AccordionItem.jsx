
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ number, title, content, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    return (
        <div
            className={`rounded-[30px] border border-black border-b-[6px] shadow-md transition-all duration-500 overflow-hidden mb-4 ${
                isOpen ? "bg-lime-300" : "bg-gray-100"
            }`}
        >
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full px-6 py-8 text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold">{number}</span>
                    <span className="text-2xl ">{title}</span>
                </div>
                <motion.span
                    className="text-4xl border border-black  bg-white rounded-full w-10 h-10 flex items-center justify-center"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? "−" : "+"}
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            ref={contentRef}
                            className="px-6 pb-6 pt-2 border-t border-black text-sm text-gray-800 leading-relaxed"
                        >
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;


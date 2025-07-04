
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ number, title, content, isOpen, onClick }) => {
    return (
        <div
            className={`rounded-[20px] border border-black shadow-md transition-all duration-300 overflow-hidden mb-4 ${
                isOpen ? "bg-lime-300" : "bg-gray-100"
            }`}
        >
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full px-6 py-5 text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{number}</span>
                    <span className="text-lg font-semibold">{title}</span>
                </div>
                <span className="text-2xl border border-black rounded-full w-8 h-8 flex items-center justify-center">
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div data-aos="fade-up" className=" px-6 pb-6 pt-2 border-t border-black text-sm text-gray-800 leading-relaxed ">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;


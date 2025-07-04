//
// // components/StatsIllustration.jsx
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
//
// const stats = [
//     { number: "8+", label: "Years of Experience" },
//     { number: "50+", label: "Experts" },
//     { number: "100+", label: "Successful Campaigns" },
//     { number: "20+", label: "Industry Awards" },
//     { number: "500%", label: "ROI for our clients" },
// ];
//
// const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//         pathLength: 2,
//         transition: {
//             duration: 3.5,
//             ease: "easeInOut",
//         },
//     },
// };
//
// const StatsIllustration = () => {
//     return (
//         <div className="w-full max-w-6xl mx-auto px-4 py-10">
//             {/* SVG line */}
//             <svg
//                 viewBox="0 0 1200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-full h-24"
//                 fill="none"
//             >
//
//
//
//                 {[0, 240, 480, 720].map((x, i) => (
//                     <motion.path
//                         key={i}
//                         d={`M${x},40 Q${x + 10},40 ${x + 10},60 V80`} // <-- Pastga egilgan
//                         stroke="black"
//                         strokeWidth="2"
//                         variants={pathVariants}
//                         initial="hidden"
//                         animate="visible"
//                     />
//                 ))}
//
//                 // End bracket ham shunday o‘zgartiriladi:
//                 <motion.path
//                     d="M960,40 Q970,40 970,60 V80" // <-- Pastga egilgan
//                     stroke="black"
//                     strokeWidth="2"
//                     variants={pathVariants}
//                     initial="hidden"
//                     animate="visible"
//                 />
//
//
//                 {/* Top line */}
//                 <motion.line
//                     x1="0"
//                     y1="80"
//                     x2="1200"
//                     y2="80"
//                     stroke="black"
//                     strokeWidth="2"
//                     variants={pathVariants}
//                     initial="hidden"
//                     animate="visible"
//                 />
//             </svg>
//
//             {/* Numbers and text */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 text-center">
//                 {stats.map((stat, idx) => (
//                     <div key={idx}>
//                         <h2 className="text-2xl font-bold">{stat.number}</h2>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default StatsIllustration;

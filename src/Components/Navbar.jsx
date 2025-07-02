import {navlinks} from '../../Constants/index.js'



// const Navbar = () => {
//     return (
//         <nav className="my-8">
//             <div className="w-[1340px] h-[70px] p-[20px]">
//                 <a href="#" className="flex items-center gap-[300px] ">
//                     <div className="flex items-center gap-[20px] ">
//                         <img src="/src/assets/Icon.svg" className="w-[36px] h-[36px] inline-block font-[700]" alt=""/>
//                         <p className="text-[40px] inline-block">Positivus</p>
//                     </div>
//
//
//                 <ul className="w-full inline-flex items-center gap-[30px] text-[20px] font-extralight">
//                     {navlinks.map((link)=>(
//                         <li key={link.id} className="" >
//                             <a href={`#$link.id`} className="text-black">{link.title}</a>
//                         </li>
//                     ))}
//                     <button className="w-57.5 h-17 border-black border-[1px] rounded-2xl">Request Quote</button>
//                 </ul>
//                 </a>
//             </div>
//         </nav>
//     )
// }
//  export default Navbar


//
//
// import { useEffect, useState } from "react";
//
//
//
// const Navbar = () => {
//     const [showItems, setShowItems] = useState([]);
//
//     useEffect(() => {
//         // 0 - logo
//         setTimeout(() => {
//             setShowItems((prev) => [...prev, "logo"]);
//         }, 400 + 200);
//
//         // navlinklar: 1, 2, 3, ...
//         navlinks.forEach((_, index) => {
//             setTimeout(() => {
//                 setShowItems((prev) => [...prev, index]);
//             }, 400 + 200 * index); // logo'dan keyin boshlanadi
//         });
//
//         // button - navlinks.length
//         setTimeout(() => {
//             setShowItems((prev) => [...prev, "button"]);
//         }, 400 + 200 * navlinks.length);
//     }, []);
//
//     return (
//         <nav className="my-8  ">
//             <div className="w-[1340px] h-[70px] p-[20px] mx-auto  ">
//                 <div className="flex items-center justify-between">
//
//                     {/* ✅ LOGO ANIMATSIYALI */}
//                     <div
//                         className={`flex items-center gap-[20px] transition-all duration-700 ease-out transform
//                       ${showItems.includes("logo") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
//                         <img
//                             src="/src/assets/Icon.svg"
//                             className="w-[36px] h-[36px]"
//                             alt="logo"
//                         />
//                         <p className="text-[40px] font-bold">Positivus</p>
//                     </div>
//
//                     {/* ✅ NAVLINK + BUTTON */}
//                     <ul className="flex items-center gap-[30px] text-[20px] font-extralight">
//                         {navlinks.map((link, index) => (
//                             <li
//                                 key={link.id}
//                                 className={`transition-all duration-500 ease-out transform
//                   ${showItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                             >
//                                 <a href={`#${link.id}`} className="text-black hover:underline">
//                                     {link.title}
//                                 </a>
//                             </li>
//                         ))}
//
//                         {/* ✅ BUTTON ANIMATSIYALI */}
//                         <li
//                             className={`transition-all duration-1200 ease-out transform
//                 ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                         >
//                             <button className="px-4 py-2 border-black border-[1px] rounded-2xl">
//                                 Request Quote
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
//

import { useEffect, useState } from "react";



const Navbar = () => {
    const [showItems, setShowItems] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowItems((prev) => [...prev, "logo"]);
        }, 400);

        navlinks.forEach((_, index) => {
            setTimeout(() => {
                setShowItems((prev) => [...prev, index]);
            }, 600 + 200 * index);
        });

        setTimeout(() => {
            setShowItems((prev) => [...prev, "button"]);
        }, 600 + 200 * navlinks.length);
    }, []);

    return (
        <nav className="w-full shadow-md fixed top-0 left-0  backdrop-blur bg-white/50 z-1">
            <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between">

                {/* ✅ Logo */}
                <div
                    className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
            ${showItems.includes("logo") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                    <img src="/src/assets/Icon.svg" className="w-[36px] h-[36px]" alt="logo" />
                    <p className="text-[28px] sm:text-[32px] font-bold">Positivus</p>
                </div>

                {/* ✅ Desktop menu */}
                <ul className="hidden lg:flex items-center gap-8 text-[18px] font-light">
                    {navlinks.map((link, index) => (
                        <li key={link.id} className={`transition-all duration-500 ease-out transform
              ${showItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                            <a href={`#${link.id}`} className="text-black rounded-0.25 hover:bg-[rgb(207,255,113)]">
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <li className={`transition-all duration-700 ease-out transform
            ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                        <button className="px-4 py-2 border border-black rounded-2xl hover:bg-black hover:text-white transition">
                            Request Quote
                        </button>
                    </li>
                </ul>

                {/* ✅ Hamburger (mobile only) */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* ✅ Mobile dropdown menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pt-4 pb-6 space-y-4 bg-white shadow-inner">
                    {navlinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="block text-[18px] text-black hover:text-[rgb(207,255,113)]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.title}
                        </a>
                    ))}
                    <button
                        className="mt-2 px-4 py-2 border border-black rounded-2xl hover:bg-black hover:text-white transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Request Quote
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

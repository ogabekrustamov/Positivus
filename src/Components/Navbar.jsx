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
import { useEffect, useState } from "react";



const Navbar = () => {
    const [showItems, setShowItems] = useState([]);

    useEffect(() => {
        // 0 - logo
        setTimeout(() => {
            setShowItems((prev) => [...prev, "logo"]);
        }, 400 + 200);

        // navlinklar: 1, 2, 3, ...
        navlinks.forEach((_, index) => {
            setTimeout(() => {
                setShowItems((prev) => [...prev, index]);
            }, 400 + 200 * index); // logo'dan keyin boshlanadi
        });

        // button - navlinks.length
        setTimeout(() => {
            setShowItems((prev) => [...prev, "button"]);
        }, 400 + 200 * navlinks.length);
    }, []);

    return (
        <nav className="my-8">
            <div className="w-[1340px] h-[70px] p-[20px] mx-auto">
                <div className="flex items-center justify-between">

                    {/* ✅ LOGO ANIMATSIYALI */}
                    <div
                        className={`flex items-center gap-[20px] transition-all duration-700 ease-out transform 
              ${showItems.includes("logo") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                    >
                        <img
                            src="/src/assets/Icon.svg"
                            className="w-[36px] h-[36px]"
                            alt="logo"
                        />
                        <p className="text-[40px] font-bold">Positivus</p>
                    </div>

                    {/* ✅ NAVLINK + BUTTON */}
                    <ul className="flex items-center gap-[30px] text-[20px] font-extralight">
                        {navlinks.map((link, index) => (
                            <li
                                key={link.id}
                                className={`transition-all duration-500 ease-out transform
                  ${showItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                            >
                                <a href={`#${link.id}`} className="text-black hover:underline">
                                    {link.title}
                                </a>
                            </li>
                        ))}

                        {/* ✅ BUTTON ANIMATSIYALI */}
                        <li
                            className={`transition-all duration-1200 ease-out transform
                ${showItems.includes("button") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        >
                            <button className="px-4 py-2 border-black border-[1px] rounded-2xl">
                                Request Quote
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


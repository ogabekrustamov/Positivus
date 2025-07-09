
import { navlinks } from '../../Constants/index.js'
// import logo from '../../public/Image/Icon.svg';
import { NavLink, Link } from 'react-router-dom';
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
        <nav className="w-full shadow-md fixed top-0 left-0 backdrop-blur bg-white/50 z-1 ">
            <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center  justify-between">

                {/* Logo */}
                <div
                    className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
            ${showItems.includes("logo") ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/Image/Icon.svg" className="w-[36px] h-[36px]" alt="logo" />
                        <p className="text-[28px] sm:text-[32px] font-bold">Positivus</p>
                    </Link>
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex items-center gap-8 text-[18px] font-light">
                    {navlinks.map((link, index) => (
                        <li key={link.id} className={`transition-all duration-500 ease-out transform
              ${showItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>

                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-3 py-1 rounded transition ${
                                        isActive
                                            ? "bg-[rgb(207,255,113)] text-black font-medium"
                                            : "text-black hover:bg-[rgb(207,255,113)]"
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
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

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pt-4 pb-6 space-y-4 bg-white shadow-inner">
                    {navlinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block text-[18px] px-3 py-1 rounded ${
                                    isActive
                                        ? "bg-[rgb(207,255,113)] text-black font-medium"
                                        : "text-black hover:bg-[rgb(207,255,113)]"
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
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




import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import white from '../assets/white.svg';

const Footer = () => {
    return (

        <div className="flex flex-col max-lg:items-center mt-[40px]">
            <footer className="bg-[rgb(25,26,35)] text-white py-12 px-6 md:px-20 rounded-t-[40px] max-lg:w-full max-sm:w-full max-sm:rounded-t-[0px] max-lg:rounded-t-[0px]">
                <div className="flex flex-col max-lg:flex-row justify-between items-start max-lg:items-center mb-10 gap-10">
                    {/* Left: Logo and Menu */}
                    <div className="space-y-5">
                        {/*<h1 className="text-2xl font-semibold">🌟 Positivus</h1>*/}
                        <div
                            className={`flex items-center gap-2 transition-all duration-700 ease-out transform`}>
                            <img src={white} className="w-[36px] h-[36px]" alt="logo" />
                            <p className="text-[28px] sm:text-[32px] font-bold">Positivus</p>
                        </div>

                        <nav className="flex flex-wrap gap-6 text-sm underline underline-offset-4">
                            <a href="#" className="hover:text-[rgb(207,255,113)]">About us</a>
                            <a href="#" className="hover:text-[rgb(207,255,113)]">Services</a>
                            <a href="#" className="hover:text-[rgb(207,255,113)]">Use Cases</a>
                            <a href="#" className="hover:text-[rgb(207,255,113)]">Pricing</a>
                            <a href="#" className="hover:text-[rgb(207,255,113)]">Blog</a>
                        </nav>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex gap-4 text-black">
                        <div className="bg-white p-2 rounded-full hover:bg-[rgb(207,255,113)]">
                            <FaLinkedinIn />
                        </div>
                        <div className="bg-white p-2 rounded-full hover:bg-[rgb(207,255,113)]">
                            <FaFacebookF />
                        </div>
                        <div className="bg-white p-2 rounded-full hover:bg-[rgb(207,255,113)]">
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                {/* Contact and Subscribe */}
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Contact Info */}
                    <div className="text-sm space-y-2">
          <span className="bg-[rgb(207,255,113)] text-black px-2 py-1 rounded-md font-semibold inline-block">
            Contact us:
          </span>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
                    </div>

                    {/* Subscribe */}
                    <div className="bg-[rgb(41,42,49)] rounded-xl p-6 flex flex-col md:flex-row gap-4 items-center w-full md:w-[500px]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 py-2 px-4 rounded-md bg-transparent border border-gray-500 text-white focus:outline-none"
                        />
                        <button className="bg-[rgb(207,255,113)] text-black px-6 py-2 rounded-md font-medium">
                            Subscribe to news
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Bottom Info */}
                <div className="flex justify-between items-center text-sm flex-col md:flex-row gap-4">
                    <p>© 2025 Positivus. All Rights reserved.</p>
                    <a href="#" className="underline underline-offset-2">
                        Privacy Policy
                    </a>
                </div>
            </footer>
        </div>




    );
};

export default Footer;

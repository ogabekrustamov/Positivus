

const PricingCards = () => {

    return (
        <div className={``}>
            <div className={`w-[90vw] max-w-[1240px]`}>
                <div>
                    <h1 className={`text-[60px] font-semibold `}>Pricing</h1>
                    <p className={`text-[18px] `}>Elevate your Online Precense.Competetive pricing <br/> fro Exceprional results</p>
                </div>
                <div className={`flex justify-between mt-[60px] gap-[20px] max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col`}>
                    <div className={`w-[370px] max-h-[950px] border-[1px] max-lg:w-full max-sm:p-[35px] border-black rounded-[35px] flex flex-col p-[25px] border-b-[6px]`}>
                         <div className="mb-[30px]">
                             <h3 className={`text-[25px] font-semibold`}>Basic Plan</h3>
                             <h2 className={`text-[40px] font-[600]`}>$500 <span className={`text-[16px] font-[300]`}>\month</span></h2>
                         </div>
                        <button className={`w-full h-[60px] bg-[rgb(25,26,35)] text-white cursor-pointer rounded-[15px] hover:scale-105 transition-all duration-400 hover:bg-[rgb(207,255,113)]  hover:text-black mb-[20px]`}>Get started</button>
                        <button className={`w-full h-[60px]  text-black cursor-pointer border-[2px] hover:scale-105 transition-all duration-400 border-black rounded-[15px] mb-[30px]`}>Request a quote</button>
                        <div className={`w-full bg-black h-[2px] `}></div>
                        <div className={`w-full flex flex-col`}>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Website optimization</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Social media setup and management (1 platform)</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Monthly progress report</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Email support</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Basic competitor analysis</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Initial SEO audit</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[370px] max-h-[950px] border-[1px] max-lg:w-full max-sm:p-[35px] bg-[rgb(25,26,35)] border-[rgb(25,26,35)] text-white rounded-[35px] flex flex-col p-[25px] border-b-[6px]`}>
                        <div className="mb-[30px]  flex">

                            <div>
                                <h3 className={`text-[25px] font-semibold`}>Pro Plan</h3>
                                <h2 className={`text-[40px] font-[600]`}>$1000 <span className={`text-[16px] font-[300]`}>\month</span></h2>
                            </div>
                            <div className={`w-[100px] h-[30px] rounded-[15px] bg-[rgb(207,255,113)] flex justify-center items-center text-black`}>Popular</div>
                        </div>
                        <button className={`w-full h-[60px] bg-[rgb(207,255,113)] text-black cursor-pointer hover:scale-105 transition-all duration-400 hover:bg-white  hover:text-black rounded-[15px] mb-[20px]`}>Get started</button>
                        <button className={`w-full h-[60px]  text-white cursor-pointer border-[2px] border-white rounded-[15px] hover:scale-105 duration-400 mb-[30px]`}>Request a quote</button>
                        <div className={`w-full bg-white h-[2px] `}></div>
                        <div className={`w-full flex flex-col `}>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>Includes all from the Basic Plan</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>Social media setup and management (up to 3 platforms)</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>PPC ad campaign management</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>Email and phone support</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>On-page SEO improvements</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check text-black`}></div>
                                </div>
                                <p>Monthly content recommendations</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[370px] max-h-[950px] border-[1px] max-lg:w-full max-sm:p-[35px] border-black rounded-[35px] flex flex-col p-[25px] border-b-[6px]`}>
                        <div className="mb-[30px]">
                            <h3 className={`text-[25px] font-semibold`}>Basic Plan</h3>
                            <h2 className={`text-[40px] font-[600]`}>$2000 <span className={`text-[16px] font-[300]`}>\month</span></h2>
                        </div>
                        <button className={`w-full h-[60px] bg-[rgb(25,26,35)] text-white cursor-pointer  hover:scale-105 transition-all duration-400 hover:bg-[rgb(207,255,113)]  hover:text-black rounded-[15px] mb-[20px]`}>Get started</button>
                        <button className={`w-full h-[60px]  text-black cursor-pointer border-[2px] border-black hover:scale-105 duration-400 rounded-[15px] mb-[30px]`}>Request a quote</button>
                        <div className={`w-full bg-black h-[2px] `}></div>
                        <div className={`w-full flex flex-col`}>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Includes all from the Pro Plan</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Website design and development</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Comprehensive SEO strategy</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Social media setup and management (up to 5 platforms)</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Content marketing strategy and implementation</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>In-depth analytics and reporting</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PricingCards;
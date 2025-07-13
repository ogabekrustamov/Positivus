

const PricingCards = () => {

    return (
        <div className={``}>
            <div className={`w-[90vw] max-w-[1240px]`}>
                <div>
                    <h1 className={`text-[75px] font-semibold `}>Pricing</h1>
                    <p className={`text-[16px] `}>Elevate your Online Precense.Competetive pricing fro Exceprional results</p>
                </div>
                <div className={`flex`}>
                    <div className={`w-[350px] max-h-[950px] border-[1px] border-black rounded-[35px] flex flex-col p-[25px] border-b-[6px]`}>
                         <div className="mb-[30px]">
                             <h3 className={`text-[25px] font-semibold`}>Basic Plan</h3>
                             <h2 className={`text-[40px] font-[600]`}>$500 <span className={`text-[16px] font-[300]`}>\month</span></h2>
                         </div>
                        <button className={`w-full h-[60px] bg-black text-white cursor-pointer rounded-[15px] mb-[20px]`}>Get started</button>
                        <button className={`w-full h-[60px]  text-black cursor-pointer border-[2px] border-black rounded-[15px] mb-[30px]`}>Request a</button>
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
                                <p>Website optimization</p>
                            </div>
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
                                <p>Website optimization</p>
                            </div>
                            <div className={`flex gap-[20px] mt-[30px]`}>
                                <div className="w-8 h-8 bg-[rgb(207,255,113)] rounded-full flex items-center justify-center">
                                    <div className={`fas fa-soli fa-check`}></div>
                                </div>
                                <p>Website optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCards;
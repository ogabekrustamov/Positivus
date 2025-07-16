
const SuccesStory = () => {

    return (
        <div className="w-full flex justify-center mt-[60px] ">
                <div   className={`max-w-[1240px] w-[90vw] min-h-[540px] max-h-[1550px] max-sm:p-[40px] flex gap-[40px] rounded-[45px] max-lg:flex max-lg:flex-col  p-[60px] bg-[rgb(31,32,39)]`}>
                    <div className=" w-[45vw] flex flex-col gap-[70px] max-lg:w-full  h-full bg-[rgb(31,32,39)] ">
                        <div>
                            <h1 className="text-[32px] bg-[rgb(207,255,113)] inline-block    font-semibold rounded-[10px]">Featured Succes Story</h1>
                        </div>
                        <div>
                            <h1 className={`text-[27px] font-semibold w-[400px] max-lg:w-[70vw] text-white`}>Scaling succes for a Leading E-commerce brand</h1>
                        </div>
                        <div className="w-[500px] max-lg:w-[70vw] text-[18px] text-white">
                            <q>Through Comprehensive Ceo and PPC strategy we helped this e-commerce brand increase visibility, drive traffica and boost sales.</q>
                        </div>
                        <div className="flex items-center gap-[20px] ">
                            <img src="/Image/greenarr.svg" alt=""/>
                            <p className={`text-[rgb(207,255,113)] text-[18px]`}>Read</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-[20px] max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:flex max-sm:w-full max-sm:flex-col max-lg:w-full w-[500px] h-full ">
                        <div className="flex bg-white flex-col gap-[20px] rounded-[25px] p-[40px] text-center ">
                            <h1 className={`font-semibold text-[35px]`}> 200%</h1>
                            <p>Increase in br organic traffic</p>
                        </div>
                        <div className="flex flex-col gap-[20px] bg-white rounded-[25px]  p-[40px] text-center items-center ">
                            <h1 className={`font-semibold text-[35px]`}> 150%</h1>
                            <p>rise in online sales</p>
                        </div>
                        <div className="flex bg-white flex-col gap-[20px] rounded-[25px] items-center p-[40px] text-center ">
                            <h1 className={`font-semibold text-[35px]`}> 75%</h1>
                            <p>reduction in cost-per-click <br/>(CPC)</p>
                        </div>
                        <div className="flex bg-white flex-col gap-[20px] rounded-[25px] items-center p-[40px] text-center ">
                            <h1 className={`font-semibold text-[35px]`}> 300%</h1>
                            <p>imrovement in <br/> coversation rate</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SuccesStory

const BlogGrid = () => {

    return (
        <div className={`w-full  mt-[60px]`}>
            <div data-aos="fade-up"  className="flex w-[90vw] max-w-[1240px] mx-auto  max-lg:justify-center ">
                <span className="bg-[rgb(207,255,113)] text-[30px] rounded-[5px] px-[5px] h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] max-sm:items-center"><h1>Explore More Insights</h1></span>
                <div className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">Explore real life examples of Our proven digital Marketing Succes through our Case Studiesw</div>
            </div>

            <div className={`max-w-[1240px] mx-auto w-[90vw] max-sm:p-0  p-[60px] grid grid-cols-3 grid-rows-2 border-[1px] max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:pb-[60px] rounded-[45px] mt-[60px] max-sm:flex max-sm:border-none max-sm:flex-col max-sm:gap-[40px]`}>
                <div className="w-full flex gap-[30px] flex-col pb-[50px] border-b-[1px] border-r-[1px] max-lg:pb-0 max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] pr-[60px]">
                    <h1 className={`text-[25px] font-semibold`}>10 SEO Myths You Need to Stop Believing</h1>
                    <p>Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
                <div className="w-full flex gap-[30px] flex-col pb-[60px] pr-[60px] max-lg:pr-0 border-b-[1px] max-lg:pb-0 border-r-[1px] max-lg:border-r-0 pl-[60px]  max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] ">
                    <h1 className={`text-[25px] font-semibold`}>Maximizing ROI with Social Media Advertising</h1>
                    <p>Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
                <div className="w-full flex gap-[30px] flex-col  pb-[60px] max-lg:pr-[60px] border-b-[1px] max-lg:border-r-[1px] max-lg:pl-0 pl-[60px] max-lg:pt-[60px]  max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] ">
                    <h1 className={`text-[25px] font-semibold`}>How Content Marketing Fuels Long-Term Growth</h1>
                    <p>Content isn’t just king—it’s the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
                <div className="w-full flex gap-[30px] flex-col pt-[60px]  max-lg:pr-0 max-lg:pl-[60px] border-r-[1px] max-lg:border-r-0  max-lg:border-b-[1px]  pr-[60px]  max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] ">
                    <h1 className={`text-[25px] font-semibold`}>The Art of A/B Testing: Perfecting Your Campaigns</h1>
                    <p>From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
                <div className="w-full flex gap-[30px] flex-col pt-[60px] pr-[60px] border-r-[1px]  max-lg:pl-0 pl-[60px]  max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] ">
                    <h1 className={`text-[25px] font-semibold`}>Understanding Google’s Latest Algorithm Update</h1>
                    <p>Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
                <div className="w-full flex gap-[30px] flex-col pt-[60px]    pl-[60px]  max-sm:border-[1px] max-sm:rounded-[45px]  max-sm:p-[40px] ">
                    <h1 className={`text-[25px] font-semibold`}>5 Ways AI is Changing Digital Marketing</h1>
                    <p>Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.</p>
                    <div className="w-full flex items-center gap-[20px]">
                        <img src="/Image/greenarr.svg"  className={`w-[41px]`} alt=""/>
                        <p className={`hover:underline`}>Learn more</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BlogGrid
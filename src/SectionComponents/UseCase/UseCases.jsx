

import CardSlider from "/src/Components/CardSlider.jsx";

const UseCases= () => {


    return (
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center mb-[40px] mt-[60px]">
            <div className="flex max-lg:justify-center w-[90vw] max-w-[1240px] mx-auto max-sm:justify-center ">
                <span
                    className="bg-[rgb(207,255,113)] text-[30px] w-[178px] h-[51px] flex justify-center font-[500] mr-5 max-sm:text-[17px] max-sm:w-[85px] max-sm:h-[45px] max-sm:items-center"><h1>Services</h1></span>
                <div
                    className="w-[580px] h-[46px] max-lg:w-[540px] max-sm:w-[320px] max-sm:h-[80px] max-sm:text-[14px] transition-all duration-700 ease-out transform">At
                    our digital marketing agency, we offer a range of services to help businesses grow and succeed
                    online. These services include:
                </div>
            </div>

            <div
                 className="bg-[rgb(31,32,39)] text-white   flex flex-col md:flex-row md:divide-x md:divide-gray-500/30 gap-8 w-[90vw] max-w-[1240px] mx-auto  h-[347px]  p-[70px] rounded-[45px] mt-[60px]  justify-center items-center max-lg:hidden ">

                <div className="md:w-1/3 space-y-6">
                    <p>
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                        in website traffic and a 25% increase in sales.
                    </p>
                    <a href="#" className="text-lime-300 font-semibold inline-flex items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45 transition-transform duration-300">&#8594;</span>
                    </a>
                </div>


                <div className="md:w-1/3 space-y-6 md:px-6">
                    <p>
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                        for key keywords and a 200% increase in organic traffic.
                    </p>
                    <a href="#" className="text-lime-300 font-semibold inline-flex items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45 transition-transform duration-300">&#8594;</span>
                    </a>
                </div>


                <div className="md:w-1/3 space-y-6">
                    <p>
                        For a national retail chain, we created a social media marketing campaign that increased
                        followers by 25% and generated a 20% increase in online sales.
                    </p>
                    <a href="#" className="text-lime-300 font-semibold inline-flex items-center hover:underline">
                        Learn more
                        <span className="ml-2 transform -rotate-45 transition-transform duration-300">&#8594;</span>
                    </a>
                </div>
            </div>
        </div>


    )
}
export default UseCases
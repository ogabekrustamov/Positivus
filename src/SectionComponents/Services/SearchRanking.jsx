import React from "react";

const SearchRanking = () => {

    return (

            <div   className="bg-white flex  w-[90vw] max-w-[1240px] max-h-[900px] max-sm:h-[900px] mb-[60px] border-b-[6px] border-[1px] border-black p-[60px] gap-[30px] rounded-[45px]  mt-[60px]  max-lg:flex-col  max-sm:p-[40px]  ">

                <div className="w-[60%]  flex flex-col gap-[20px] justify-center max-lg:w-full">
                    <h3 className="text-xl font-semibold mb-2 text-[30px]">Ready to Elevate Your Search Ranking</h3>
                    <div className={`h-[1px] bg-black max-w-[600px]`}></div>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis doloribus earum libero necessitatibus quas quibusdam quidem vitae. Dignissimos, praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet, facilis illum molestias quis voluptatibus.</p>
                    <h3 className={`text-[20px] font-semibold`}>Lets work together to grow your own presence</h3>
                    <button className="w-full max-sm:hidden h-[50px] max-lg:w-[50%] text-black bg-[rgb(200,253,124)] hover:bg-black   hover:text-white rounded-[15px]  hover:scale-105 transition-all duration-400 font-semibold">Start My Seo Journey</button>
                </div>
                <div className="w-[40%]  flex flex-col h-[307px] items-center gap-[40px] max-sm:block max-lg:w-full  ">
                    <img src="/Image/ranking.svg" alt="" className="w-[350px] h-[267px] mx-auto mt-[40px]" />
                    <button className="w-full hidden max-sm:block h-[50px] max-lg:w-[50%] text-black bg-[rgb(200,253,124)] hover:bg-black   hover:text-white rounded-[15px] mt-[30px]  hover:scale-105 transition-all duration-400 font-semibold">Explore Careers</button>
                </div>


            </div>

    );
};
export default SearchRanking;
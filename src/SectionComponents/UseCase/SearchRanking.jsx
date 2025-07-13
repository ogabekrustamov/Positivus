import React from "react";

const SearchRanking = () => {

    return (
        <div className="bg-[rgb(243,243,243)] flex  w-[90vw] max-w-[1240px] max-h-[1000px]  border-[1px] border-black p-[70px] gap-[30px] rounded-[45px]  mt-[60px]  max-lg:flex-col max-lg:h-[680px] max-sm:p-[40px] max-sm:h-[730px] ">

            <div className="w-[60%]  flex flex-col gap-[20px] justify-center max-lg:w-full">
                <h3 className="text-xl font-semibold mb-2 text-[30px]">Ready to Elevate Your Search Ranking</h3>
                <div className={`h-[1px] bg-black max-w-[600px]`}></div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis doloribus earum libero necessitatibus quas quibusdam quidem vitae. Dignissimos, praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet, facilis illum molestias quis voluptatibus.</p>
                <h3 className={`text-[20px] font-semibold`}>Lets work together to grow your own presence</h3>
                <button className="w-full max-sm:hidden h-[50px] max-lg:w-[50%] text-white bg-black rounded-[15px]">Explore Careers</button>
            </div>
            <div className="w-[40%] h-full flex flex-col gap-[40px] max-lg:hidden max-sm:block max-lg:w-full max-lg:justify-center ">
                <img src="/Image/pod.svg" alt="" className="w-[350px]" />
                <button className="w-full hidden max-sm:block h-[50px] max-lg:w-[50%] text-white bg-black rounded-[15px]">Explore Careers</button>
            </div>


        </div>
    );
};
export default SearchRanking;
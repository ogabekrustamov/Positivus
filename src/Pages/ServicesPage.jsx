
import Marketing from "../SectionComponents/Services/Marketing.jsx";
import Process from "../SectionComponents/Services/Process.jsx";
import UseCases from "../SectionComponents/Services/UseCases.jsx";

import OtherService from "../SectionComponents/Services/OtherService.jsx";


// ✅ To‘g‘risi: default export qilish
const ServicesPage = () => {
    return (
        <div className="w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]">
            <Marketing />
            <Process />
            <UseCases />
            <OtherService />
        </div>
    )
};

export default ServicesPage;


import Marketing from "../SectionComponents/Services/Marketing.jsx";
import Process from "../SectionComponents/Services/Process.jsx";


// ✅ To‘g‘risi: default export qilish
const ServicesPage = () => {
    return (
        <div className="w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]">
            <Marketing />
            <Process />
        </div>
    )
};

export default ServicesPage;

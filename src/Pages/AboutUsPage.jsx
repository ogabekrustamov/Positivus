
import HeroAbout from "../SectionComponents/AboutUs/HeroAbout.jsx";
import AboutNumber from "../SectionComponents/AboutUs/AboutNumber.jsx";
// ✅ To‘g‘risi: default export qilish
const AboutUsPage = () => {
    return (

        <div className="w-full flex flex-col mt-[170px]">
        <HeroAbout />
        <AboutNumber />
        </div>
    );
};

export default AboutUsPage;

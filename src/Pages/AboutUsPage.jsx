
import HeroAbout from "../SectionComponents/AboutUs/HeroAbout.jsx";
import AboutNumber from "../SectionComponents/AboutUs/AboutNumber.jsx";
import OurJourney from "../SectionComponents/AboutUs/OurJourney.jsx";
import Values from "../SectionComponents/AboutUs/Values.jsx";
import Awards from "../SectionComponents/AboutUs/Awards.jsx";
import FullDiv from "../SectionComponents/AboutUs/FullDiv.jsx";
// ✅ To‘g‘risi: default export qilish
const AboutUsPage = () => {
    return (

        <div className="w-full flex flex-col items-center mt-[170px]">
        <HeroAbout />
        <AboutNumber />
            <OurJourney />
            <Values />
            <Awards />
            <FullDiv />
        </div>
    );
};

export default AboutUsPage;

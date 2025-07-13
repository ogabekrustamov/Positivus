
// ✅ To‘g‘risi: default export qilish



import PricingCards from "../SectionComponents/Pricing/PricingCards.jsx";
import AskedQuestions from "../SectionComponents/Pricing/AskedQuestions.jsx";

const PricingPage = () => {
    return <div className={`w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]`}>
        <PricingCards />
        <AskedQuestions />
    </div>;
};

export default PricingPage;

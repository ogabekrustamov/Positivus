
import UseCaseDiv from "../SectionComponents/UseCase/UseCaseDiv.jsx";
import SuccesStory from "../SectionComponents/UseCase/SuccesStory.jsx";
import AllStories from "../SectionComponents/UseCase/AllStories.jsx";
import Testimonials from "../Components/Testimonials.jsx";


const UseCasesPage = () => {
    return (<div className={`w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]`}>
        <UseCaseDiv />
            <SuccesStory />
            <AllStories />
            <Testimonials />


    </div>

    );
};

export default UseCasesPage;

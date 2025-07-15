

import BlogDiv from "../SectionComponents/Blog/BlogDiv.jsx";
import BlogText from "../SectionComponents/Blog/BlogText.jsx";
import BlogGrid from "../SectionComponents/Blog/BlogGrid.jsx";
// ✅ To‘g‘risi: default export qilish
const BlogPage = () => {
    return (
        <div className={`w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]`}>
            <BlogDiv />
            <BlogText />
            <BlogGrid />
        </div>
    );
};

export default BlogPage;

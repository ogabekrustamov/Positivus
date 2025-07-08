

import BlogDiv from "../SectionComponents/Blog/BlogDiv.jsx";
// ✅ To‘g‘risi: default export qilish
const BlogPage = () => {
    return (
        <div className={`w-full flex flex-col items-center max-sm:mt-[140px] mt-[170px]`}>
            <BlogDiv />
        </div>
    );
};

export default BlogPage;

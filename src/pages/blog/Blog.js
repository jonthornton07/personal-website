import React from "react";
import DefaultLayout, {HeaderTypes} from "../../layouts/DefaultLayout";
import BlogGrid from "./BlogGrid";

const Blog = () => {
    return (
        <DefaultLayout activePage="Blog" headerType={HeaderTypes.Regular}>
            <BlogGrid/>
        </DefaultLayout>
    );
};

export default Blog;

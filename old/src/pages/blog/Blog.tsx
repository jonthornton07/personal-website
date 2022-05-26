import React from "react";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Routes } from "../../../../app/routes/routes";
import BlogGrid from "./BlogGrid";

const Blog = () => {
    return (
        <DefaultLayout
            activePage={Routes.Blogs}
            headerType={HeaderTypes.Banner}
        >
            <>
            </>
            {/* <About/> */}
            {/* <Divider horizontal>Projects</Divider>
            <Projects/> */}
        </DefaultLayout>
        // <DefaultLayout activePage={Pages.Blogs} headerType={HeaderTypes.Regular}>
        //     <BlogGrid/>
        // </DefaultLayout>
    );
};

export default Blog;

import React from "react";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Pages } from "../pages";
import BlogGrid from "./BlogGrid";

const Blog = () => {
    return (
        <DefaultLayout
            activePage={Pages.Blogs}
            headerType={HeaderTypes.Banner}
            headerChildren={<></>}
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

import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HomeHeader from "./HomeHeader";
import About from "./About";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import AppHeader from "../../components/header/AppHeader";
import { Pages } from "../pages";

const HomePage = () => {
    return (
        <DefaultLayout
            activePage={Pages.Home}
            headerType={HeaderTypes.Banner}
            headerChildren={<HomeHeader/>}
        >
            <>
            </>
            {/* <About/> */}
            {/* <Divider horizontal>Projects</Divider>
            <Projects/> */}
        </DefaultLayout>
    );
};

export default HomePage;

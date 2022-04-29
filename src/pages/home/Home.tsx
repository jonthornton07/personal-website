import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HomeHeader from "./HomeHeader";
import About from "./About";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import AppHeader from "../../components/header/AppHeader";
import { Pages } from "../pages";
import Projects from "./Projects";
import Divider from "../../components/base/Divider";

const HomePage = () => {
    return (
        <DefaultLayout
            activePage={Pages.Home}
            headerType={HeaderTypes.Banner}
        >
            <>
                <HomeHeader/>
                <About/>
                <Divider text="PROJECTS"/>
                <Projects/>
            </>
        </DefaultLayout>
    );
};

export default HomePage;

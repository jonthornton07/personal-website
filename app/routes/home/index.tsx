import React from "react";
import HomeHeader from "./homeHeader";
import About from "./about";
import Projects from "./projects";
import Divider from "~/components/base/divider/Divider";

const HomePage = () => {
    return (
        <>
            <HomeHeader/>
            <About/>
            <Divider text="PROJECTS"/>
            <Projects/>
        </>
    );
};

export default HomePage;

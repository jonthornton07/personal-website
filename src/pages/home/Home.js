import React from "react";
import DefaultLayout, { HeaderTypes } from "../../layouts/DefaultLayout";
import HomeHeader from "./HomeHeader";
import Projects from "./Projects";
import { Divider } from "semantic-ui-react";
import About from "./About";

const HomePage = () => {
  return (
    <DefaultLayout
      activePage="Home"
      headerType={HeaderTypes.Banner}
      headerChildren={<HomeHeader />}
    >
      <About />
      <Divider horizontal>Projects</Divider>
      <Projects />
    </DefaultLayout>
  );
};

export default HomePage;

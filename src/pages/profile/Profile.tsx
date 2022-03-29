import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import {resumeData} from "./ResumeData";
import ProfileSection from "./ProfileSection";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import { Pages } from "../pages";

const Profile = () => {
    return (
        <DefaultLayout
            activePage={Pages.Work}
            headerType={HeaderTypes.Banner}
            headerChildren={<></>}
        >
            <>
            </>
            {/* <About/> */}
            {/* <Divider horizontal>Projects</Divider>
            <Projects/> */}
        </DefaultLayout>
        // <DefaultLayout activePage="Resume" headerType={HeaderTypes.Regular}>
        //     <Container text>
        //         {resumeData.map((section, index) => {
        //             return (
        //                 <ProfileSection
        //                     key={index}
        //                     timeframe={section.timeframe}
        //                     companyName={section.companyName}
        //                     title={section.title}
        //                     logo={section.logo}
        //                     highlights={section.highlights}
        //                     location={section.location}
        //                 />
        //             );
        //         })}
        //     </Container>
        // </DefaultLayout>
    );
};

export default Profile;

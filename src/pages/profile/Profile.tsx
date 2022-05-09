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
        >
            <div className="flex flex-col place-content-center max-w-m min-w-m">
                {resumeData.map((data, index) => {
                    return (
                        <div className="place-self-center w-screen m:screen flex flex-col">
                            <ProfileSection key={index} data={data} />
                        </div>
                    )}
                )}
            </div>
        </DefaultLayout>
    );
};

export default Profile;

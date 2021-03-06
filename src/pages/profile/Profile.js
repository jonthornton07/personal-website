import React from "react";
import DefaultLayout, {HeaderTypes} from "../../layouts/DefaultLayout";
import {resumeData} from "./ResumeData";
import ProfileSection from "./ProfileSection";
import {Container} from "semantic-ui-react";

const Profile = () => {
    return (
        <DefaultLayout activePage="Resume" headerType={HeaderTypes.Regular}>
            <Container text>
                {resumeData.map((section, index) => {
                    return (
                        <ProfileSection
                            key={index}
                            timeFrame={section.timeframe}
                            company={section.companyName}
                            title={section.title}
                            logo={section.logo}
                            highlights={section.highlights}
                        />
                    );
                })}
            </Container>
        </DefaultLayout>
    );
};

export default Profile;

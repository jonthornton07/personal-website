import React from 'react';
import DefaultLayout, { HeaderTypes } from '../../layouts/DefaultLayout'
import { resumeData } from './ResumeData'
import ProfileSection from './ProfileSection';

const Profile = () => {
    return (
        <DefaultLayout activePage='Resume' headerType={HeaderTypes.Regular}>
            {resumeData.map((section, index) => {
                return <ProfileSection 
                            key={index}
                            timeFrame={section.timeframe}
                            company={section.companyName}
                            location={section.location}
                            title={section.title}
                            highlights={section.highlights}
                        />

            })}
        </DefaultLayout>
    ) 
}

export default Profile
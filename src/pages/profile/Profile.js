import React from 'react';
import DefaultLayout, { HeaderTypes } from '../../layouts/DefaultLayout'

const Profile = () => {
    return (
        <DefaultLayout activePage='Resume' headerType={HeaderTypes.Regular}>
            Resume
        </DefaultLayout>
    ) 
}

export default Profile
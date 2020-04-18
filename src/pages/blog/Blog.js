import React from 'react';
import DefaultLayout, { HeaderTypes } from '../../layouts/DefaultLayout'

const Blog = () => {
    return (
        <DefaultLayout activePage='Blog' headerType={HeaderTypes.Regular}>
            Blog
        </DefaultLayout>
    ) 
}

export default Blog
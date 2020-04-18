import React from 'react'
import { CardGroup } from 'semantic-ui-react'
import BlogGidItem from './BlogGridItem'
import { blogs } from './BlogGridData'

const BlogGrid = ({ mobile = false }) => {
    return (
        <CardGroup centered itemsPerRow={2} style={{margin:'.5em'}}>
            {blogs.map((blog, index) => {
                return <BlogGidItem key={index} header={blog.title} description={blog.description} />
            })}
        </CardGroup>
    )
}

export default BlogGrid
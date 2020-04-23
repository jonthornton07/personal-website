import React from 'react'
import { Card } from 'semantic-ui-react'

const BlogGidItem = ({header, description}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default BlogGidItem
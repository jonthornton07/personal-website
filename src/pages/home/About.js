import React from 'react'
import { Segment, Card } from 'semantic-ui-react'

const aboutText = 
'I am currently a mobile developer for Cox Media Group. I have been doing native mobile development for about 5 years now. That includes Android and iOS, but my focus the last year or so has been in iOS. I enjoy doing both Android and iOS development and try to keep up with both.'+
'\n\nYou may be wondering if I do hybrid with my development. I tend to avoid any hybrid frameworks and cross compilers. While they have their place in the market I would prefer to focus on native (Swift, Objective-C and Java) development.'

const About = () => {
    return (
        <Segment basic style={{margin: '.5em'}}>
            <Card fluid >
                <Card.Content>
                    <Card.Header>About</Card.Header>
                    <Card.Content description={aboutText} />
                </Card.Content>
            </Card>
        </Segment>
    )
}

export default About
import React from 'react'
import {Container, Header, Image, Segment,} from 'semantic-ui-react'

const HomeHeader = ({mobile}) => {

    const logoImage = require("../../assets/lifebell.jpg");

    return (
        <Container text>
            <Header
                inverted
                as='h2'
                textAlign='center'
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '.5em' : '1em',
                }}>
                <Container>
                    <Image circular centered size='small' src={require('../../assets/profilePicture.png')}/>
                </Container>
                Jon Thornton
                <Header.Subheader>
                    Software Engineer | Leader | Father
                </Header.Subheader>
            </Header>
        </Container>
    )
}

export default HomeHeader
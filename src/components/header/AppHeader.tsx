import React, { Fragment } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { activePages, Pages } from "../../pages/pages"
import Tab from "../base/Tab"
import Banner from "./Banner"

interface Props {
    activePage: Pages
    isFixed?: boolean
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const TabWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const AppHeader: React.FC<Props> = ({activePage, isFixed = false}) => {
    return (
        <Container>
            <Banner>
                <TabWrapper>
                    {activePages.map(page => {
                        return(
                            <Tab 
                                key={page} 
                                active={activePage === page} 
                                page={page} />
                        )
                    })}
                </TabWrapper>
            </Banner>
        </Container>
        // <Header background="dark-1" pad="medium" height="xsmall">
        //     <Box direction="row" align="center" gap="small">
        //         <Nav direction="row">
        //             <Anchor href="/" style={navAnchorStyle(activePage === "Home")} a11yTitle="Navigate to home page">Home</Anchor>
        //             <Anchor href="/profile" style={navAnchorStyle(activePage === "Profile")} a11yTitle="Navigate to profile page">Profile</Anchor>
        //         </Nav>
        //     </Box>
        //     <Nav direction="row" gap="xsmall">
        //         <Linkedin color="white" size="medium" onClick={() => {window.open("https://www.linkedin.com/in/jthornton07")}}></Linkedin>
        //         <Github color="dark-1" size="20" style={{background: 'white', borderRadius: '2px', padding: '2px', height: '20px', width: '20px' }} onClick={() => {window.open("https://github.com/jonthornton07")}}></Github>
        //         <Twitter color="dark-1" size="20" style={{background: 'white', borderRadius: '2px', padding: '2px', height: '20px', width: '20px'}}  onClick={() => {window.open("https://twitter.com/jthornton07")}}></Twitter>
        //     </Nav>
        // </Header>
    )
};

export default AppHeader;

                /* <Menu.Item as={Link} to="/profile" active={activePage === "Resume"}>
                    Resume
                </Menu.Item>
                <Menu.Item as={Button} position="right">
                    <Icon.Group onClick={linkedInClickHandler} size="large">
                        <Icon name="linkedin"/>
                    </Icon.Group>
                    <Icon.Group onClick={githubClickHandler} size="large">
                        <Icon name="github square"/>
                    </Icon.Group>
                    <Icon.Group onClick={twitterClickHandler} size="large">
                        <Icon name="twitter square"/>
                    </Icon.Group>
                </Menu.Item> */
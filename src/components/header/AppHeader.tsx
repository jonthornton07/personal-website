import React from "react"
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
    )
};

export default AppHeader;
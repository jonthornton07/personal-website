import React from "react"
import styled from 'styled-components'
import { Pages } from "../../pages/pages"

interface AnchorProps {
    active: boolean
}

const Anchor = styled.a<AnchorProps>`
    color: white;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;    
    border-bottom: ${props => props.active ? "3px solid white" : "none"};
    text-decoration: none;
`

interface Props {
    page: Pages
    active: boolean
}

const Tab: React.FC<Props> = ({active, page}) => {
    return (
        <Anchor active={active} href={`/${page}`.toLocaleLowerCase()}>{`${page}`.toUpperCase()}</Anchor>
    )
}

export default Tab
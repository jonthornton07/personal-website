import React from "react"
import styled from 'styled-components'

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
`

interface Props {
    text: string
    active: boolean
}

const Tab: React.FC<Props> = ({active, text}) => {
    return (
        <Anchor active={active}>{text}</Anchor>
    )
}

export default Tab
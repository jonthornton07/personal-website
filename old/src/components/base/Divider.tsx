import React from "react"
import styled from 'styled-components'

const DividerText = styled.span`    
    color:"rgba(0,0,0,0.87)";
    font-weight: 700;
`

const Line = styled.div`
    color:"rgba(0,0,0,0.87)";
    margin-left: .9em;
    margin-right: .9em;
`

interface Props {
    text: string
}

const Divider: React.FC<Props> = ({text}) => {
    return (
        <div className="relative flex py-5 items-center">
            <Line className="flex-grow border-t"></Line>
            <DividerText className="flex-shrink mx-4 antialiased">PROJECTS</DividerText>
            <Line className="flex-grow border-t"></Line>
        </div>  
    )
}

export default Divider
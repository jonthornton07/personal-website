import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 1em;
    width: 100%;
    opacity: .87;
`

interface Props {
    children: JSX.Element
}

const Banner: React.FC<Props> = ({ children = undefined }) => {
    return (
        <StyledBanner>
            { children && children}
        </StyledBanner>
    )
}

export default Banner
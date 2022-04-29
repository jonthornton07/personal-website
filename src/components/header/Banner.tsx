import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 100%;
`

interface Props {
    children: JSX.Element
}

const Banner: React.FC<Props> = ({ children = undefined }) => {
    return (
        <StyledBanner className="bg-gradient-to-r from-neutral-800 to-neutral-900">
            { children && children}
        </StyledBanner>
    )
}

export default Banner
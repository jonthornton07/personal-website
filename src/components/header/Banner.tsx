import React from "react";

interface Props {
    children: JSX.Element
}

const Banner: React.FC<Props> = ({ children = undefined }) => {
    return (
        <div className="banner bg-gradient-to-r from-neutral-800 to-neutral-900">
            { children && children}
        </div>
    )
}

export default Banner
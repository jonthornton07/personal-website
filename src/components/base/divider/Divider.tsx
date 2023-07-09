import React from "react"

interface Props {
    text: string
}

const Divider: React.FC<Props> = ({text}) => {
    return (
        <div className="relative flex py-5 items-center">
            <span className="divider-line flex-grow border-t"></span>
            <span className="divider-text flex-shrink mx-4 antialiased">PROJECTS</span>
            <span className="divider-line flex-grow border-t"></span>
        </div>  
    )
}

export default Divider
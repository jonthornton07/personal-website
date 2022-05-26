import React from "react"
import styles from "./styles.css"


interface Props {
    text: string
}

export const links = () => [{ rel: "stylesheet", href: styles }];

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
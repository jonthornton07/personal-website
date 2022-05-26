import React from "react"
import styles from "./styles.css"

interface Props {
    active: boolean
    text: String
    link: String
}

export const links = () => [{ rel: "stylesheet", href: styles }];

const Tab: React.FC<Props> = ({active, text, link}) => {
    const classNameSuffix = active ? "selected" : ""

    return (
        <a className={"tab " + classNameSuffix}
            href={`${link}`.toLocaleLowerCase()}>{`${text}`.toUpperCase()}</a>
    )
}

export default Tab
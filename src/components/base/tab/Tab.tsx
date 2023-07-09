import React from "react"

interface Props {
    active: boolean
    text: String
    link: String
}

const Tab: React.FC<Props> = ({active, text, link}) => {
    const classNameSuffix = active ? "selected" : ""

    return (
        <a className={"tab " + classNameSuffix}
            href={`${link}`.toLocaleLowerCase()}>{`${text}`.toUpperCase()}</a>
    )
}

export default Tab
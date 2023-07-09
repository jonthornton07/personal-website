import React from "react"

interface Props {
    active: boolean
    text: String
    link: String
}

const Tab: React.FC<Props> = ({active, text, link}) => {
    const classNameSuffix = active ? " selected" : ""
    const className = "tab" + classNameSuffix

    return (
        <div className={className}>
            <a href={`${link}`.toLocaleLowerCase()}>{`${text}`.toUpperCase()}</a>
        </div>
    )
}

export default Tab
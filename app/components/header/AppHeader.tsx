import React from "react"
import { activePages, Routes } from "~/routes/routes"
import Tab, {links as tabLinks } from "../base/tab/Tab"
import Banner from "./Banner"
import styles from "./styles.css"

interface Props {
    activePage: Routes
    isFixed?: boolean
}

export const links = () => [
    ...tabLinks(),
    { rel: "stylesheet", href: styles }
];

const AppHeader: React.FC<Props> = ({activePage, isFixed = false}) => {
    return (
        <Banner>
            <div className="tabWrapper">
                {activePages.map(page => {
                    return(
                        <Tab 
                            key={page} 
                            active={activePage === page} 
                            link={page.toLowerCase()}
                            text={page.toUpperCase()} />
                    )
                })}
            </div>
        </Banner>
    )
};

export default AppHeader;
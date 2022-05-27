import React from "react"
import type { Page } from "~/routes/pages";
import { activePages } from "~/routes/pages"
import Tab, {links as tabLinks } from "../base/tab/Tab"
import Banner from "./Banner"
import styles from "./styles.css"

interface Props {
    activePage: Page
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
                    console.log(page)
                    return(
                        <Tab 
                            key={page.name} 
                            active={activePage === page} 
                            link={page.route.toLowerCase()}
                            text={page.name.toUpperCase()} />
                    )
                })}
            </div>
        </Banner>
    )
};

export default AppHeader;
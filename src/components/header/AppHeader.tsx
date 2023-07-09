import React from "react"
import type { Page } from "@/enums/pages";
import { activePages } from "@/enums/pages"
import Tab, {links as tabLinks } from "@/components/base/tab/Tab"
import Banner from "./Banner"
import styles from './styles.module.css'

interface Props {
    activePage: Page
    isFixed?: boolean
}

const AppHeader: React.FC<Props> = ({activePage, isFixed = false}) => {
    return (
        <Banner>
            <div className={styles.tabWrapper}>
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
import React from "react"
import type { Page } from "@/enums/pages";
import { activePages } from "@/enums/pages"
import Tab from "@/components/base/tab/Tab"
import Banner from "./Banner"

interface Props {
    activePage: Page
    isFixed?: boolean
}

const AppHeader: React.FC<Props> = ({activePage}) => {
    return (
        <Banner>
            <div className="flex">
                {activePages.map(page => {
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
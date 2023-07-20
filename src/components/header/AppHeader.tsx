import React from "react"
import type { Page } from "@/enums/pages";
import { activePages } from "@/enums/pages"
import Tab from "@/components/base/tab/Tab"
import Banner from "./Banner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


interface Props {
    activePage: Page
    isFixed?: boolean
}

const AppHeader: React.FC<Props> = ({activePage}) => {
    return (
        <Banner>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex place-content-center">
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
                <div className="flex flex-row-reverse place-content-center">
                    <FontAwesomeIcon icon={faTwitter} size="xl" className="self-center ml-5" color="white" onClick={
                        () => window.open("https://twitter.com/jthornton07", "_blank", "noreferrer")
                    }/>
                    <FontAwesomeIcon icon={faGithub} size="xl" className="self-center ml-5" color="white" onClick={
                        () => window.open("https://github.com/jonthornton07", "_blank", "noreferrer")
                    }/>
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl" className="self-center ml-5" color="white" onClick={
                        () => window.open("https://www.linkedin.com/in/jthornton07/", "_blank", "noreferrer")
                    }/>
                </div>
            </div>
        </Banner>
    )
};

export default AppHeader;
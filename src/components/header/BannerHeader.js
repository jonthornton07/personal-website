import React, {useState} from "react";
import AppHeader from "./AppHeader";
import {Responsive, Visibility} from "semantic-ui-react";

const BannerHeader = ({activePage, children}) => {
    const [isHeaderFixed, setHeaderFixed] = useState(false);

    const handleOnUpdate = (data) => {
        setHeaderFixed(data.width < Responsive.onlyMobile.maxWidth);
    };

    return (
        <Responsive fireOnMount onUpdate={(_, data) => handleOnUpdate(data)}>
            <Visibility
                once={false}
                onBottomPassed={() => setHeaderFixed(true)}
                onBottomPassedReverse={() => setHeaderFixed(true)}
            >
                <AppHeader activePage={activePage} isFixed={isHeaderFixed}/>
                {children}
            </Visibility>
        </Responsive>
    );
};

export default BannerHeader;

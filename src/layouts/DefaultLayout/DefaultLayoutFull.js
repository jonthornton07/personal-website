import React from "react";
import BannerHeader from "../../components/header/BannerHeader";
import {Responsive, Segment} from "semantic-ui-react";
import AppHeader from "../../components/header/AppHeader";
import {getWidth} from "../LayoutUtils";

export const HeaderTypes = {
    Banner: "banner",
    Regular: "regular",
    None: "none",
};

const DefaultLayoutFull = ({
   activePage,
   headerType,
   headerChildren,
   children,
}) => {
    const useBannerHeader = headerType === HeaderTypes.Banner;
    const useRegularHeader = headerType === HeaderTypes.Regular;

    return (
        <Responsive getWidth={getWidth}>
            <Segment basic inverted>
                {useBannerHeader && (
                    <BannerHeader activePage={activePage} children={headerChildren}/>
                )}
                {useRegularHeader && (
                    <AppHeader activePage={activePage} children={headerChildren}/>
                )}
            </Segment>
            {children}
        </Responsive>
    );
};

export default DefaultLayoutFull;

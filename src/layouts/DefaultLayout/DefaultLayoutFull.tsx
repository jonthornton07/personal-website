import React from "react";
import BannerHeader from "../../components/header/BannerHeader";
// import {Segment} from "semantic-ui-react";
import AppHeader from "../../components/header/AppHeader";
import {DefaultLayoutParams, getWidth} from "../LayoutUtils";
import { HeaderTypes } from "../../components/header/HeaderTypes";

const DefaultLayoutFull: React.FC<DefaultLayoutParams> = ({
   activePage,
   headerType,
   headerChildren,
   children,
}) => {
    const useBannerHeader = headerType === HeaderTypes.Banner;
    const useRegularHeader = headerType === HeaderTypes.Regular;

    return (
        <AppHeader activePage={activePage}>

        </AppHeader>
        // <>

        //     {useBannerHeader && (
        //         <BannerHeader activePage={activePage} children={headerChildren}/>
        //     )}
        //     {useRegularHeader && (
        //         <AppHeader activePage={activePage} children={headerChildren}/>
        //     )}
        // </>
        // <Segment getWidth={getWidth}>
        //     <Segment basic inverted>
        //         {useBannerHeader && (
        //             <BannerHeader activePage={activePage} children={headerChildren}/>
        //         )}
        //         {useRegularHeader && (
        //             <AppHeader activePage={activePage} children={headerChildren}/>
        //         )}
        //     </Segment>
        //     {children}
        // </Segment>
    );
};

export default DefaultLayoutFull;

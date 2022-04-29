import React, { Component } from "react";
import BannerHeader from "../components/header/BannerHeader";
import AppHeader from "../components/header/AppHeader";
import { HeaderTypes } from "../components/header/HeaderTypes";
import { DefaultLayoutParams } from "./LayoutUtils";

const getWidth = () => {
    const isSSR = typeof window === "undefined";
    return isSSR ? 768 : window.innerWidth;
};

const DefaultLayout: React.FC<DefaultLayoutParams> = ({
   activePage,
   headerType = "Regular",
   children
}) => {
    const useBannerHeader = headerType === HeaderTypes.Banner;
    const useRegularHeader = headerType === HeaderTypes.Regular;

    return (
        <>
            <AppHeader activePage={activePage}>
            </AppHeader>
            {children}
        </>
        // <Component>
        //     {useBannerHeader && (
        //         <BannerHeader activePage={activePage} children={headerChildren}/>
        //     )}
        //     {useRegularHeader && (
        //         <AppHeader activePage={activePage} children={headerChildren}/>
        //     )}
        // </Component>
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

export default DefaultLayout;

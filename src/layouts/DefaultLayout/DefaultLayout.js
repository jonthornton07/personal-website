import React from "react";
import DefaultLayoutFull from "./DefaultLayoutFull";

export const HeaderTypes = {
    Banner: "banner",
    Regular: "regular",
    None: "none",
};

const DefaultLayout = ({
   activePage,
   headerType = HeaderTypes.Regular,
   headerChildren = null,
   children,
}) => {
    return <DefaultLayoutFull activePage headerType headerChildren children/>;
};

export default DefaultLayout;

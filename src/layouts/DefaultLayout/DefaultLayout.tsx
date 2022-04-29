import React from "react";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import { DefaultLayoutParams } from "../LayoutUtils";
import DefaultLayoutFull from "./DefaultLayoutFull";

const DefaultLayout: React.FC<DefaultLayoutParams> = ({
   activePage,
   headerType = HeaderTypes.Regular,
   children,
}) => {
    return (
        <DefaultLayoutFull activePage={activePage} headerType={headerType}>
            {children}
        </DefaultLayoutFull> 
    )
};

export default DefaultLayout;

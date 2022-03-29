import React from "react";
import { HeaderTypes } from "../../components/header/HeaderTypes";
import { DefaultLayoutParams } from "../LayoutUtils";
import DefaultLayoutFull from "./DefaultLayoutFull";

const DefaultLayout: React.FC<DefaultLayoutParams> = ({
   activePage,
   headerType = HeaderTypes.Regular,
   headerChildren,
   children = undefined,
}) => {
    return <DefaultLayoutFull activePage={activePage} headerType={headerType} headerChildren={headerChildren} children={children} />;
};

export default DefaultLayout;

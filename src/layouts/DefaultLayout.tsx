import React from "react";
import AppHeader from "../components/header/AppHeader";
import { DefaultLayoutParams } from "./LayoutUtils";

const DefaultLayout: React.FC<DefaultLayoutParams> = ({
   activePage,
   headerType = "Regular",
   children
}) => {

    return (
        <>
            <AppHeader activePage={activePage}>
            </AppHeader>
            {children}
        </>
    );
};

export default DefaultLayout;

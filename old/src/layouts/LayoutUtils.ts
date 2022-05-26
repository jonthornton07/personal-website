import { HeaderTypes } from "../components/header/HeaderTypes"
import { useMediaQuery } from "react-responsive"
import { Routes } from "../../../app/routes/routes"

export interface DefaultLayoutParams {
    activePage: Routes
    headerType: HeaderTypes
    children: JSX.Element
}

export const getWidth = () => {
    const isSSR = typeof window === "undefined";
    return isSSR ? 756: window.innerWidth;
};

export const useIsMobileDevice = () => useMediaQuery({
    query: "(min-device-width: 480px)",
})


import { HeaderTypes } from "../components/header/HeaderTypes"
import { useMediaQuery } from "react-responsive"
import { Pages } from "../pages/pages"

export interface DefaultLayoutParams {
    activePage: Pages
    headerType: HeaderTypes
    headerChildren?: JSX.Element
    children?: JSX.Element
}

export const getWidth = () => {
    const isSSR = typeof window === "undefined";
    return isSSR ? 756: window.innerWidth;
};

export const useIsMobileDevice = () => useMediaQuery({
    query: "(min-device-width: 480px)",
})


import React from "react";
import BannerHeader from "../components/header/BannerHeader";
import { Responsive, Segment } from "semantic-ui-react";
import AppHeader from "../components/header/AppHeader";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export const HeaderTypes = {
  Banner: "banner",
  Regular: "regular",
  None: "none",
};

const DefaultLayout = ({
  activePage,
  headerType = "Regular",
  headerChildren = null,
  children,
}) => {
  const useBannerHeader = headerType === HeaderTypes.Banner;
  const useRegularHeader = headerType === HeaderTypes.Regular;

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Segment basic inverted>
        {useBannerHeader && (
          <BannerHeader activePage={activePage} children={headerChildren} />
        )}
        {useRegularHeader && (
          <AppHeader activePage={activePage} children={headerChildren} />
        )}
      </Segment>
      {children}
    </Responsive>
  );
};

export default DefaultLayout;

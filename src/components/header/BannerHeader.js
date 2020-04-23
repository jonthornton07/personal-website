import React, { useState } from "react";
import AppHeader from "./AppHeader";
import { Visibility } from "semantic-ui-react";

const BannerHeader = ({ activePage, children }) => {
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  return (
    <Visibility
      once={false}
      onBottomPassed={() => setHeaderFixed(true)}
      onBottomPassedReverse={() => setHeaderFixed(true)}
    >
      <AppHeader activePage={activePage} isFixed={isHeaderFixed} />
      {children}
    </Visibility>
  );
};

export default BannerHeader;

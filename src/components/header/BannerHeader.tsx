import React, {useState} from "react";
import AppHeader from "./AppHeader";
// import {Segment, Visibility} from "semantic-ui-react";

interface Props {
    activePage: String
    children: JSX.Element | undefined
}

const BannerHeader: React.FC<Props> = ({activePage, children}) => {
    const [isHeaderFixed, setHeaderFixed] = useState(false);


    return (
        <></>
        // <Segment>
        //     <Visibility
        //         once={false}
        //         onBottomPassed={() => setHeaderFixed(true)}
        //         onBottomPassedReverse={() => setHeaderFixed(true)}
        //     >
        //         <AppHeader activePage={activePage} isFixed={isHeaderFixed}/>
        //         {children}
        //     </Visibility>
        // </Segment>
    );
};

export default BannerHeader;

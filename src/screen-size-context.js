// @flow
import * as React from 'react';

export type ScreenSizeContextType = {
    isMobile: boolean,
    isTablet: boolean,
    isTabletOrBigger: boolean,
    isTabletOrSmaller: boolean,
};

const ScreenSizeContext: React.Context<ScreenSizeContextType> = React.createContext({
    isMobile: false,
    isTablet: false,
    isTabletOrBigger: false,
    isTabletOrSmaller: false,
});

export default ScreenSizeContext;

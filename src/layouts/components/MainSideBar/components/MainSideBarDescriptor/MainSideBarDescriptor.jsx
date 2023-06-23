import React from 'react';

import './style/MainSideBarDescriptor.scss';

const MainSideBarDescriptor = ({showDescription, children}) => {
    if (!showDescription) {
        return null;
    }

    return (
        <span className="main-side-bar-descriptor">
            {children}
        </span>
    )
}

export default MainSideBarDescriptor;
import React from 'react';
import Page from '../Page';
import LoadingIndicator from '../LoadingIndicator';
const LoadingPage = () => {
    return (React.createElement(Page, null,
        React.createElement(LoadingIndicator, null)));
};
export default LoadingPage;

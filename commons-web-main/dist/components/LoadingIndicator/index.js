import React from "react";
import Circle from "./Circle";
import Wrapper from "./Wrapper";
const LoadingIndicator = (props) => (React.createElement(Wrapper, { style: props.style },
    React.createElement(Circle, { color: props.color }),
    React.createElement(Circle, { rotate: 30, delay: -1.1, color: props.color }),
    React.createElement(Circle, { rotate: 60, delay: -1, color: props.color }),
    React.createElement(Circle, { rotate: 90, delay: -0.9, color: props.color }),
    React.createElement(Circle, { rotate: 120, delay: -0.8, color: props.color }),
    React.createElement(Circle, { rotate: 150, delay: -0.7, color: props.color }),
    React.createElement(Circle, { rotate: 180, delay: -0.6, color: props.color }),
    React.createElement(Circle, { rotate: 210, delay: -0.5, color: props.color }),
    React.createElement(Circle, { rotate: 240, delay: -0.4, color: props.color }),
    React.createElement(Circle, { rotate: 270, delay: -0.3, color: props.color }),
    React.createElement(Circle, { rotate: 300, delay: -0.2, color: props.color }),
    React.createElement(Circle, { rotate: 330, delay: -0.1, color: props.color })));
export default LoadingIndicator;

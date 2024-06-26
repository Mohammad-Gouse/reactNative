var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import styled from "styled-components";
import { Images, Input } from "listertech-commons-web";
const Container = styled.div `
  flex: 1;
  position: relative;
`;
const CloseIcon = styled.img `
  width: 24px;
  height: 24px;
  padding: 4px;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
const InputClearable = (props) => {
    const { containerStyle, value, onChange, onSettled, onClear } = props, other = __rest(props, ["containerStyle", "value", "onChange", "onSettled", "onClear"]);
    const [timeoutId, setTimeoutId] = useState(0);
    const showClear = Boolean(value);
    const handleSettleTimeout = (timeoutMillis = 700) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutId(setTimeout(onSettled, timeoutMillis));
    };
    const handleChange = (ev) => {
        handleSettleTimeout();
        onChange(ev);
    };
    const handleClear = (ev) => {
        handleSettleTimeout(200);
        onClear(ev);
    };
    return (React.createElement(Container, null,
        React.createElement(Input, Object.assign({ containerStyle: containerStyle, value: value, onChange: handleChange, style: showClear ? { paddingRight: "42px" } : undefined }, other)),
        showClear ? (React.createElement(CloseIcon, { src: Images.close, onClick: handleClear })) : null));
};
export default InputClearable;

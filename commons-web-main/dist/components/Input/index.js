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
import React from 'react';
import styled from 'styled-components';
import H4 from '../H4';
import PromptText from '../PromptText';
import Container from '../Input/Container';
import styles from '../Input/styles';
const StyledInput = styled.input(styles);
/* type Props = {
  label: string,
  isError?: boolean,
  error?: string,
  disabled?: boolean,
  containerStyle?: Object,
};*/
const Input = (props) => {
    let { label, error, containerStyle } = props, other = __rest(props, ["label", "error", "containerStyle"]);
    return (React.createElement(Container, { style: containerStyle },
        label ? React.createElement(H4, null, label) : null,
        React.createElement(StyledInput, Object.assign({}, other)),
        error ? React.createElement(PromptText, null, error) : null));
};
export default Input;

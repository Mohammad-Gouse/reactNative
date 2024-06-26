import React from 'react';
import styled from 'styled-components';
import H4 from '../H4';
import PromptText from '../PromptText';
import Container from '../Input/Container';
import styles from '../Input/styles';
const StyledInput = styled.select(styles);
const Dropdown = (props) => {
    let { label, error, value, name, isError, onChange, disabled } = props;
    if (!value)
        value = 'null';
    return (React.createElement(Container, null,
        label ? React.createElement(H4, null, label) : null,
        React.createElement(StyledInput, { as: "select", value: value, name: name, onChange: onChange, isError: isError, disabled: disabled },
            React.createElement("option", { value: "null", disabled: true }, "Choose"),
            props.options.map(o => (React.createElement("option", { value: o, key: o }, o)))),
        error ? React.createElement(PromptText, null, error) : null));
};
export default Dropdown;

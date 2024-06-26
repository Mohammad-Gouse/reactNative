import React from 'react';
import CurrencyInput from 'react-currency-input';
import H4 from '../H4';
import PromptText from '../PromptText';
import Container from '../Input/Container';
import styles from '../Input/styles';
const InputCurrency = (props) => {
    let handleOnChangeEvent = (_, __, float) => {
        props.onValueChange(float);
    };
    let { label, error } = props;
    return (React.createElement(Container, null,
        label ? React.createElement(H4, null, label) : null,
        React.createElement(CurrencyInput, { prefix: "$", value: props.value, onChangeEvent: handleOnChangeEvent, style: styles(props), precision: "0" }),
        error ? React.createElement(PromptText, null, error) : null));
};
export default InputCurrency;

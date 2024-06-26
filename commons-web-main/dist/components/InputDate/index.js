import React from 'react';
import DatePicker from 'react-datepicker';
import Container from '../Input/Container';
import styles from '../Input/styles';
import H4 from '../H4';
import PromptText from '../PromptText';
import 'react-datepicker/dist/react-datepicker.css';
const InputDate = (props) => {
    let { label, value, error, format, minDate, maxDate, selectYearMonth, } = props;
    return (React.createElement(Container, null,
        label ? React.createElement(H4, null, label) : null,
        React.createElement(DatePicker, { selected: value, onChange: date => props.onDateChange(date), dateFormat: format ? format : 'MM/dd/yyyy', minDate: minDate, maxDate: maxDate, customInput: React.createElement("input", { style: styles(props) }), showMonthDropdown: selectYearMonth, showYearDropdown: selectYearMonth, dropdownMode: selectYearMonth ? 'select' : undefined }),
        error ? React.createElement(PromptText, null, error) : null));
};
export default InputDate;

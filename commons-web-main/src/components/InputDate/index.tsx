import React from 'react';
import DatePicker from 'react-datepicker';
import Container from '../Input/Container';
import styles from '../Input/styles';
import H4 from '../H4';
import PromptText from '../PromptText';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  label: string,
  value: Date | null | undefined,
  isError: boolean,
  error: string,
  format?: string,
  minDate?: Date,
  maxDate?: Date,
  onDateChange: (d: Date | [Date | null, Date | null] | null) => void,
  selectYearMonth?: boolean,
};

const InputDate = (props: Props) => {
  let {
    label,
    value,
    error,
    format,
    minDate,
    maxDate,
    selectYearMonth,
  } = props;
  return (
    <Container>
      {label ? <H4>{label}</H4> : null}
      <DatePicker
        selected={value}
        onChange={date => props.onDateChange(date)}
        dateFormat={format ? format : 'MM/dd/yyyy'}
        minDate={minDate}
        maxDate={maxDate}
        customInput={<input style={styles(props)} />}
        showMonthDropdown={selectYearMonth}
        showYearDropdown={selectYearMonth}
        dropdownMode={selectYearMonth ? 'select' : undefined}
      />
      {error ? <PromptText>{error}</PromptText> : null}
    </Container>
  );
};

export default InputDate;

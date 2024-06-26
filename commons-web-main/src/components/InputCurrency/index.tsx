import React from 'react';
import CurrencyInput from 'react-currency-input';
import H4 from '../H4';
import PromptText from '../PromptText';
import Container from '../Input/Container';
import styles from '../Input/styles';

type Props = {
  value: number,
  label: string,
  isError: boolean,
  error: string,
  onValueChange: (val: number) => void,
};

const InputCurrency = (props: Props) => {
  let handleOnChangeEvent = (_: any, __: any, float: number) => {
    props.onValueChange(float);
  };
  let { label, error } = props;
  return (
    <Container>
      {label ? <H4>{label}</H4> : null}
      <CurrencyInput
        prefix="$"
        value={props.value}
        onChangeEvent={handleOnChangeEvent}
        style={styles(props)}
        precision="0"
      />
      {error ? <PromptText>{error}</PromptText> : null}
    </Container>
  );
};

export default InputCurrency;

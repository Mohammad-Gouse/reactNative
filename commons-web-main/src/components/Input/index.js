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
  let { label, error, containerStyle, ...other } = props;
  return (
    <Container style={containerStyle}>
      {label ? <H4>{label}</H4> : null}
      <StyledInput {...other} />
      {error ? <PromptText>{error}</PromptText> : null}
    </Container>
  );
};

export default Input;

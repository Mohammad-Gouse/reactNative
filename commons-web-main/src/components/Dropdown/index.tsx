import React from 'react';
import styled from 'styled-components';
import H4 from '../H4';
import PromptText from '../PromptText';
import Container from '../Input/Container';
import styles from '../Input/styles';

const StyledInput = styled.select(styles);

type Props = {
  label: string,
  isError: boolean,
  error: string,
  options: string[],
  name: string,
  value: string | null | undefined,
  onChange: React.ChangeEventHandler,
  disabled?: boolean,
};

const Dropdown = (props: Props) => {
  let { label, error, value, name, isError, onChange, disabled } = props;
  if (!value) value = 'null';
  return (
    <Container>
      {label ? <H4>{label}</H4> : null}
      <StyledInput
        as="select"
        value={value}
        name={name}
        onChange={onChange}
        isError={isError}
        disabled={disabled}
      >
        <option value="null" disabled>
          Choose
        </option>
        {props.options.map(o => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </StyledInput>
      {error ? <PromptText>{error}</PromptText> : null}
    </Container>
  );
};

export default Dropdown;

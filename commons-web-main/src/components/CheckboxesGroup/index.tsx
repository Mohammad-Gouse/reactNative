import React from 'react';
import styled from 'styled-components';

export type Option = {
  label: string,
  value: string
}

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }
`;

interface BoxProps {
  active?: boolean
}

const Box = styled.div<BoxProps>`
  margin-right: 10px;
  width: 17px;
  height: 17px;
  border-radius: 9px;
  border: 5px solid;
  border-color: ${({ active }) => active ? '#5FB894' : '#f2f2f2'};
`;

type Props = {
  onChange: Function,
  options: Option[],
  values: string[]
}

const CheckboxesGroup = (props: Props) => {
  const handleChange = (value: string) => {
    const copy = [...props.values];
    const index = copy.indexOf(value);

    if (index !== -1) {
      copy.splice(index, 1);
    } else {
      copy.push(value);
    }

    props.onChange(copy);
  }

  return (
    <Wrapper>
      {props.options.map(option => (
        <CheckboxContainer onClick={() => handleChange(option.value)}>
          <Box active={props.values.includes(option.value)} />
          {option.label}
        </CheckboxContainer>
      ))}
    </Wrapper>
  )
}

export default CheckboxesGroup;

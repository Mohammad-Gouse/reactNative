import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div `
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;
const CheckboxContainer = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }
`;
const Box = styled.div `
  margin-right: 10px;
  width: 17px;
  height: 17px;
  border-radius: 9px;
  border: 5px solid;
  border-color: ${({ active }) => active ? '#5FB894' : '#f2f2f2'};
`;
const CheckboxesGroup = (props) => {
    const handleChange = (value) => {
        const copy = [...props.values];
        const index = copy.indexOf(value);
        if (index !== -1) {
            copy.splice(index, 1);
        }
        else {
            copy.push(value);
        }
        props.onChange(copy);
    };
    return (React.createElement(Wrapper, null, props.options.map(option => (React.createElement(CheckboxContainer, { onClick: () => handleChange(option.value) },
        React.createElement(Box, { active: props.values.includes(option.value) }),
        option.label)))));
};
export default CheckboxesGroup;

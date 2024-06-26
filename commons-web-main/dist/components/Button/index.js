import React from 'react';
import styled from 'styled-components';
import LoadingIndicator from '../LoadingIndicator';
;
const Styled = styled.button `
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#5FB894'};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: ${props => (props.theme === 'light' ? '#879399' : 'white')};
  margin-top: ${({ noMargin }) => noMargin ? '0px' : '30px'};
  border: ${props => (props.theme === 'light' ? '1px solid #DBE3E7' : '0px')};
  outline: none !important;
  outline-offset: none !important;
  &:hover {
    background-color: ${props => (props.theme === 'light' ? '#DBE3E744' : '#5FB89499')}
  }
`;
const StyledButton = styled(Styled) `
  cursor: pointer;
`;
const Button = (props) => {
    if (props.loading) {
        return (React.createElement(Styled, { as: "div", theme: props.theme, style: Object.assign({ paddingTop: 5 }, props.style), noMargin: props.noMargin },
            React.createElement(LoadingIndicator, { color: props.theme === "light" ? undefined : "#FFFFFF" })));
    }
    else {
        return (React.createElement(StyledButton, { type: 'button', theme: props.theme, style: props.style, onClick: props.onClick, noMargin: props.noMargin }, props.children));
    }
};
export default Button;

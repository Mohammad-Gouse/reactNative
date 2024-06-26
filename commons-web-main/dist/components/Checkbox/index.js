import React from "react";
import styled from "styled-components";
import { Images } from "listertech-commons-web";
const Container = styled.div `
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Label = styled.span `
  display: inline-block;
  margin: 0 0 0 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #354148;
`;
const Icon = styled.img `
  border: ${({ checked }) => (checked ? "1px solid #FFFFFF" : "none")};
`;
const Checkbox = (props) => {
    const { label, checked, disabled, onCheckedChange, style } = props;
    return (React.createElement(Container, { onClick: !disabled ? () => onCheckedChange(!checked) : undefined, style: style },
        React.createElement(Icon, { src: checked ? Images.checkboxOn : Images.checkboxOff, checked: checked, style: disabled ? { opacity: 0.4 } : {} }),
        React.createElement(Label, null, label)));
};
export default Checkbox;

import React from "react";
import styled from "styled-components";
import { Images } from "listertech-commons-web";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.span`
  display: inline-block;
  margin: 0 0 0 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #354148;
`;

const Icon = styled.img<IconProps>`
  border: ${({ checked }) => (checked ? "1px solid #FFFFFF" : "none")};
`;

interface IconProps {
  checked: boolean;
}

interface Props {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: Function;
  style: Object;
}

const Checkbox = (props: Props) => {
  const { label, checked, disabled, onCheckedChange, style } = props;
  return (
    <Container
      onClick={!disabled ? () => onCheckedChange(!checked) : undefined}
      style={style}
    >
      <Icon
        src={checked ? Images.checkboxOn : Images.checkboxOff}
        checked={checked}
        style={disabled ? { opacity: 0.4 } : {}}
      />
      <Label>{label}</Label>
    </Container>
  );
};

export default Checkbox;

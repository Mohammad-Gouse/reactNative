import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  green?: boolean;
  red?: boolean;
  orange?: boolean;
  children?: ReactNode;
  icon?: string | undefined;
  onClick?: React.MouseEventHandler;
  style?: Object,
  iconStyle?: Object,
}

const Btn = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 73px;
  border-radius: 24px;
  background-color: white;
  color: #879399;
  ${({ green }) => (green ? "color: #5FB894;" : "")}
  ${({ red }) => (red ? "color: #EF7171;" : "")}
  ${({ orange }) => (orange ? "color: #FDB16A;" : "")}
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  border: 1px solid #dbe3e7;
  ${({ green }) => (green ? "border: 1px solid #5FB894;" : "")}
  ${({ red }) => (red ? "border: 1px solid #EF7171;" : "")}
  ${({ orange }) => (orange ? "border: 1px solid #FDB16A;" : "")}
  margin-right: 10px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background-color: #dbe3e744;
    ${({ green }) => (green ? "background-color: #5FB89444;" : "")}
    ${({ red }) => (red ? "background-color: #EF717144;" : "")}
    ${({ orange }) => (orange ? "background-color: #FDB16A44;" : "")}
  }
`;

const Img = styled.img`
  margin-right: 5px;
  width: 14px;
  height: 14px;
`;

const ActionButton: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = (props: Props) => {
  const { children, icon, green, red, orange, onClick, style, iconStyle } = props;
  return (
    <Btn green={green} red={red} orange={orange} onClick={onClick} style={style}>
      {icon && <Img src={icon} style={iconStyle} />}
      {children}
    </Btn>
  );
};

export default ActionButton;

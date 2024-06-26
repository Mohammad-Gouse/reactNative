import React, { ReactNode } from 'react';
import styled from "styled-components";

interface Props {
  round?: boolean;
  green?: boolean;
  red?: boolean;
  orange?: boolean;
  children: ReactNode;
  icon?: string | undefined;
  onClick?: React.MouseEventHandler;
}

const Btn = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    ${({ round }) => (round ? "width: 30px;" : "")}
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    margin-right: 10px;
    color: #879399;
    ${({ green }) => (green ? "color: #5FB894;" : "")}
    ${({ red }) => (red ? "color: #EF7171;" : "")}
    ${({ orange }) => (orange ? "color: #FDB16A;" : "")}
    background-color: #FFFFFF;
    border: 1px solid #DBE3E7;
    ${({ green }) => (green ? "border: 1px solid #5FB894;" : "")}
    ${({ red }) => (red ? "border: 1px solid #EF7171;" : "")}
    ${({ orange }) => (orange ? "border: 1px solid #FDB16A;" : "")}
    border-radius: 30px;
    box-sizing: border-box;
    outline: none !important;
    outline-offset: none !important;
    cursor: pointer;
    ${({ round }) => (!round ? "padding-left: 16px;" : "")}
    ${({ round }) => (!round ? "padding-right: 16px;" : "")}

    &:hover {
      background-color: #DBE3E744;
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

const MenuOptionButton = (props: Props) => {
  const { children, icon, green, red, orange, onClick, round } = props;
  return (
    <Btn green={green} red={red} orange={orange} onClick={onClick} round={round}>
      {icon && <Img src={icon} />}
      {children}
    </Btn>
  );
};

export default MenuOptionButton;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

interface Props {
  label: string;
  icon: string;
  style?: Object;
}

const IconText = (props: Props) => {
  const { label, icon, style } = props;
  return (
    <Container style={style}>
      <img src={icon} />
      <Label>{label}</Label>
    </Container>
  );
};

export default IconText;

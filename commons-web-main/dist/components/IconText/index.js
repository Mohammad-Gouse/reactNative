import React from "react";
import styled from "styled-components";
const Container = styled.div `
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
const IconText = (props) => {
    const { label, icon, style } = props;
    return (React.createElement(Container, { style: style },
        React.createElement("img", { src: icon }),
        React.createElement(Label, null, label)));
};
export default IconText;

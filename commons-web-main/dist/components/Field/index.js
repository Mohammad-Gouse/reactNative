import React from 'react';
import styled from 'styled-components';
import H4 from '../H4';
import Container from '../Input/Container';
const Field = (props) => {
    let { label, value } = props;
    return (React.createElement(Container, null,
        React.createElement(Subtitle, null, label),
        React.createElement(ValueLabel, null, value)));
};
const Subtitle = styled(H4) `
  margin-bottom: 4px;
`;
const ValueLabel = styled.h3 `
  margin: 0;
  color: #354148;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
`;
export default Field;

import React from 'react';
import styled from 'styled-components';
import H6 from '../H6';
import H3 from '../H3';
const Container = styled.div `
  ${({ background }) => background
    ? `background-color: ${background};`
    : 'background-color: #F7F8F8;'}
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  h6 {
    margin: 0;
  }

  h3 {
    margin-bottom: 0;
    margin-top: 10px;
    line-height: 36px;
    height: auto;
    color: #5fb894;
    font-weight: bold;
  }
`;
const Subtitle = styled.p `
  font-size: 12px;
  line-height: 15px;
  color: #879399;
  margin-top: 0;
  margin-bottom: 2px;
  font-family: Montserrat;
`;
const DashboardOverviewItem = (props) => (React.createElement(Container, { background: props.background },
    React.createElement(Subtitle, null, props.subtitle),
    React.createElement(H6, null, props.title),
    React.createElement(H3, null, props.value)));
export default DashboardOverviewItem;

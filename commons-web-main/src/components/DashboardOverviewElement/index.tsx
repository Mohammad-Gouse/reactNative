import React from 'react';
import styled from 'styled-components';

import H6 from '../H6';
import H3 from '../H3';

type Props = {
  title: string,
  subtitle: string,
  value: string,
  background: string,
};

interface ContainerProps {
  background?: string
}

const Container = styled.div<ContainerProps>`
  ${({ background }) =>
    background
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

const Subtitle = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #879399;
  margin-top: 0;
  margin-bottom: 2px;
  font-family: Montserrat;
`;

const DashboardOverviewItem = (props: Props) => (
  <Container background={props.background}>
    <Subtitle>{props.subtitle}</Subtitle>
    <H6>{props.title}</H6>
    <H3>{props.value}</H3>
  </Container>
);

export default DashboardOverviewItem;

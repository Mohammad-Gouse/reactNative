import React from 'react';
import styled from 'styled-components';
import {MenuOptionButton, H5} from 'listertech-commons-web';

type Props = {
  title: string;
  subtitle: string;
  onButtonClick: () => void,
}

const TableHeader = (props: Props) => (
  <HeaderContainer>
    <HeaderInfo>
      <Subtitle>{props.subtitle}</Subtitle>
      <H5>{props.title}</H5>
    </HeaderInfo>
    <MenuOptionButton onClick={props.onButtonClick}>
      View All
    </MenuOptionButton>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${H5} {
    margin-bottom: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #879399;
  margin-top: 0;
  margin-bottom: 2px;
  text-align: left;
  font-family: Montserrat;
`;

export default TableHeader;

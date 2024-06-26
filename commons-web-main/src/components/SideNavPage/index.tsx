import React, {ReactNode} from 'react';
import { Row } from 'react-grid-system';
import styled from 'styled-components';
import Page from '../Page';
import MenuMainTitle from '../MenuMainTitle';
import MenuSubtitleText from '../MenuSubtitleText';
import Card from '../Card';
import Images from '../../assets/images';

type Props = {
  name: string,
  navbar: ReactNode,
  children: ReactNode,
  padding: string
}

interface ContainerProps {
  padding: string
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: white;
  padding: ${props => props.padding || '20px'};
  overflow: hidden;
  margin-top: 0px;
  margin-right: 30px;
`;

// right now, we are using px but eventually we have to use % but in order to do that
// we will have to change the entire layout. 
const Img = styled.img `
  width: 140px;
  display: block;
  margin: 40px auto 0;
`;

const SideNavPage = (props: Props) => {
  return (
    <Page>
      <Row>
        <div style={{ position: 'fixed' }}>
          <MenuMainTitle style={{ width: 10 }}> <Img src={Images.visitryLogo} alt="Visitry" /></MenuMainTitle>
          <MenuSubtitleText>Welcome back,<br/>{props.name}</MenuSubtitleText>
          {props.navbar}
        </div>
        <Card style={{ paddingTop: 0, paddingLeft: 30 }}>
          <Container padding={props.padding}>{props.children}</Container>
        </Card>
      </Row>
    </Page>
  );
};

export default SideNavPage;

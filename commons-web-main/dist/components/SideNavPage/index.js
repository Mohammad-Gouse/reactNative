import React from 'react';
import { Row } from 'react-grid-system';
import styled from 'styled-components';
import Page from '../Page';
import MenuMainTitle from '../MenuMainTitle';
import MenuSubtitleText from '../MenuSubtitleText';
import Card from '../Card';
import Images from '../../assets/images';
const Container = styled.div `
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
const SideNavPage = (props) => {
    return (React.createElement(Page, null,
        React.createElement(Row, null,
            React.createElement("div", { style: { position: 'fixed' } },
                React.createElement(MenuMainTitle, { style: { width: 10 } },
                    " ",
                    React.createElement(Img, { src: Images.visitryLogo, alt: "Visitry" })),
                React.createElement(MenuSubtitleText, null,
                    "Welcome back,",
                    React.createElement("br", null),
                    props.name),
                props.navbar),
            React.createElement(Card, { style: { paddingTop: 0, paddingLeft: 30 } },
                React.createElement(Container, { padding: props.padding }, props.children)))));
};
export default SideNavPage;

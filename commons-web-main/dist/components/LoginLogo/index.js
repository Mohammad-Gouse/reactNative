import React from 'react';
import styled from 'styled-components';
import Images from '../../assets/images';
const Img = styled.img `
  display: block;
  max-height:60%;
  max-width:60%;
  margin: auto auto 0;
  align-items: center;
`;
const Div = styled.div `
  display: flex;
  align-items: center;

`;
const LoginLogo = () => {
    return (React.createElement(Div, null,
        React.createElement(Img, { src: Images.VisitryAuthLogo, alt: "Visitry" })));
};
export default LoginLogo;

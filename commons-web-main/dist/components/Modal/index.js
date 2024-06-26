import React from 'react';
import styled from 'styled-components';
const Backdrop = styled.div `
  transition: .3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .55);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ visible }) => visible ? `
    visibility: visible;
    opacity: 1;
  ` : ''}
`;
const Body = styled.div `
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  min-width: 350px;
`;
const Modal = (props) => {
    return (React.createElement(Backdrop, { visible: props.visible },
        React.createElement(Body, null, props.children)));
};
export default Modal;

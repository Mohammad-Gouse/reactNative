import React from 'react';
import styled from 'styled-components';
import { MenuOptionButton, H5 } from 'listertech-commons-web';
const TableHeader = (props) => (React.createElement(HeaderContainer, null,
    React.createElement(HeaderInfo, null,
        React.createElement(Subtitle, null, props.subtitle),
        React.createElement(H5, null, props.title)),
    React.createElement(MenuOptionButton, { onClick: props.onButtonClick }, "View All")));
const HeaderContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const HeaderInfo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${H5} {
    margin-bottom: 0;
  }
`;
const Subtitle = styled.p `
  font-size: 12px;
  line-height: 15px;
  color: #879399;
  margin-top: 0;
  margin-bottom: 2px;
  text-align: left;
  font-family: Montserrat;
`;
export default TableHeader;

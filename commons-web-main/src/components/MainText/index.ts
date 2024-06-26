import styled from 'styled-components';

interface Props {
  spaceless?: boolean
}

const MainText = styled.h5<Props>`
    height: 18px;
    width: 81px;
    color: #354148;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    ${({ spaceless }) => spaceless ? `
      margin: 0;
    ` : ''}
`;

export default MainText;

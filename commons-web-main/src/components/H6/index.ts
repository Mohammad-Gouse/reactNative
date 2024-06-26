import styled from 'styled-components';

interface Props {
  wide?: boolean,
  noMargin?: boolean
}

const H6 = styled.h6<Props>`
    height: 20px;
    ${({wide}) => !wide ? 'width: 43px;' : ''}
    color: #354148;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    ${({ noMargin }) => noMargin ? 'margin: 0;' : ''}
`;

export default H6;

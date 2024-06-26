import styled from 'styled-components';

interface Props {
  marginBottom: string
}

const ExtraSmallText = styled.h6<Props>`
    height: 9px;
    width: 31px;
    color: #354148;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 500;
    line-height: 9px;
    text-align: center;
    margin-bottom: ${({ marginBottom = '2.33em' }) => marginBottom};
`;

export default ExtraSmallText;

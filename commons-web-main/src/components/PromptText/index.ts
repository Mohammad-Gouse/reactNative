import styled from 'styled-components';

interface Props {
  success?: boolean,
}

const PromptText = styled.h2<Props>`
    height: 13px;
    width: 54px;
    color: ${props => props.success ? 'green' : 'red'};
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 300;
    line-height: 13px;
    text-align: left;
    width: 100%;
    margin: 0px;
`;

export default PromptText;

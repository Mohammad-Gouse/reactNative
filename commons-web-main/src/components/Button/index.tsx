import React, {ReactNode} from 'react';
import styled from 'styled-components';
import LoadingIndicator from '../LoadingIndicator';

interface StyledProps {
  theme?: string,
  noMargin?: boolean
};

const Styled = styled.button<StyledProps>`
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#5FB894'};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: ${props => (props.theme === 'light' ? '#879399' : 'white')};
  margin-top: ${({ noMargin }) => noMargin ? '0px' : '30px'};
  border: ${props => (props.theme === 'light' ? '1px solid #DBE3E7' : '0px')};
  outline: none !important;
  outline-offset: none !important;
  &:hover {
    background-color: ${props => (props.theme === 'light' ? '#DBE3E744' : '#5FB89499')}
  }
`;

const StyledButton = styled(Styled)`
  cursor: pointer;
`;

type Props = {
  loading?: boolean,
  theme?: string,
  children?: ReactNode,
  style?: Object,
  noMargin?: boolean,
  onClick?: React.MouseEventHandler
}

const Button = (props: Props) => {
  if (props.loading) {
    return (
      <Styled
        as="div"
        theme={props.theme}
        style={{ ...{ paddingTop: 5 }, ...props.style }}
        noMargin={props.noMargin}
      >
        <LoadingIndicator color={props.theme === "light" ? undefined : "#FFFFFF"} />
      </Styled>
    );
  } else {
    return (
      <StyledButton type='button' theme={props.theme} style={props.style} onClick={props.onClick} noMargin={props.noMargin}>
        {props.children}
      </StyledButton>
    );
  }
};

export default Button;

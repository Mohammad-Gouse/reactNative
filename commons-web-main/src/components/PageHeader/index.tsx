import React, {ReactNode} from "react";
import styled from "styled-components";

interface ContainerProps {
  underlined?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ underlined }) =>
    underlined
      ? `
    border-bottom: 1px solid #F1F1F1;
  `
      : ""}
`;

const Header = styled.h2`
  height: 30px;
  color: #354148;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  display: flex;
`;

const Subtitle = styled.h5`
  color: #b0bec5;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  display: flex;
  margin-bottom: -24px;
`;

const PageHeader = ({
  subtitle,
  children,
  underlined,
  ...rest
}: {
  subtitle: string;
  children?: ReactNode,
  underlined?: boolean
}) => (
  <Container underlined={underlined}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    <Header {...rest}>{children}</Header>
  </Container>
);

export default PageHeader;

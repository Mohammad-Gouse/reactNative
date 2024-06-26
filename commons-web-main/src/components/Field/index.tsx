import React from 'react';
import styled from 'styled-components';

import H4 from '../H4';
import Container from '../Input/Container';

type Props = {
  label: string,
  value: string | number | null | undefined,
};

const Field = (props: Props) => {
  let { label, value } = props;
  return (
    <Container>
      <Subtitle>{label}</Subtitle>
      <ValueLabel>{value}</ValueLabel>
    </Container>
  );
};

const Subtitle = styled(H4)`
  margin-bottom: 4px;
`;

const ValueLabel = styled.h3`
  margin: 0;
  color: #354148;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
`;

export default Field;

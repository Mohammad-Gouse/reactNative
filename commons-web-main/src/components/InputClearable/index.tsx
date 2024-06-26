import React, { useState } from "react";
import styled from "styled-components";
import { Images, Input } from "listertech-commons-web";

const Container = styled.div`
  flex: 1;
  position: relative;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 4px;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;

interface Props {
  containerStyle: Object;
  value: string;
  onChange: Function;
  onSettled: Function;
  onClear: Function;
}

const InputClearable = (props: Props) => {
  const {
    containerStyle,
    value,
    onChange,
    onSettled,
    onClear,
    ...other
  } = props;

  const [timeoutId, setTimeoutId] = useState<number>(0);

  const showClear = Boolean(value);

  const handleSettleTimeout = (timeoutMillis = 700) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(setTimeout(onSettled, timeoutMillis));
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    handleSettleTimeout();
    onChange(ev);
  };

  const handleClear = (ev: React.MouseEvent<HTMLElement>) => {
    handleSettleTimeout(200);
    onClear(ev);
  };

  return (
    <Container>
      <Input
        containerStyle={containerStyle}
        value={value}
        onChange={handleChange}
        style={showClear ? { paddingRight: "42px" } : undefined}
        {...other}
      />
      {showClear ? (
        <CloseIcon src={Images.close} onClick={handleClear} />
      ) : null}
    </Container>
  );
};

export default InputClearable;

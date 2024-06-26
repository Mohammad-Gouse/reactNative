import React from "react";
import Wrapper from "./Wrapper";
import SelectButton from "./SelectButton";

type Button = {
  value: string,
  Title: string,
}

const WeekButtonGroup = ({
  center = false,
  buttons,
  value,
  onChange,
  ishidden,
}: {
  center: boolean,
  buttons: Button[],
  value: string,
  onChange: Function,
  ishidden: boolean,
}) => {
  const handleChange = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Wrapper>
      {buttons.map((button) => {
        let isActive = false;
        if (Array.isArray(value)) {
          isActive = value.indexOf(button.value) > -1;
        } else {
          isActive = value === button.value;
        }
        return (
          <SelectButton
            key={button.value}
            center={center}
            onClick={(e) => handleChange(e, button.value)}
            active={isActive}
          >
            <div style={{ cursor: "pointer" }}>
              <label style={{ cursor: "pointer" }}>{button.Title}</label>
            </div>
          </SelectButton>
        );
      })}
    </Wrapper>
  );
};

export default WeekButtonGroup;

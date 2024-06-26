import React from "react";
import { WeekButtonGroupWrapper as Wrapper } from "listertech-commons-web";

import SelectCard from "./SelectCard";

interface Button {
  Title: string;
  value: string;
}

const VisitsCardGroup = ({
  center = false,
  buttons,
  value,
  onChange,
}: {
  center: boolean;
  value: string | string[];
  onChange: Function;
  buttons: Button[];
}) => {
  const handleChange = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    onChange(value);
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
          <SelectCard
            key={button.value}
            center={center}
            onClick={(e) => handleChange(e, button.value)}
            active={isActive}
          >
            <div style={{ cursor: "pointer" }}>
              <label style={{ cursor: "pointer" }}>{button.Title}</label>
            </div>
          </SelectCard>
        );
      })}
    </Wrapper>
  );
};

export default VisitsCardGroup;

import React from "react";
import Wrapper from "./Wrapper";
import SelectButton from "./SelectButton";
const WeekButtonGroup = ({ center = false, buttons, value, onChange, ishidden, }) => {
    const handleChange = (e, value) => {
        e.preventDefault();
        if (onChange) {
            onChange(value);
        }
    };
    return (React.createElement(Wrapper, null, buttons.map((button) => {
        let isActive = false;
        if (Array.isArray(value)) {
            isActive = value.indexOf(button.value) > -1;
        }
        else {
            isActive = value === button.value;
        }
        return (React.createElement(SelectButton, { key: button.value, center: center, onClick: (e) => handleChange(e, button.value), active: isActive },
            React.createElement("div", { style: { cursor: "pointer" } },
                React.createElement("label", { style: { cursor: "pointer" } }, button.Title))));
    })));
};
export default WeekButtonGroup;

import React from "react";
import { WeekButtonGroupWrapper as Wrapper } from "listertech-commons-web";
import SelectCard from "./SelectCard";
const VisitsCardGroup = ({ center = false, buttons, value, onChange, }) => {
    const handleChange = (e, value) => {
        e.preventDefault();
        onChange(value);
    };
    return (React.createElement(Wrapper, null, buttons.map((button) => {
        let isActive = false;
        if (Array.isArray(value)) {
            isActive = value.indexOf(button.value) > -1;
        }
        else {
            isActive = value === button.value;
        }
        return (React.createElement(SelectCard, { key: button.value, center: center, onClick: (e) => handleChange(e, button.value), active: isActive },
            React.createElement("div", { style: { cursor: "pointer" } },
                React.createElement("label", { style: { cursor: "pointer" } }, button.Title))));
    })));
};
export default VisitsCardGroup;

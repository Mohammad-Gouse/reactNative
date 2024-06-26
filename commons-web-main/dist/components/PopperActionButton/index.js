var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import ActionButton from "../ActionButton";
const Card = styled.div `
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  z-index: 100;
`;
const MenuItem = styled.button `
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin: 6px 0;
  color: #646b6f;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;
`;
const PopperActionButton = (props) => {
    const { expanded, menuItems } = props, actionButtonProps = __rest(props, ["expanded", "menuItems"]);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });
    useEffect(() => {
        if (update) {
            update();
        }
    }, [expanded]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ActionButton, Object.assign({ ref: setReferenceElement }, actionButtonProps)),
        expanded ? (React.createElement(Card, Object.assign({ ref: setPopperElement, style: styles.popper }, attributes.popper), menuItems.map((it) => (React.createElement(MenuItem, { key: it.text, onClick: it.onClick }, it.text))))) : null));
};
export default PopperActionButton;

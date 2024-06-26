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
import React from "react";
import styled from "styled-components";
const Container = styled.div `
  ${({ underlined }) => underlined
    ? `
    border-bottom: 1px solid #F1F1F1;
  `
    : ""}
`;
const Header = styled.h2 `
  height: 30px;
  color: #354148;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  display: flex;
`;
const Subtitle = styled.h5 `
  color: #b0bec5;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  display: flex;
  margin-bottom: -24px;
`;
const PageHeader = (_a) => {
    var { subtitle, children, underlined } = _a, rest = __rest(_a, ["subtitle", "children", "underlined"]);
    return (React.createElement(Container, { underlined: underlined },
        subtitle && React.createElement(Subtitle, null, subtitle),
        React.createElement(Header, Object.assign({}, rest), children)));
};
export default PageHeader;

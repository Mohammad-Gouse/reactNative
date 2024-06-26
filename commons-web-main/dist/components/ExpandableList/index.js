import React, { useState } from "react";
import styled from "styled-components";
import H4 from "../H4";
import Images from "../../assets/images";
const Container = styled.div `
  padding-top: 8px;
`;
const Pressable = styled.div `
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const Icon = styled.img `
  object-fit: contain;
`;
const ExtraText = styled(H4) `
  margin-left: 6px;
`;
const ExpandableList = (props) => {
    const [expanded, setExpanded] = useState(false);
    const { data, expandLabel, collapseLabel, maxItemsNoExpansion, renderItem, } = props;
    const hasExpansion = data && data.length > maxItemsNoExpansion;
    const dataToShow = hasExpansion && !expanded ? data.slice(0, 2) : data;
    return (React.createElement(Container, null,
        dataToShow.map((it, index) => renderItem(it, index)),
        hasExpansion ? (React.createElement(Pressable, { onClick: () => setExpanded(!expanded) },
            React.createElement(Icon, { src: expanded ? Images.arrowUp : Images.arrowRight }),
            React.createElement(ExtraText, null, expanded ? collapseLabel : expandLabel))) : null));
};
export default ExpandableList;

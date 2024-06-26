import React, { useState } from "react";
import styled from "styled-components";
import H4 from "../H4";
import Images from "../../assets/images";

type Props = {
  data: [Object];
  renderItem: (item: Object, index: number) => {};
  expandLabel: string;
  collapseLabel: string;
  maxItemsNoExpansion: number;
};

const Container = styled.div`
  padding-top: 8px;
`;

const Pressable = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Icon = styled.img`
  object-fit: contain;
`;

const ExtraText = styled(H4)`
  margin-left: 6px;
`;

const ExpandableList = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  const {
    data,
    expandLabel,
    collapseLabel,
    maxItemsNoExpansion,
    renderItem,
  } = props;

  const hasExpansion = data && data.length > maxItemsNoExpansion;
  const dataToShow = hasExpansion && !expanded ? data.slice(0, 2) : data;

  return (
    <Container>
      {dataToShow.map((it, index) => renderItem(it, index))}
      {hasExpansion ? (
        <Pressable onClick={() => setExpanded(!expanded)}>
          <Icon src={expanded ? Images.arrowUp : Images.arrowRight} />
          <ExtraText>{expanded ? collapseLabel : expandLabel}</ExtraText>
        </Pressable>
      ) : null}
    </Container>
  );
};

export default ExpandableList;

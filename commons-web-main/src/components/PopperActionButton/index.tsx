import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import ActionButton from "../ActionButton";

interface MenuItemData {
  text: string;
  onClick: React.MouseEventHandler;
}

interface Props {
  expanded: boolean;
  menuItems: MenuItemData[];
}

const Card = styled.div`
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

const MenuItem = styled.button`
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

const PopperActionButton = (props: Props) => {
  const { expanded, menuItems, ...actionButtonProps } = props;

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom",
    }
  );

  useEffect(() => {
    if (update) {
      update();
    }
  }, [expanded]);

  return (
    <>
      <ActionButton ref={setReferenceElement} {...actionButtonProps} />
      {expanded ? (
        <Card
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {menuItems.map((it) => (
            <MenuItem key={it.text} onClick={it.onClick}>
              {it.text}
            </MenuItem>
          ))}
        </Card>
      ) : null}
    </>
  );
};

export default PopperActionButton;

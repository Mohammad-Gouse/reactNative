import React from "react";
interface MenuItemData {
    text: string;
    onClick: React.MouseEventHandler;
}
interface Props {
    expanded: boolean;
    menuItems: MenuItemData[];
}
declare const PopperActionButton: (props: Props) => JSX.Element;
export default PopperActionButton;

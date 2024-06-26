import React, { ReactNode } from "react";
interface Props {
    green?: boolean;
    red?: boolean;
    orange?: boolean;
    children?: ReactNode;
    icon?: string | undefined;
    onClick?: React.MouseEventHandler;
    style?: Object;
    iconStyle?: Object;
}
declare const ActionButton: React.FC<Props & React.HTMLProps<HTMLButtonElement>>;
export default ActionButton;

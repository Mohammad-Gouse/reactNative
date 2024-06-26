import React, { ReactNode } from 'react';
interface Props {
    round?: boolean;
    green?: boolean;
    red?: boolean;
    orange?: boolean;
    children: ReactNode;
    icon?: string | undefined;
    onClick?: React.MouseEventHandler;
}
declare const MenuOptionButton: (props: Props) => JSX.Element;
export default MenuOptionButton;

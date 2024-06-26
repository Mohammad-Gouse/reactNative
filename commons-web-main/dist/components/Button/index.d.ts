import React, { ReactNode } from 'react';
declare type Props = {
    loading?: boolean;
    theme?: string;
    children?: ReactNode;
    style?: Object;
    noMargin?: boolean;
    onClick?: React.MouseEventHandler;
};
declare const Button: (props: Props) => JSX.Element;
export default Button;

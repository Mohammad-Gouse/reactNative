import React from 'react';
declare type Props = {
    label: string;
    isError: boolean;
    error: string;
    options: string[];
    name: string;
    value: string | null | undefined;
    onChange: React.ChangeEventHandler;
    disabled?: boolean;
};
declare const Dropdown: (props: Props) => JSX.Element;
export default Dropdown;

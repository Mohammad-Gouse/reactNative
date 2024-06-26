/// <reference types="react" />
export declare type Option = {
    label: string;
    value: string;
};
declare type Props = {
    onChange: Function;
    options: Option[];
    values: string[];
};
declare const CheckboxesGroup: (props: Props) => JSX.Element;
export default CheckboxesGroup;

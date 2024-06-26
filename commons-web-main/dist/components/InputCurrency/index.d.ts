/// <reference types="react" />
declare type Props = {
    value: number;
    label: string;
    isError: boolean;
    error: string;
    onValueChange: (val: number) => void;
};
declare const InputCurrency: (props: Props) => JSX.Element;
export default InputCurrency;

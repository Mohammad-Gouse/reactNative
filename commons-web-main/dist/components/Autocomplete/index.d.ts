/// <reference types="react" />
declare type Props = {
    items: string[];
    value: string;
    label: string;
    placeholder?: string;
    isError: boolean;
    error: string;
    onChange: (val: string) => void;
    onSelected?: (val: string) => void;
    onFetchData?: (val: string) => void;
    onClearData?: () => void;
};
declare const Autocomp: (props: Props) => JSX.Element;
export default Autocomp;

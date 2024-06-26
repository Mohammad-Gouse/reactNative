/// <reference types="react" />
declare type Props = {
    label: string;
    value: string | number | null | undefined;
};
declare const Field: (props: Props) => JSX.Element;
export default Field;

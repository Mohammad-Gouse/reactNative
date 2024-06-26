/// <reference types="react" />
interface Button {
    Title: string;
    value: string;
}
declare const VisitsCardGroup: ({ center, buttons, value, onChange, }: {
    center: boolean;
    value: string | string[];
    onChange: Function;
    buttons: Button[];
}) => JSX.Element;
export default VisitsCardGroup;

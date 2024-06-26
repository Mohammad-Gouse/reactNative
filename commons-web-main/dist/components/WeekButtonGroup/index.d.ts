/// <reference types="react" />
declare type Button = {
    value: string;
    Title: string;
};
declare const WeekButtonGroup: ({ center, buttons, value, onChange, ishidden, }: {
    center: boolean;
    buttons: Button[];
    value: string;
    onChange: Function;
    ishidden: boolean;
}) => JSX.Element;
export default WeekButtonGroup;

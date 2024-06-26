/// <reference types="react" />
interface Props {
    label: string;
    checked: boolean;
    disabled?: boolean;
    onCheckedChange: Function;
    style: Object;
}
declare const Checkbox: (props: Props) => JSX.Element;
export default Checkbox;

/// <reference types="react" />
interface Props {
    containerStyle: Object;
    value: string;
    onChange: Function;
    onSettled: Function;
    onClear: Function;
}
declare const InputClearable: (props: Props) => JSX.Element;
export default InputClearable;

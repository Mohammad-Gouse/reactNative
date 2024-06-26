/// <reference types="react" />
import 'react-datepicker/dist/react-datepicker.css';
declare type Props = {
    label: string;
    value: Date | null | undefined;
    isError: boolean;
    error: string;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
    onDateChange: (d: Date | [Date | null, Date | null] | null) => void;
    selectYearMonth?: boolean;
};
declare const InputDate: (props: Props) => JSX.Element;
export default InputDate;

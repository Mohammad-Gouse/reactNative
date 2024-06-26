/// <reference types="react" />
declare type Props = {
    title: string;
    subtitle: string;
    onButtonClick: () => void;
};
declare const TableHeader: (props: Props) => JSX.Element;
export default TableHeader;

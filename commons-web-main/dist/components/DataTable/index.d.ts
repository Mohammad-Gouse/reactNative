import React from 'react';
declare type Header = {
    size?: any;
    title?: string;
};
declare type Generic = {
    link?: string;
};
declare type Props<T extends Generic> = {
    headers: string[] | Header[];
    data: T[];
    renderers: ((item: T) => Object)[];
    onSort: (index: number) => void;
    padding?: string;
    name?: string;
};
declare class DataTable<T extends Generic> extends React.Component<Props<T>> {
    handleSort: (index: number) => void;
    getColumnSize: (columnIndex: number) => {
        sm: number;
    };
    render(): JSX.Element;
}
export default DataTable;

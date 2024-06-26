import React from 'react';
declare type Props = {
    onChange: (search: string) => void;
    initialValue: string;
};
declare type State = {
    searchText: string;
    opened: boolean;
};
declare class MenuOptionsSearch extends React.Component<Props, State> {
    timerRef: any;
    input: any;
    state: {
        searchText: string;
        opened: boolean;
    };
    constructor(props: Props);
    componentDidMount(): void;
    toggle: () => void;
    handleInputWith: (value: string) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: React.KeyboardEvent) => void;
    clear: () => void;
    render(): JSX.Element;
}
export default MenuOptionsSearch;

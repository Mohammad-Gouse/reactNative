/// <reference types="react" />
declare type Props = {
    data: [Object];
    renderItem: (item: Object, index: number) => {};
    expandLabel: string;
    collapseLabel: string;
    maxItemsNoExpansion: number;
};
declare const ExpandableList: (props: Props) => JSX.Element;
export default ExpandableList;

import React from 'react';
import type { Option } from '../CheckboxesGroup';
declare type Props = {
    title: string;
    visible: boolean;
    onChangeFilters: Function;
    filters: string[];
    filtersOptions: Option[];
    onClose: React.MouseEventHandler;
    onApply: React.MouseEventHandler;
};
declare const FiltersModal: (props: Props) => JSX.Element;
export default FiltersModal;

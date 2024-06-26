import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import ModalTitle from '../ModalTitle';
import CheckboxesGroup from '../CheckboxesGroup';
import Button from '../Button';
import MenuOptionButton from '../MenuOptionButton';
const ModalButtons = styled.div `
  display: flex;

  * {
    flex: 1;
  }

  * + * {
    margin-left: 15px;
  }
`;
const SelectButtons = styled.div `
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 16px;
`;
const FiltersModal = (props) => {
    const { visible, title, onChangeFilters, filters, filtersOptions, onClose, onApply, } = props;
    const onSelectAll = () => {
        onChangeFilters(filtersOptions.map(f => f.value));
    };
    const onDeselectAll = () => {
        onChangeFilters([]);
    };
    return (React.createElement(Modal, { visible: visible },
        React.createElement(ModalTitle, null, title),
        React.createElement(SelectButtons, null,
            React.createElement(MenuOptionButton, { onClick: onSelectAll }, "Select All"),
            React.createElement(MenuOptionButton, { onClick: onDeselectAll }, "Deselect All")),
        React.createElement(CheckboxesGroup, { onChange: onChangeFilters, values: filters, options: filtersOptions }),
        React.createElement(ModalButtons, null,
            React.createElement(Button, { noMargin: true, theme: "light", onClick: onClose }, "Close"),
            React.createElement(Button, { noMargin: true, onClick: onApply }, "Apply"))));
};
export default FiltersModal;

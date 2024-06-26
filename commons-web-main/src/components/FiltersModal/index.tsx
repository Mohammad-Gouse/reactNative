import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import ModalTitle from '../ModalTitle';
import CheckboxesGroup from '../CheckboxesGroup';
import Button from '../Button';
import MenuOptionButton from '../MenuOptionButton';
import type {Option} from '../CheckboxesGroup';

type Props = {
  title: string,
  visible: boolean,
  onChangeFilters: Function,
  filters: string[],
  filtersOptions: Option[],
  onClose: React.MouseEventHandler,
  onApply: React.MouseEventHandler,
};

const ModalButtons = styled.div`
  display: flex;

  * {
    flex: 1;
  }

  * + * {
    margin-left: 15px;
  }
`;

const SelectButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 16px;
`;

const FiltersModal = (props: Props) => {
  const {
    visible,
    title,
    onChangeFilters,
    filters,
    filtersOptions,
    onClose,
    onApply,
  } = props;

  const onSelectAll = () => {
    onChangeFilters(filtersOptions.map(f => f.value));
  };

  const onDeselectAll = () => {
    onChangeFilters([]);
  };

  return (
    <Modal visible={visible}>
      <ModalTitle>{title}</ModalTitle>
      <SelectButtons>
        <MenuOptionButton onClick={onSelectAll}>Select All</MenuOptionButton>
        <MenuOptionButton onClick={onDeselectAll}>
          Deselect All
        </MenuOptionButton>
      </SelectButtons>
      <CheckboxesGroup
        onChange={onChangeFilters}
        values={filters}
        options={filtersOptions}
      />
      <ModalButtons>
        <Button noMargin theme="light" onClick={onClose}>
          Close
        </Button>
        <Button noMargin onClick={onApply}>
          Apply
        </Button>
      </ModalButtons>
    </Modal>
  );
};

export default FiltersModal;

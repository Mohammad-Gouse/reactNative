import styled from 'styled-components';

interface Props {
    active?: boolean,
    center?: boolean
}

const SelectButton = styled.button<Props>`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: ${props => (props.active ? '#354148' : '#FFFFFF')};
    color: ${props => (props.active ? '#FFFFFF' : '#f0f0f0')};
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    border: 2px solid #f0f0f0;
    margin-right: 5px;
    outline: none !important;
    outline-offset: none !important;
    cursor:pointer;
`;

export default SelectButton;

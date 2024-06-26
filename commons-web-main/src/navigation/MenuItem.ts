import styled from 'styled-components';

interface Props {
  active?: boolean
}

const MenuItem = styled.button<Props>`
    height: 35px;
    width: 130px;
    border-radius: 17.5px;
    background-color: ${props => (props.active ? '#298D74' : '#5FB894')};
    color: rgba(255, 255, 255, 1.0);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    text-align: start;
    border: 0px solid;
    margin-right: 10px;
    margin-bottom: 20px;
    outline: none !important;
    outline-offset: none !important;
    cursor:pointer;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    display: flex;

    img {
        vertical-align: middle;
        margin-right: 10px;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        opacity: 1.0;
    }
`;

export default MenuItem;

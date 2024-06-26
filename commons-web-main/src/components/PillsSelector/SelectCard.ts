import styled from "styled-components";

interface Props {
  active: boolean;
  center: boolean;
}

const SelectCard = styled.button<Props>`
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.active ? "#5FB894" : "#FFFFFF")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#879399")};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  border: ${(props) => (props.active ? "0px solid" : "1px solid #DBE3E7")};
  margin-right: 10px;
  outline: none !important;
  outline-offset: none !important;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;

  &:hover {
    ${({ active }) => (!active ? "background-color: #DBE3E744" : "")}
  }
`;

export default SelectCard;

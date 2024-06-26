import styled from 'styled-components';

const Wrapper = styled.div`
    border:none;
    margin-left:-160px;
    align-items: start;
    height: 60%;
    display: flex;
    flex-direction: column;

    &.fixed {
      position: fixed;
      bottom: 0;
      height: auto;
    }
`;

export default Wrapper;

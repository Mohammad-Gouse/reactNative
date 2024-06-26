import React from 'react';
import styled from 'styled-components';
import Images from '../../assets/images';
const RatingBar = (props) => {
    return (React.createElement("div", null, [1, 2, 3, 4, 5].map(r => (React.createElement(Star, { key: `rating${r}`, src: props.rating >= r ? Images.starOn : Images.starOff })))));
};
export default RatingBar;
const Star = styled.img `
  width: 12px;
`;

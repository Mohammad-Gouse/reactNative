import React from 'react';
import styled from 'styled-components';
import Images from '../../assets/images';

type Props = {
  rating: number
};

const RatingBar = (props: Props) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(r => (
        <Star key={`rating${r}`} src={props.rating >= r ? Images.starOn : Images.starOff} />
      ))}
    </div>
  );
};

export default RatingBar;

const Star = styled.img`
  width: 12px;
`;

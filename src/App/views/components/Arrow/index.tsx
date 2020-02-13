import React, {FC} from 'react';

import {Triangle} from 'App/views/components/Triangle';
import {Root, Line, Point} from './index.styled';

interface Props {
  length: number;
  point: number;
  color: string;
  angle?: number;
}

export const Arrow: FC<Props> = props => {

  const {length, point, color, angle = 0} = props;

  return (
    <Root width={length} height={length} angle={angle}>
      <Line width={length - (point / 2)} height={point / 4} color={color}/>
      <Point width={point} height={point}>
        <Triangle width={point} color={color}/>
      </Point>
    </Root>
  );
};

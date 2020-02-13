import React, {FC} from 'react';

import {Root, Body} from './index.styled';

interface Props {
  width: number;
  height?: number;
  color: string;
}

export const Triangle: FC<Props> = props => {

  const {width, color} = props;
  const height = props.height || getEquilateralTriangleHeight(width);

  return (
    <Root width={width} height={height}>
      <Body width={width} height={height} color={color}/>
    </Root>
  );

  function getEquilateralTriangleHeight(width: number): number {
    return width / 2 * Math.sqrt(3);
  }

};

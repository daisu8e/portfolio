import React, {FC} from 'react';

import {Root, Ring1, Ring2, Text1, Text2, Text3, Text4} from './index.styled';

export const CoolLogo: FC = () => {
  return (
    <Root>
      <Ring1/>
      <Text1>D</Text1>
      <Ring2/>
      <Text2>.</Text2>
      <Text3>
        <span>d</span>
        <span>a</span>
        <span>i</span>
        <span>u</span>
        <span>8</span>
        <span>e</span>
        <span>.</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
      </Text3>
      <Text4>
        <span>W</span>
        <span>E</span>
        <span>B</span>
        <span> </span>
        <span>D</span>
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>L</span>
        <span>O</span>
        <span>P</span>
        <span>E</span>
        <span>R</span>
      </Text4>
    </Root>
  );
};

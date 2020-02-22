import React, {FC} from 'react';

import {LayeredArchitecture} from '../LayeredArchitecture';
import {Root, Body, Layer, Label} from './index.styled';

export const ComponentArchitecture: FC = () => {
  return (
    <Root>
      <LayeredArchitecture/>
      <Body>
        <Label>Component</Label>
        <Layer><Label>User Interface Layer</Label></Layer>
        <Layer><Label>Application Layer</Label></Layer>
        <Layer><Label>Domain Layer</Label></Layer>
        <Layer><Label>Infrastructure Layer</Label></Layer>
      </Body>
    </Root>
  );
};

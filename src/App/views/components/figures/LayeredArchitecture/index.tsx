import React, {FC} from 'react';

import {Root, Layer, Label} from './index.styled';

export const LayeredArchitecture: FC = () => {
  return (
    <Root>
      <Label>Software</Label>
      <Layer><Label>User Interface Layer</Label></Layer>
      <Layer><Label>Application Layer</Label></Layer>
      <Layer><Label>Domain Layer</Label></Layer>
      <Layer><Label>Infrastructure Layer</Label></Layer>
    </Root>
  );
};

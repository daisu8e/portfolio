import React, {FC} from 'react';

import {LayeredArchitecture} from '../LayeredArchitecture';
import {Root, Body, Block, Label, Relation, Arrow1, Arrow2, Arrow3} from './index.styled';

export const Flux: FC = () => {
  return (
    <Root>
      <LayeredArchitecture/>
      <Body>
        <Block><Label>Action</Label></Block>
        <Block><Label>Dispatcher</Label></Block>
        <Block><Label>Store</Label></Block>
        <Block><Label>View</Label></Block>
        <Relation><Arrow1/></Relation>
        <Relation><Arrow2/></Relation>
        <Relation><Arrow3/></Relation>
      </Body>
    </Root>
  );
};

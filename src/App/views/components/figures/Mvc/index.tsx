import React, {FC} from 'react';

import {LayeredArchitecture} from '../LayeredArchitecture';
import {Root, ViewControllers, ViewController, Models, Model, Label} from './index.styled';

export const Mvc: FC = () => {
  return (
    <Root>
      <LayeredArchitecture/>
      <ViewControllers>
        <ViewController><Label>V</Label><Label>C</Label></ViewController>
        <ViewController><Label>V</Label><Label>C</Label></ViewController>
        <ViewController><Label>V</Label><Label>C</Label></ViewController>
      </ViewControllers>
      <Models>
        <Model><Label>M</Label></Model>
        <Model><Label>M</Label></Model>
        <Model><Label>M</Label></Model>
        <Model><Label>M</Label></Model>
      </Models>
    </Root>
  );
};

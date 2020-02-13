import React, {FC} from 'react';

import {ComponentArchitecture} from '../ComponentArchitecture';
import {Root, Mvc, ViewController, Model, Label} from './index.styled';

export const ComponentMvc: FC = () => {
  return (
    <Root>
      <ComponentArchitecture/>
      <Mvc>
        <ViewController><Label>V</Label><Label>C</Label></ViewController>
        <Model><Label>M</Label></Model>
      </Mvc>
    </Root>
  );
};

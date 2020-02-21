import React, {FC} from 'react';

import {LayeredArchitecture} from '../LayeredArchitecture';
import {Root, Body, ViewControllers, Models, ViewController, Model, Component, Label} from './index.styled';

export const NestedMvc: FC = () => {
  return (
    <Root>
      <LayeredArchitecture/>
      <Body>
        <ViewControllers>
          <ViewController>
            <Component>
              <Component>
                <Component>
                  <Label>V</Label><Label>C</Label>
                </Component>
              </Component>
            </Component>
          </ViewController>
          <ViewController>
            <Component>
              <Component>
                <Component>
                  <Label>V</Label><Label>C</Label>
                </Component>
              </Component>
            </Component>
          </ViewController>
          <ViewController>
            <Component>
              <Component>
                <Component>
                  <Label>V</Label><Label>C</Label>
                </Component>
              </Component>
            </Component>
          </ViewController>
        </ViewControllers>
        <Models>
          <Model><Label>M</Label></Model>
          <Model><Label>M</Label></Model>
          <Model><Label>M</Label></Model>
          <Model><Label>M</Label></Model>
        </Models>
      </Body>
    </Root>
  );
};

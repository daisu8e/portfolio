import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

import {Arrow} from 'App/views/components/Arrow';

const black = mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: ${500}px;
`;

export const Area = styled.div`
  position: absolute;
  right: ${15 + 15}px;
  top: ${50 - 4}px;
  width: ${250}px;
  height: ${4 + 50 + 15 + 50 + 4}px;
  ${area()}
`;

export const Block = styled.div`
  position: absolute;
  width: ${100}px;
  height: ${30}px;
  &:nth-child(1) {
    left: ${15}px;
    top: ${10 + 4}px;
  }
  &:nth-child(2) {
    left: ${15}px;
    bottom: ${10 + 4}px;
  }
  &:nth-child(3) {
    right: ${15}px;
    bottom: ${10 + 4}px;
  }
  &:nth-child(4) {
    right: ${15}px;
    top: ${10 + 4}px;
  }
  ${block()}
`;

export const Label = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${label()};
`;

export const Relation = styled.div`
  position: absolute;
  &:nth-child(5) {
    left: ${15 + (100 / 2) - ((10 + 15 + 10) / 2)}px;
    top: ${4 + 10 + 30}px;
  }
  &:nth-child(6) {
    left: ${15 + 100}px;
    bottom: ${4 + 10 + (30 / 2) - ((250 - (15 + 100) - (100 + 15)) / 2)}px;
  }
  &:nth-child(7) {
    right: ${15 + (100 / 2) - ((10 + 15 + 10) / 2)}px;
    top: ${4 + 10 + 30}px;
  }
`;

export const Arrow1: FC = () => <Arrow length={10 + 15 + 10} point={8} color={'white'} angle={90}/>;
export const Arrow2: FC = () => <Arrow length={250 - (15 + 100) - (100 + 15)} point={8} color={'white'} angle={0}/>;
export const Arrow3: FC = () => <Arrow length={10 + 15 + 10} point={8} color={'white'} angle={-90}/>;

function area() {
  return css`
    border-radius: 10px;
    background-color: ${rgba(black, 0.4)};
  `;
}

function block() {
  return css`
    border: 1px solid ${rgba(black, 0.4)};
    border-radius: 9px;
    box-sizing: border-box;
    background-color: ${rgba(black, 0.4)};
  `;
}

function label() {
  return css`
    color: white;
    font-size: 15px;
  `;
}

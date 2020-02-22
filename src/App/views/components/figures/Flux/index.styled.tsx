import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

import {Arrow} from 'App/views/components/Arrow';

const black = mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  max-width: 600px;
  @media (min-width: 480px) {
    min-width: ${(16 * 3) + 248 + (16 * 3)}px;
  }
  @media (max-width: 480px) {
    min-width: 288px;
  }
`;

export const Body = styled.div`
  position: absolute;
  top: ${48 - 4}px;
  width: 248px;
  height: ${4 + 48 + 16 + 48 + 4}px;
  ${body()};
  @media (min-width: 480px) {
    right: ${16 * 3}px;
  }
  @media (max-width: 480px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Block = styled.div`
  position: absolute;
  width: ${96}px;
  height: ${32}px;
  &:nth-child(1) {
    left: ${16}px;
    top: ${8 + 4}px;
  }
  &:nth-child(2) {
    left: ${16}px;
    bottom: ${8 + 4}px;
  }
  &:nth-child(3) {
    right: ${16}px;
    bottom: ${8 + 4}px;
  }
  &:nth-child(4) {
    right: ${16}px;
    top: ${8 + 4}px;
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
    left: ${16 + (96 / 2) - ((8 + 16 + 8) / 2)}px;
    top: ${4 + 8 + 32}px;
  }
  &:nth-child(6) {
    left: ${16 + 96}px;
    bottom: ${4 + 8 + (32 / 2) - ((248 - (16 + 96) - (96 + 16)) / 2)}px;
  }
  &:nth-child(7) {
    right: ${16 + (96 / 2) - ((8 + 16 + 8) / 2)}px;
    top: ${4 + 8 + 32}px;
  }
`;

export const Arrow1: FC = () => <Arrow length={8 + 16 + 8} point={8} color={'white'} angle={90}/>;
export const Arrow2: FC = () => <Arrow length={248 - (16 + 96) - (96 + 16)} point={8} color={'white'} angle={0}/>;
export const Arrow3: FC = () => <Arrow length={8 + 16 + 8} point={8} color={'white'} angle={-90}/>;

function body() {
  return css`
    border-radius: 10px;
    background-color: ${rgba(black, 0.6)};
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

import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

const black = mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: ${500}px;
`;

export const Mvc = styled.div`
  position: absolute;
  right: ${15 + 15}px;
  top: ${50 - 4}px;
  width: 250px;
  height: ${4 + 50 + 15 + 50 + 4}px;
`;

export const ViewController = styled.div`
  position: absolute;
  right: ${9 + (9 * 3)}px;
  top: ${(3 + 15 + 3 + 1)}px;
  width: ${13 * 3}px;
  height: ${(3 + 15 + 3) * 2 + 4}px;
  ${object()};
`;

export const Model = styled.div`
  position: absolute;
  right: ${9 + (9 * 3)}px;
  top: ${(3 + 15 + 3 + 1) + (3 + 15 + 3 + 4) * 2}px;
  width: ${13 * 3}px;
  height: ${(3 + 15 + 3)}px;
  ${object()};
`;

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  line-height: ${15}px;
  ${ViewController} > &:nth-child(1) {
    top: ${1 + 3}px;
  }
  ${ViewController} > &:nth-child(2) {
    bottom: ${1 + 3}px;
  }
  ${Model} > & {
    top: ${1 + 3}px;
  }
  ${label()};
`;

function object() {
  return css`
    border-radius: 4px;
    background-color: ${rgba(black, 0.4)};
  `;
}

function label() {
  return css`
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    color: white;
  `;
}

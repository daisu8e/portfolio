import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

const black = mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  max-width: ${600}px;
  min-width: ${240}px;
  @media (min-width: 480px) {
    min-width: ${(16 * 3) + 248 + (16 * 3)}px;
  }
  @media (max-width: 480px) {
    min-width: 288px;
  }
`;

export const Mvc = styled.div`
  position: absolute;
  top: ${(48 - 4) + (4 + 16 + 3)}px;
  width: ${8 * 6}px;
  height: ${(2 + 16 + 2) * 3 + 4 * 2}px;
  @media (min-width: 480px) {
    right: ${(16 * 3) + (16 * 2)}px;
  }
  @media (max-width: 480px) {
    left: 50%;
    transform: translateX(${(248 / 2) - (8 * 6) - (16 * 2)}px);
  }
`;

export const ViewController = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: ${(2 + 16 + 2) * 2 + 4}px;
  ${object()};
`;

export const Model = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${2 + 16 + 2}px;
  ${object()};
`;

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  line-height: 16px;
  ${ViewController} > & {
    &:nth-child(1) {
      top: 2px;
    }
    &:nth-child(2) {
      bottom: 2px;
    }
  }
  ${Model} > & {
    top: 2px;
  }
  ${label()};
`;

function object() {
  return css`
    border-radius: 4px;
    background-color: ${rgba(black, 0.6)};
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

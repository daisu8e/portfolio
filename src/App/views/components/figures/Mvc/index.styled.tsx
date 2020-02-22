import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

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
  height: ${4 + ((48 * 3) + (16 * 2)) + 4}px;
  @media (min-width: 480px) {
    right: ${16 * 3}px;
  }
  @media (max-width: 480px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const ViewControllers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${4 + (48 * 2) + 16 + 4}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

export const Models = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${4 + 48 + 4}px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;

export const ViewController = styled.div`
  position: relative;
  ${object()};
`;

export const Model = styled.div`
  position: relative;
  ${object()};
`;

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  line-height: ${48 - 16 - 16}px;
  ${label()};
  ${ViewController} > & {
    &:nth-child(1) {
      top: ${4 + 16}px;
    }
    &:nth-child(2) {
      bottom: ${4 + 16}px;
    }
  }
  ${Model} > & {
    &:nth-child(1) {
    top: ${4 + 16}px;
  }
`;

function object() {
  return css`
    border-radius: 10px;
    background-color: ${rgba(black, 0.6)};
  `;
}

function label() {
  return css`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: white;
  `;
}

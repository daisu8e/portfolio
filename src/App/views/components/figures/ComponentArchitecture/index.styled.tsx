import styled, {css} from 'styled-components';
import {mix} from 'polished';

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

export const Layer = styled.div`
  position: absolute;
  left: ${9}px;
  width: ${250 - 9 - 9}px;
  height: ${3 + 15 + 3}px;
  &:nth-child(2) {
    top: ${(3 + 15 + 3 + 1)}px;
  }
  &:nth-child(3) {
    top: ${(3 + 15 + 3 + 1) + ((3 + 15 + 3) + 4)}px;
  }
  &:nth-child(4) {
    top: ${(3 + 15 + 3 + 1) + ((3 + 15 + 3) + 4) * 2}px;
  }
  &:nth-child(5) {
    top: ${(3 + 15 + 3 + 1) + ((3 + 15 + 3) + 4) * 3}px;
  }
  ${border()};
`;

export const Label = styled.div`
  position: absolute;
  left: ${9}px;
  top: ${3}px;
  line-height: ${15}px;
  font-size: ${13}px;
`;

function area() {
  return css`
    background-color: white;
    ${border()};
  `;
}

function border() {
  return css`
    &:before {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: "";
      border: 1px solid ${black};
      border-radius: 6px;
      box-sizing: border-box;
    }
  `;
}

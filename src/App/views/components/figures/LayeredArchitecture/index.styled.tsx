import styled, {css} from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  max-width: ${600}px;
  min-width: ${288}px;
  height: ${48 + ((48 + 16) * 4)}px;
  ${border()};
`;

export const Layer = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  height: ${48}px;
  &:nth-child(2) {
    top: ${48}px;
  }
  &:nth-child(3) {
    top: ${48 + (48 + 16)}px;
  }
  &:nth-child(4) {
    top: ${48 + (48 + 16) * 2}px;
  }
  &:nth-child(5) {
    top: ${48 + (48 + 16) * 3}px;
  }
  ${border()};
`;

export const Label = styled.div`
  position: absolute;
  left: ${16}px;
  top: ${16}px;
  line-height: ${48 - 16 - 16}px;
  font-size: ${15}px;
`;

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
      border-radius: 9px;
      box-sizing: border-box;
    }
  `;
}

import styled, {css} from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: ${500}px;
  height: ${50 + ((50 + 15) * 4)}px;
  ${border()};
`;

export const Layer = styled.div`
  position: absolute;
  left: ${15}px;
  width: ${500 - (15 * 2)}px;
  height: ${50}px;
  &:nth-child(2) {
    top: ${50}px;
  }
  &:nth-child(3) {
    top: ${50 + (50 + 15)}px;
  }
  &:nth-child(4) {
    top: ${50 + (50 + 15) * 2}px;
  }
  &:nth-child(5) {
    top: ${50 + (50 + 15) * 3}px;
  }
  ${border()};
`;

export const Label = styled.div`
  position: absolute;
  left: ${15}px;
  top: ${15}px;
  line-height: ${20}px;
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

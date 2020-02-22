import styled, {css} from 'styled-components';
import {mix} from 'polished';

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
  height: ${4 + (48 * 2) + 16 + 4}px;
  ${body()};
  @media (min-width: 480px) {
    right: ${16 * 3}px;
  }
  @media (max-width: 480px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Layer = styled.div`
  position: absolute;
  left: ${8}px;
  width: ${248 - 8 - 8}px;
  height: ${2 + 16 + 2}px;
  &:nth-child(2) {
    top: ${(2 + 16 + 2 + 3)}px;
  }
  &:nth-child(3) {
    top: ${(2 + 16 + 2 + 3) + ((2 + 16 + 2) + 4)}px;
  }
  &:nth-child(4) {
    top: ${(2 + 16 + 2 + 3) + ((2 + 16 + 2) + 4) * 2}px;
  }
  &:nth-child(5) {
    top: ${(2 + 16 + 2 + 3) + ((2 + 16 + 2) + 4) * 3}px;
  }
  ${border()};
`;

export const Label = styled.div`
  position: absolute;
  left: 8px;
  top: 2px;
  line-height: 16px;
  font-size: 13px;
  ${Body} > & {
    top: 4px;
  }
`;

function body() {
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

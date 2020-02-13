import styled, {css} from 'styled-components';
import {mix, rgba} from 'polished';

const black = mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: ${500}px;
`;

export const ViewControllers = styled.div`
  position: absolute;
  right: ${15 + 15}px;
  top: ${50 - 4}px;
  width: ${250}px;
  height: ${4 + (50 * 2) + 15 + 4}px;
`;

export const Models = styled.div`
  position: absolute;
  right: ${15 + 15}px;
  top: ${50 + ((50 + 15) * 2) - 4}px;
  width: ${250}px;
  height: ${4 + 50 + 4}px;
`;

export const ViewController = styled.div`
  position: absolute;
  width: ${((250 + 15) / 3) - 15}px;
  height: 100%;
  &:nth-child(1) {
    left: ${0}px;
  }
  &:nth-child(2) {
    left: ${(250 + 15) / 3}px;
  }
  &:nth-child(3) {
    left: ${(250 + 15) / 3 * 2}px;
  }
  ${object()};
`;

export const Model = styled.div`
  position: absolute;
  width: ${((250 + 15) / 4) - 15}px;
  height: 100%;
  &:nth-child(1) {
    left: ${0}px;
  }
  &:nth-child(2) {
    left: ${(250 + 15) / 4}px;
  }
  &:nth-child(3) {
    left: ${(250 + 15) / 4 * 2}px;
  }
  &:nth-child(4) {
    left: ${(250 + 15) / 4 * 3}px;
  }
  ${object()};
`;

export const Component = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  ${component()};
`;

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  line-height: ${20}px;
  ${Component} > &:nth-child(1) {
    top: ${5}px;
  }
  ${Component} > &:nth-child(2) {
    bottom: ${5}px;
  }
  ${Model} > & {
    top: ${4 + 15}px;
  }
  ${label()};
`;

function object() {
  return css`
    border-radius: 10px;
    background-color: ${rgba(black, 0.4)};
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

function component() {
  return css`
    border: 1px solid ${rgba(black, 0.4)};
    border-radius: 9px;
    background-color: ${rgba(black, 0.4)};
    & > & {
      border-radius: 8px;
    }
    & > & > & {
      border-radius: 7px;
    }
  `;
}

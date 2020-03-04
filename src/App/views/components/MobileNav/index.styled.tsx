import styled, {css} from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

interface Open {
  open: boolean;
}

export const Root = styled.div`
  height: 48px;
`;

export const Body = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48px;
  background-color: ${black};
  display: flex;  
  justify-content: space-between;
  align-items: center;
  color: white;
  & > div {
    position: relative;
    & > a,
    & > button {
      ${item()};
    }
    & > .here {
      text-decoration: underline;
    }
  }
`;

export const Menu = styled.div<Open>`
  position: absolute;
  top: -${(48 * 3) + (4 * 3)}px;
  right: 4px;
  width: 48px;
  height: ${(48 * 3) + (4 * 3)}px;
  display: ${p => p.open ? 'flex' : 'none'};
  flex-direction: column;
  box-sizing: border-box;
  & > div {
    background-color: ${black};
    border-radius: 50%;
    margin-bottom: 4px;
    & > a {
      ${item()};
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border: 1px solid white;
        border-radius: 50%;
      }
    }
  }
`;

function item() {
  return css`
    display: block;
    box-sizing: border-box;
    min-width: 48px;
    padding: 16px;
    line-height: 16px;
    font-size: 15px;
    text-align: center;
  `;
}


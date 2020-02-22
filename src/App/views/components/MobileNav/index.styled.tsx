import styled from 'styled-components';
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
  padding: 0 16px;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 15px;
`;

export const Item = styled.div`
  &:nth-child(1) {
    font-size: 32px;
  }
  &:nth-child(6) {
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    position: relative;
  }
`;

export const Option = styled.div`
`;

export const Button = styled.div`
`;

export const Menu = styled.div<Open>`
  position: absolute;
  top: -${(32 * 3) + (8 * 5)}px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: ${(32 * 3) + (8 * 5)}px;
  background-color: ${black};
  font-size: 20px;
  padding: 8px 0;
  display: ${p => p.open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 4px;
`;

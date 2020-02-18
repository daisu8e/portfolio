import styled from 'styled-components';
import {mix, rgba} from 'polished';

const black =  mix(0.8, 'black', 'white');

interface Size {
  size: number;
}

export const Root = styled.div<Size>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  text-align: center;
  & > a {
    font-size: ${p => p.size}px;
    line-height: ${p => p.size}px;
    color: ${black};
    &:hover {
      color: ${rgba(black, 0.8)};
    }
  }
`;

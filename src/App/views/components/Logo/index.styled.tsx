import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

interface Size { size: number; }

export const Root = styled.div<Size>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  line-height: ${p => p.size}px;
  border-radius: ${p => p.size / 2}px;
  background-color: ${black};
  text-align: center;
  font-size: ${p => p.size * 0.75}px;
  color: white;
`;

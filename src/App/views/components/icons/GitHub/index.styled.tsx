import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  line-height: 1em;
  text-align: center;
  color: ${black};
`;

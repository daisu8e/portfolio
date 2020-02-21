import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${black};
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.9em;
    height: 0.9em;
    border: 0.04em solid white;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

export const Text = styled.div`
  font-size: 0.68em;
  color: white;
`;

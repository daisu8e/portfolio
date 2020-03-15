import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Root = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${black};
`;

export const Ring1 = styled.div`
  position: absolute;
  font-size: 0.80em;
  width: 1em;
  height: 0.24em;
  left: calc(50% - (1em / 2) - 0.016em);
  top: calc(50% - (0.24em / 2) + 0.024em);
  transform: rotate(24deg);
  border: 0.01em solid;
  border-color: white transparent transparent transparent;
  border-radius: 50%;
  box-shadow: ${black} 0.01em 0.01em;
  box-sizing: border-box;
`;

export const Ring2 = styled.div`
  position: absolute;
  font-size: 0.80em;
  width: 1em;
  height: 0.24em;
  left: calc(50% - (1em / 2) - 0.016em);
  top: calc(50% - (0.24em / 2) + 0.024em);
  transform: rotate(24deg);
  border: 0.01em solid;
  border-color: transparent white white white;
  border-radius: 50%;
  box-shadow: ${black} 0.01em 0.01em;
  box-sizing: border-box;
`;

export const Text1 = styled.div`
  position: absolute;
  font-size: 0.64em;
  text-align: center;
  width: 1em;
  height: 1em;
  line-height: 1em;
  left: calc(50% - 0.5em);
  top: calc(50% - 0.5em);
  transform: translateX(-0.16em);
  color: white;
  text-shadow: 0.01em 0.01em ${black};
`;

export const Text2 = styled.div`
  position: absolute;
  font-size: 0.64em;
  text-align: center;
  width: 1em;
  height: 1em;
  line-height: 1em;
  left: calc(50% - 0.5em);
  top: calc(50% - 0.5em);
  transform: translateX(0.28em);
  color: white;
  text-shadow: 0.01em 0.01em ${black};
`;

export const Text3 = styled.div`
  position: absolute;
  font-size: 0.9em;
  width: 1em;
  height: 1em;
  left: calc(50% - 0.5em);
  top: calc(50% - 0.5em);
  transform: rotate(24deg);
  color: white;
  & > span {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0.064em;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform-origin: center;
    &:nth-child(1) { transform: rotate(calc(-5deg + (-5deg * 2 * 4))); }
    &:nth-child(2) { transform: rotate(calc(-5deg + (-5deg * 2 * 3))); }
    &:nth-child(3) { transform: rotate(calc(-5deg + (-5deg * 2 * 2))); }
    &:nth-child(4) { transform: rotate(calc(-5deg + (-5deg * 2 * 1))); }
    &:nth-child(5) { transform: rotate(calc(-5deg + (-5deg * 2 * 0))); }
    &:nth-child(6) { transform: rotate(calc(5deg + (5deg * 2 * 0))); }
    &:nth-child(7) { transform: rotate(calc(5deg + (5deg * 2 * 1))); }
    &:nth-child(8) { transform: rotate(calc(5deg + (5deg * 2 * 2))); }
    &:nth-child(9) { transform: rotate(calc(5deg + (5deg * 2 * 3))); }
    &:nth-child(10) { transform: rotate(calc(5deg + (5deg * 2 * 4))); }
  }
`;

export const Text4 = styled.div`
  position: absolute;
  font-size: 0.9em;
  width: 1em;
  height: 1em;
  left: calc(50% - 0.5em);
  top: calc(50% - 0.5em);
  transform: rotate(24deg);
  color: white;
  & > span {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0.064em;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transform-origin: center;
    &:nth-child(1) { transform: rotate(60deg); }
    &:nth-child(2) { transform: rotate(50deg); }
    &:nth-child(3) { transform: rotate(40deg); }
    &:nth-child(4) { transform: rotate(30deg); }
    &:nth-child(5) { transform: rotate(20deg); }
    &:nth-child(6) { transform: rotate(10deg); }
    &:nth-child(7) { transform: rotate(0deg); }
    &:nth-child(8) { transform: rotate(-10deg); }
    &:nth-child(9) { transform: rotate(-20deg); }
    &:nth-child(10) { transform: rotate(-30deg); }
    &:nth-child(11) { transform: rotate(-40deg); }
    &:nth-child(12) { transform: rotate(-50deg); }
    &:nth-child(13) { transform: rotate(-60deg); }
  }
`;

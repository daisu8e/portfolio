import styled from 'styled-components';
import {mix} from 'polished';

const size = 100;
const color1 = mix(1.0, 'black', 'white');
const color2 = mix(0.8, 'black', 'white');
const color3 = mix(0.6, 'black', 'white');
const color4 = mix(0.4, 'black', 'white');
const color5 = mix(0.2, 'black', 'white');
const color6 = mix(0.0, 'black', 'white');
const step = 10;
const angle = 45;

export const Corner1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${size}px;
  height: ${size}px;
  background-image: linear-gradient(
      ${angle * 3}deg,
      ${color1} ${step * 0}%, ${color1} ${step * 1}%,
      ${color2} ${step * 1}%, ${color2} ${step * 2}%,
      ${color3} ${step * 2}%, ${color3} ${step * 3}%,
      ${color4} ${step * 3}%, ${color4} ${step * 4}%,
      ${color5} ${step * 4}%, ${color5} ${step * 5}%,
      ${color6} ${step * 5}%
  );
`;

export const Corner2 = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${size}px;
  height: ${size}px;
  background-image: linear-gradient(
      ${angle * 3 + 90}deg,
      ${color1} ${step * 0}%, ${color1} ${step * 1}%,
      ${color2} ${step * 1}%, ${color2} ${step * 2}%,
      ${color3} ${step * 2}%, ${color3} ${step * 3}%,
      ${color4} ${step * 3}%, ${color4} ${step * 4}%,
      ${color5} ${step * 4}%, ${color5} ${step * 5}%,
      ${color6} ${step * 5}%
  );
`;

export const Corner3 = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${size}px;
  height: ${size}px;
  background-image: linear-gradient(
      ${angle * 3 + 90 * 2}deg,
      ${color1} ${step * 0}%, ${color1} ${step * 1}%,
      ${color2} ${step * 1}%, ${color2} ${step * 2}%,
      ${color3} ${step * 2}%, ${color3} ${step * 3}%,
      ${color4} ${step * 3}%, ${color4} ${step * 4}%,
      ${color5} ${step * 4}%, ${color5} ${step * 5}%,
      ${color6} ${step * 5}%
  );
`;

export const Corner4 = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${size}px;
  height: ${size}px;
  background-image: linear-gradient(
      ${angle * 3 + 90 * 3}deg,
      ${color1} ${step * 0}%, ${color1} ${step * 1}%,
      ${color2} ${step * 1}%, ${color2} ${step * 2}%,
      ${color3} ${step * 2}%, ${color3} ${step * 3}%,
      ${color4} ${step * 3}%, ${color4} ${step * 4}%,
      ${color5} ${step * 4}%, ${color5} ${step * 5}%,
      ${color6} ${step * 5}%
  );
`;

export const BackgroundImage = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  transform: rotate(12deg);
  opacity: 0.4;
`;

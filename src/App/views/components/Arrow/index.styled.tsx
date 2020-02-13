import styled, {css} from 'styled-components';

interface Width { width: number; }
interface Height { height: number; }
interface Color { color: string; }
interface Angle { angle: number; }

export const Root = styled.div<Width & Height & Angle>`
  position: relative;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  transform: rotate(${p => p.angle}deg);
`;

export const Line = styled.div<Width & Height & Color>`
  position: absolute;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  ${p => line(p.color)};
`;

export const Point = styled.div<Width & Height>`
  position: absolute;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  top: 50%;
  right: 0;
  transform: translateY(-50%) rotate(90deg);
`;

function line(color: string) {
  return css`
    background-color: ${color};
  `;
}

import styled, {css} from 'styled-components';

interface Width { width: number; }
interface Height { height: number; }
interface Color { color: string; }

export const Root = styled.div<Width & Height>`
  position: relative;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`;

export const Body = styled.div<Width & Height & Color>`
  position: absolute;
  left: 0;
  top: 0;
  ${body()};
  border-left-width: ${p => p.width / 2}px;
  border-right-width: ${p => p.width / 2}px;
  border-bottom-width: ${p => p.height}px;
  border-bottom-color: ${p => p.color};
`;

function body() {
  return css`
    border: 0 solid transparent;
  `;
}

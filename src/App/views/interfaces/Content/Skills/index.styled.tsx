import styled, {css} from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Body = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 5vw;
  color: ${black};
  & > h1 {
    font-size: ${3 * 27}px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

export const Field = styled.div`
  border: 1px solid ${black};
  border-radius: 9px;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 15px;
  & > h2, h3 {
    font-size: ${3 * 8}px;
    margin-bottom: 15px;
  }
  ${list()};
`;

export const Layer = styled.div`
  margin-top: ${15 * 2}px;
  & > h4 {
    font-size: ${3 * 5}px;
    margin-bottom: 15px;
  }
  ${list()};
`;

export const Columns2 = styled.div`
  display: grid;
  grid-gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function list() {
  return css`
    & > ul {
      margin-bottom: 15px;

      & > li,
      & > ul > li {
        font-size: 3px * 5;
        line-height: 1.5;

        & > em {
          font-weight: bold;
        }
      }
    }
  `;
}

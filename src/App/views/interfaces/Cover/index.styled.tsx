import styled, {css} from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      ${45 * 3}deg,
      ${black} ${0}%, ${black} ${50}%,
      transparent ${50}%
  );
`;

export const Artwork = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  @media (min-aspect-ratio: 1/1) {
    font-size: calc(58vh + (100vw - 100vh) / 3.4);
  }
  @media (max-aspect-ratio: 1/1) {
    font-size: calc(58vw + (100vh - 100vw) / 3.4);
  }
`;

export const Title = styled.div`
  position: fixed;
  right: 16px;
  text-align: right;
  color: ${black};
  @media (min-aspect-ratio: 16/9) {
    top: 16px;
    font-size: calc(1.75vw + (100vw - 100vh) * 0.1);
  }
  @media (max-aspect-ratio: 16/9) {
    top: calc((100vh / 3) - (100vw - 100vh) * 0.3);
    font-size: calc(8.5vw - (100vw - 100vh) * 0.025);
  }
  @media (max-aspect-ratio: 1/1) {
    top: calc((100vh / 3) + (100vh - 100vw) * 0.3);
    font-size: calc(8.5vw + (100vh - 100vw) * 0.025);
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > h1 {
    width: 5em;
  }
  & > p {
    font-size: 0.35em;
    margin-right: 0.2em;
    line-height: 2;
    & > a {
      margin-left: 0.8em;
    }
  }
`;

export const Contents = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  color: ${black};
  display: flex;
  & > a {
    display: block;
    margin-left: 0.8em;
    &:hover {
      & > h2 {
        text-decoration: underline;
      }
    }
    & > ul {
      & > li {
        font-size: 0.3em;
      }
    }
    ${list()};
  }
  @media (min-aspect-ratio: 16/9) {
    font-size: calc(5.1vw - (100vw - 100vh) * 0.025);
  }
  @media (max-aspect-ratio: 16/9) {
    font-size: calc(5.1vw - (100vw - 100vh) * 0.025);
  }
  @media (max-aspect-ratio: 1/1) {
    font-size: calc(4.05vw + (100vh - 100vw) * 0.025);
  }
`;

function list() {
  return css`
    & > ul {
      list-style: none;
      padding: 0;
      & > li {
        line-height: 2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:before {
          content: '-';
          padding-left: 0.4em;
          padding-right: 0.8em;
        }
      }
    }
  `;
}

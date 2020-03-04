import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Header = styled.div`
  position: fixed;
  width: ${100 / 8}vw;
  height: ${100 / 8}vw;
  background-image: linear-gradient(
      ${45 * 3}deg,
      ${black} ${0}%, ${black} ${50}%,
      transparent ${50}%
  );
  color: ${black};
  & > a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    & > div {
      position: absolute;
      &:nth-child(1) {
        left: 0.5vw;
        top: 0.5vw;
        font-size: ${100 / 8 / 2}vw;
      }
      &:nth-child(2) {
        bottom: 0;
        width: 100%;
        text-align: right;
        font-size: ${1.9}vw;
        & > small {
          display: block;
          margin-top: 0.2em;
          margin-right: 0.1em;
          font-size: 0.5em;
        }
      }
    }
  }
`;

export const MobileHeader = styled.div`
  height: ${(32 * 2 + 4) / 2}px;
  & > div {
    position: fixed;
    width: ${32 * 2 + 4}px;
    height: ${32 * 2 + 4}px;
    background-image: linear-gradient(
        ${45 * 3}deg,
        ${black} ${0}%, ${black} ${50}%,
        transparent ${50}%
    );
    color: ${black};
    & > a {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      & > div {
        position: absolute;
        &:nth-child(1) {
          left: 4px;
          top: 4px;
          font-size: 32px;
        }
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${100 / 8}vw;
  text-align: right;
  & > a {
    display: block;
    padding: 8px 0;
    font-size: ${2}vw;
    color: ${black};
    &.here {
      text-decoration: underline;
    }
    &:hover,
    &.here:hover {
      text-decoration: underline;
    }
  }
`;

export const Sns = styled.div`
  position: fixed;
  left: calc(${100 / 8}vw - ${3 * 6}px);
  bottom: 15px;
  width: ${3 * 6}px;
  text-align: center;
  & > a {
    display: block;
    padding: 4px 0;
    font-size: ${3 * 6}px;
    color: ${black};
  }
`;

export const Body = styled.div`
  @media (min-aspect-ratio: 4/3) {
    padding-left: 0;
  }
  @media (max-aspect-ratio: 4/3) {
    padding-left: ${100 / 8}vw;
  }
  @media (max-aspect-ratio: 1/1) {
    padding-left: 0;
  }
`;

export const WideWindow = styled.div`
  @media (orientation: landscape) {
    display: block;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

export const NarrowWindow = styled.div`
  @media (orientation: landscape) {
    display: none;
  }
  @media (orientation: portrait) {
    display: block;
  }
`;

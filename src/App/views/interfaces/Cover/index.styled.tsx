import styled from 'styled-components';
import {mix, rgba} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Name = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  color: ${black};
  & > p {
    & > a {
      display: inline-block;
    }
  }
  @media (min-aspect-ratio: 1/1) {
    font-size: 10.5vw;
    & > h1 {
      margin: 0.2vw;
      font-size: 1em;
    }
    & > p {
      margin-left: 1.1vw;
      font-size: 0.25em;
      & > a {
        margin-left: 1vw;
        font-size: 0.8em;
        &:nth-child(1) {
          margin-left: 1.5vw;
        }
      }
    }
  }
  @media (max-aspect-ratio: 1/1) {
    font-size: 15.5vw;
    & > h1 {
      margin: 2.5vw;
      font-size: 1em;
    }
    & > p {
      margin-left: 4vw;
      font-size: 0.25em;
      & > a {
        margin-left: 2vw;
        font-size: 0.8em;
        &:nth-child(1) {
          margin-left: 3vw;
        }
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  display: grid;
  grid-gap: 1px;
  & > a {
    color: white;
    &:nth-child(1) {
      background-color: ${rgba(black, 0.4)};
    }
    &:nth-child(2) {
      background-color: ${rgba(black, 0.6)};
    }
    &:nth-child(3) {
      background-color: ${rgba(black, 0.8)};
    }
    &:nth-child(4) {
      background-color: ${rgba(black, 1.0)};
    }
    &:hover {
      color: ${black};
      background-color: white;
      position: relative;
      &:before {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        border: 1px solid ${black};
        box-sizing: border-box;
      }
    }
  }
  @media (min-aspect-ratio: 4/3) {
    right: 1.25vw;
    bottom: 1.25vw;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    & > a {
      width: 22vw;
      height: 22vw;
    }
  }
  @media (max-aspect-ratio: 4/3) {
    right: 1.5vw;
    bottom: 1.5vw;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    & > a {
      width: 29vw;
      height: 29vw;
      &:nth-child(1) {
          grid-column-start: 3;
      }
    }
  }
  @media (max-aspect-ratio: 3/4) {
    right: 3vw;
    bottom: 3vw;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    & > a {
      width: 40vw;
      height: 40vw;
      &:nth-child(1) {
          grid-column-start: 1;
      }
    }
  }
  @media (max-aspect-ratio: 9/16) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    & > a {
      width: 42vw;
      height: 42vw;
      &:nth-child(1) {
          grid-column-start: 2;
      }
      &:nth-child(2) {
          grid-column-start: 2;
      }
    }
  }
`;

export const Content = styled.div`
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
        padding-left: 3px;
        padding-right: 8px;
      }
    }
  }
  @media (min-aspect-ratio: 4/3) {
    font-size: 3vw;
    padding: 1.5vw;
    & > h2 {
      font-size: 1em;
    }
    & > ul {
      margin-top: 1.5vw;
      & > li {
        font-size: 0.4em;
      }
    }
  }
  @media (max-aspect-ratio: 4/3) {
    font-size: 4vw;
    padding: 2vw;
    & > h2 {
      font-size: 1em;
    }
    & > ul {
      margin-top: 1.5vw;
      & > li {
        font-size: 0.45em;
      }
    }
  }
  @media (max-aspect-ratio: 3/4) {
    font-size: 5vw;
    padding: 2.5vw;
    & > h2 {
      font-size: 1em;
    }
    & > ul {
      margin-top: 1.5vw;
      & > li {
        font-size: 0.55em;
      }
    }
  }
`;

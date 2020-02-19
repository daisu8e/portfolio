import styled from 'styled-components';
import {mix, rgba} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Name = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  color: ${black};
  & > h1 {
    font-size: ${3 * 55 + 1}px;
  }
  & > p {
    font-size: ${3 * 10}px;
    margin-left: 15px;
    & > a {
      display: inline-block;
      font-size: ${3 * 8}px;
      margin-left: 15px;
      &:nth-child(1) {
        margin-left: ${15 * 2}px;
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  & > a {
    width: 250px;
    height: 250px;
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
`;

export const Content = styled.div`
  padding: 15px;
  & > h2 {
    font-size: ${3 * 13}px;
  }
  & > ul {
    margin-top: 15px;
    list-style: none;
    padding: 0;
    & > li {
      font-size: 15px;
      line-height: 2;
      &:before {
        content: '-';
        padding-left: 3px;
        padding-right: 8px;
      }
    }
  }
`;

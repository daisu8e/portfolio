import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Name = styled.div`
  position: fixed;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  width: 100%;
  text-align: center;
  color: ${black};
  & > h1 {
    font-size: ${3 * 22}px;
  }
  & > p {
    font-size: 15px;
    margin-top: 15px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -60%);
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  & > a {
    color: ${black};
    &:hover {
      color: white;
      background-color: ${black};
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

export const Sns = styled.div`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  & > a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: ${black};
    font-size: ${3 * 8}px;
  }
`;

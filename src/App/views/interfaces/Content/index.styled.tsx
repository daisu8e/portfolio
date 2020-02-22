import styled from 'styled-components';
import {mix, rgba} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Name = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  font-size: ${3 * 8}px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.8);
  & > a {
    display: block;
    padding: 15px;
    color: ${black};
  }
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  & > a {
    display: block;
    width: ${15 * 14}px;
    padding: 15px;
    font-size: ${3 * 8}px;
    color: ${black};
    text-align: right;
    &.here {
      color: white;
      background-color: ${rgba(black, 0.4)};
    }
    &:hover,
    &.here:hover {
      color: white;
      background-color: ${black};
    }
  }
`;

export const Content = styled.div`
  color: ${black};
  & > h2 {
    font-size: ${3 * 13}px;
    & > a {
      text-decoration-line: none;
      color: ${black};
    }
  }
  & > ul {
    margin-top: ${15 * 2}px;
    list-style: none;
    padding: 0;
    & > li {
      line-height: 2;
      &:before {
        content: '-';
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  }
`;

export const Sns = styled.div`
  position: fixed;
  left: 0;
  bottom: 15px;
  & > a {
    display: block;
    padding: 7px 15px;
//    margin-top: ${3 * 5}px;
    font-size: ${3 * 6}px;
    color: ${black};
  }
`;

export const Body = styled.div`
`;

export const Mobile = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: block;
  }
`;



import styled from 'styled-components';
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
    margin-bottom: ${15 * 2}px;
  }
  & > article {
    margin-bottom: ${15 * 3}px;
    & > h2 {
      margin-bottom: 15px;
      font-size: ${3 * 9}px;
      & > em {
        font-weight: bold;
      }
    }
    & > p {
      margin-bottom: 15px;
      font-size: ${3 * 5}px;
      line-height: 1.5;
      & > em {
        font-weight: bold;
      }
    }
    & > ul {
      margin-bottom: 15px;
      & > li {
        font-size: ${3 * 5}px;
        line-height: 1.5;
        & > em {
          font-weight: bold;
        }
      }
    }
  }
`;

export const Figure = styled.div`
  position: relative;
  margin: ${16 * 3}px 0;
//  width: 500px;
//  margin: ${15 * 3}px auto;
  text-align: center;
  @media (min-width: 320px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: ${320 + 16 * 2}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

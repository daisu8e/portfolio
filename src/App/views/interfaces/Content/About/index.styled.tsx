import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Body = styled.div`
  color: ${black};
  & > h1 {
    font-size: ${3 * 27}px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  & > article {
    margin-bottom: 60px;
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

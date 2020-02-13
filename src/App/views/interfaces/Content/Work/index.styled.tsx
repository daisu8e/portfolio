import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');
const timeline = 50;

export const Body = styled.div`
  color: ${black};

  & > h1 {
    font-size: ${3 * 27}px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

export const Year = styled.div`
  font-size: ${3 * 5}px;
  height: ${timeline}px;
  
  position: relative;
  & > span {
    position: absolute;
    width: ${timeline}px;
    height: ${timeline}px;
    line-height: ${timeline}px;
    text-align: center;
    border: 1px solid ${black};
    border-radius: 50px;
    box-sizing: border-box;
  }
`;

export const Period = styled.div`
  border-left: 1px solid ${black};
  box-sizing: border-box;
  margin-left: ${timeline / 2}px;
  padding-left: ${15 * 5}px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Before = styled(Period)`
  border-left-style: dashed;
  box-sizing: border-box;
  height: ${15 * 5}px;
`;

export const Project = styled.div`
  & > h2 {
    font-size: ${3 * 9}px;
  }

  & > p {
    font-size: ${3 * 5}px;
    line-height: 1.5;
    margin-top: 15px;

    & > em {
      font-weight: bold;
    }
  }

  & > ul {
    margin-top: 15px;

    & > li,
    & > ul > li {
      font-size: ${3 * 5}px;
      line-height: 1.5;

      & > em {
        font-weight: bold;
      }
    }

    & > ul + li {
      margin-top: 15px;
    }
  }

  & + & {
    margin-top: ${15 * 4}px;
  }
`;

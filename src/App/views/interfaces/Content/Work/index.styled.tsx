import styled from 'styled-components';
import {mix} from 'polished';

const black =  mix(0.8, 'black', 'white');

export const Body = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 5vw 5vw 0;
  color: ${black};

  & > h1 {
    font-size: ${3 * 27}px;
    text-transform: uppercase;
    margin-bottom: 2.5vw;
  }
`;

export const Year = styled.div`
  font-size: ${3 * 5}px;
  width: ${50}px;
  height: ${50}px;
  text-align: center;
  line-height: ${50}px;
  position: relative;
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    border: 1px solid ${black};
    border-radius: ${50 / 2}px;
    box-sizing: border-box;
  }
`;

export const Period = styled.div`
  border-left: 1px solid ${black};
  box-sizing: border-box;
  margin-left: ${50 / 2}px;
  padding-left: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Before = styled(Period)`
  border-left-style: dashed;
  box-sizing: border-box;
  height: 5vw;
`;

export const Project = styled.div`
  & > h2 {
    font-size: ${3 * 9}px;
    & > a {
      text-decoration: underline;
    }
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
      
      & a {
        text-decoration: underline;
      }

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

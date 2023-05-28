import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
  padding: 100px 30px;
`;

export const Title = styled.h2`
  width: 400px;
  height: auto;

  padding: 30px 0px;
  margin: 0 auto;
  text-align: center;
  background-color: white;

  font-family: 'Courier New';
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 400px;
  height: auto;
  margin: 0 auto;

`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 25%;
  padding: 10px 0px;
  background-color: ${getRandomHexColor};
`;

export const SpanLabel = styled.span`
  font-family: 'Courier New';
  font-weight: 500;
  color: white;
`;

export const SpanPercentage = styled.span`
  font-family: 'Courier New';
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

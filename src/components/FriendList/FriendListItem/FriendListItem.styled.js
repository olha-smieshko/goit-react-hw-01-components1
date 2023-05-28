import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-basis: 100%;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 20px 20px;
  background-color: white;
  border-radius: 10px;
  /* border: 1px solid black; */
  box-shadow: 0 10px 10px #777;
  p {
    font-family: 'Courier New';
    font-weight: 600;
    font-size: 20px;
  }
`;

export const SpanStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${({isOnline})=> isOnline ? 'green' : 'red'};
`
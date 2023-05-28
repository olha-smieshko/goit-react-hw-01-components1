import styled from 'styled-components';

export const Table = styled.table`
  margin: 100px auto;
  table-layout: fixed;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 15px;

  th {
    padding: 15px 0px;
    width: 300px;
    background-color: rgb(30, 132, 176);
    color: white;
    font-size: 20px;
  }
  td {
    padding: 15px 0px;

    width: 300px;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: rgb(173, 216, 234);
  }
  tr:nth-child(odd) {
    background-color: white;
  }
`;

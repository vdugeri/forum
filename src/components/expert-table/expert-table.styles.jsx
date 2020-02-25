import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 4rem 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 1.6rem;
  background-color: #fff;
  padding: 4rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`;

export const TableHead = styled.thead`
  width: 100%;
  // background-color: #eee;
  text-transform: uppercase;
  padding-left: 3rem;
`;

export const HeaderRow = styled.tr`
  font-size: 1.4rem;
`;

export const TableRow = styled.tr`
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;

  &: nth-child(even) {
    background-color: #f7fbfd;
  }
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const HeaderItem = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
`;

export const TableItem = styled.td`
  padding: 0.6rem 2rem;
`;

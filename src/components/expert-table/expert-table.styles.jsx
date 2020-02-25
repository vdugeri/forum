import styled from "styled-components";
import Button from "components/custom-button/custom-button.component";

export const ExpertTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  width: 100%;
  background-color: #eee;
`;

export const TableMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 2rem;
  font-size: 1.8rem;
`;

export const StyledButton = styled(Button)`
  border-radius: 5px;
  height: 5rem;
`;

export const ExpertsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 5rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  min-height: 900px;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableHeader = styled.thead`
  width: 100%;
  height: 6rem;
`;

export const HeaderItem = styled.th`
  border: 1px solid #ddd;
  text-align: left;
  background-color: #4caf50;
  color: white;
`;

export const TableRow = styled.tr`
  height: 6rem;
`;

export const RowItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  height: 6rem;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

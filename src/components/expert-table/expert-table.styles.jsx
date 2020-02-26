import styled from "styled-components";
import CustomButton from "components/custom-button/custom-button.component";

export const TableContainer = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 4rem 2rem;
`;

export const StyledButton = styled(CustomButton)`
  border-radius: 5px;
  height: 5rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 1.6rem;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`;

export const TableHead = styled.thead`
  width: 100%;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;

  & span {
    font-size: 1.6rem;
  }
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

export const Pagination = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  background-color: #fff;
  width: 100%;
`;

export const LinkContainer = styled.span`
  display: flex;
  border: 1px solid #eee
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  border-radius: 2.5px;
  padding: 1rem 1.5rem;
  margin-left: 1.5rem;

  &:hover {
    background-color: #dcdcdc;
  }
`;

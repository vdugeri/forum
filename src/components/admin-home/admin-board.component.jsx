import React from "react";
import styled from "styled-components";
import StatContainer from "components/stat-container/stat-container.component";
import Icon from "components/icon/icon.component";

const AdminBoardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 4rem;
  padding: 2rem;
  background-color: #eee;
`;

const AdminBoard = () => (
  <AdminBoardContainer>
    <StatContainer title="Users" number={50}>
      <Icon name="users" />
    </StatContainer>
    <StatContainer title="Posts" number={50}>
      <Icon name="posts" />
    </StatContainer>
    <StatContainer title="Subjects" number={50}>
      <Icon name="topics" />
    </StatContainer>
  </AdminBoardContainer>
);

export default AdminBoard;

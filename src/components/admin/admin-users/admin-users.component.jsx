import React from "react";
import {
  ListContainer,
  Actions,
  StyledButton,
  Table,
  HeaderRow,
  TableHead,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
  Pagination,
  LinkContainer,
} from "components/experts/expert-table/expert-table.styles";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/shared/loader/loader.component";
import Icon from "components/shared/icon.component";

const AdminUsers = () => {
  const [{ loading, data: users }] = useFetch("/users?admin=true", [
    { users: [] },
  ]);
  return (
    <ListContainer>
      <Actions>
        <span>
          1 - {users.length} of {users.length}
        </span>
        <StyledButton primary>
          <Icon name="addUser" />
          Add Admin
        </StyledButton>
      </Actions>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHead>
            <HeaderRow>
              <HeaderItem>First Name</HeaderItem>
              <HeaderItem>Last Name</HeaderItem>
              <HeaderItem>Email Address</HeaderItem>
            </HeaderRow>
          </TableHead>
          <TableBody>
            {users.map((admin, index) => (
              <TableRow key={index}>
                <TableItem>{admin.firstName}</TableItem>
                <TableItem>{admin.lastName}</TableItem>
                <TableItem>{admin.emailAddress}</TableItem>
              </TableRow>
            ))}
          </TableBody>
          <Pagination>
            <span>Page 1 of 1 </span>
            <LinkContainer>
              <Icon name="backArrow" />
            </LinkContainer>
            <LinkContainer>
              <Icon name="nextArrow" />
            </LinkContainer>
          </Pagination>
        </Table>
      )}
    </ListContainer>
  );
};

export default AdminUsers;

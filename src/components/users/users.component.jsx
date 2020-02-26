import React from "react";
import useFetch from "effects/use-fetch.effect";
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
  Image,
  Pagination,
  LinkContainer
} from "components/expert-table/expert-table.styles";
import Spinner from "components/loader/loader.component";
import Icon from "components/icon/icon.component";

const Users = () => {
  const [{ loading, data: users }] = useFetch("/users", [{ users: [] }]);
  return (
    <ListContainer>
      <Actions>
        <span>
          1 - {users.length} of {users.length}
        </span>
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
              <HeaderItem>Active</HeaderItem>
            </HeaderRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableItem>{user.firstName}</TableItem>
                <TableItem>{user.lastName}</TableItem>
                <TableItem>{user.emailAddress}</TableItem>
                <TableItem>{user.isActive}</TableItem>
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

export default Users;

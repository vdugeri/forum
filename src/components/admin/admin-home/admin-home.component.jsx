import React from "react";
import { withRouter } from "react-router-dom";
import {
  Sidebar,
  MenuItem,
  StyledLink,
} from "components/admin/admin-home/admin-home.styles";
import Icon from "components/shared/icon.component";
import AdminBoard from "components/admin/admin-home/admin-board.component";

const AdminHome = () => <AdminBoard />;

export const SideNav = ({ history }) => {
  const {
    location: { pathname },
  } = history;
  return (
    <Sidebar>
      <StyledLink to="/admin">
        <MenuItem active={pathname === "/admin"}>
          <Icon name="home" />
          Home
        </MenuItem>
      </StyledLink>
      <StyledLink to="/admin/experts">
        <MenuItem active={pathname === "/admin/experts"}>
          <Icon name="experts" />
          Experts
        </MenuItem>
      </StyledLink>
      <StyledLink to="/admin/subjects">
        <MenuItem active={pathname === "/admin/subjects"}>
          <Icon name="subjects" />
          Subjects
        </MenuItem>
      </StyledLink>
      <StyledLink to="/admin/admins">
        <MenuItem active={pathname === "/admin/admins"}>
          <Icon name="admins" />
          Admins
        </MenuItem>
      </StyledLink>
      <StyledLink to="/admin/users">
        <MenuItem active={pathname === "/admin/users"}>
          <Icon name="users" />
          Users
        </MenuItem>
      </StyledLink>
    </Sidebar>
  );
};

export default withRouter(AdminHome);

export const Experts = () => <h2>Experts</h2>;

export const Users = () => <h2>Users</h2>;

export const Subjects = () => <h2>Subjects</h2>;

export const Admins = () => <h2>Admins</h2>;

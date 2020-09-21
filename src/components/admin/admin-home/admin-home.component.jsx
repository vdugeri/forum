import React from "react";
import styled from "styled-components";
import { withRouter, Switch, Route } from "react-router-dom";
import AdminBoard from "components/admin/admin-home/admin-board.component";
import Sidebar from "components/admin/sidebar/sidebar.component";

const AdminHome = () => <AdminBoard />;

const Wrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  margin-left: 15%;
`;

export const SideNav = ({ history }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Switch>
        <MainContent>
          <Route exact path="/admin" component={AdminHome} />
        </MainContent>
      </Switch>
    </Wrapper>

    // <Sidebar>
    //   <StyledLink to="/admin">
    //     <MenuItem active={pathname === "/admin"}>
    //       <Icon name="home" />
    //       Home
    //     </MenuItem>
    //   </StyledLink>
    //   <StyledLink to="/admin/experts">
    //     <MenuItem active={pathname === "/admin/experts"}>
    //       <Icon name="experts" />
    //       Experts
    //     </MenuItem>
    //   </StyledLink>
    //   <StyledLink to="/admin/subjects">
    //     <MenuItem active={pathname === "/admin/subjects"}>
    //       <Icon name="subjects" />
    //       Subjects
    //     </MenuItem>
    //   </StyledLink>
    //   <StyledLink to="/admin/admins">
    //     <MenuItem active={pathname === "/admin/admins"}>
    //       <Icon name="admins" />
    //       Admins
    //     </MenuItem>
    //   </StyledLink>
    //   <StyledLink to="/admin/users">
    //     <MenuItem active={pathname === "/admin/users"}>
    //       <Icon name="users" />
    //       Users
    //     </MenuItem>
    //   </StyledLink>
    // </Sidebar>
  );
};

export default withRouter(AdminHome);

export const Experts = () => <h2>Experts</h2>;

export const Users = () => <h2>Users</h2>;

export const Subjects = () => <h2>Subjects</h2>;

export const Admins = () => <h2>Admins</h2>;

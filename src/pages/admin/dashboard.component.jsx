import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { SideNav } from "components/admin/admin-home/admin-home.component";
import AdminUsers from "components/admin/admin-users/admin-users.component";
import AdminBoard from "components/admin/admin-home/admin-board.component";
import ExpertTable, {
  Expert,
} from "components/experts/expert-table/expert-table.component";
import Subjects from "components/topics/subjects/subjects.component";
import Users from "components/users/users.component";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;

const AdminDashboard = ({ history }) => {
  return (
    <DashboardWrapper>
      <SideNav history={history} />
      <Switch>
        <Route exact path="/admin" component={AdminBoard} />
        <Route exact path="/admin/experts" component={ExpertTable} />
        <Route path="/admin/subjects" component={Subjects} />
        <Route path="/admin/admins" component={AdminUsers} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/experts/:expertId" component={Expert} />
      </Switch>
    </DashboardWrapper>
  );
};

export default withRouter(AdminDashboard);

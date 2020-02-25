import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import {
  SideNav,
  Users,
  Subjects,
  Admins
} from "components/admin-home/admin-home.component";
import AdminBoard from "components/admin-home/admin-board.component";
import ExpertTable from 'components/expert-table/expert-table.component';

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
        <Route path="/admin/experts" component={ExpertTable} />
        <Route path="/admin/subjects" component={Subjects} />
        <Route path="/admin/admins" component={Admins} />
        <Route path="/admin/users" component={Users} />
      </Switch>
    </DashboardWrapper>
  );
};

export default withRouter(AdminDashboard);

import React, { useState } from "react";
import {
  Wrapper,
  Sidebar,
  MenuItem,
  StyledLink,
} from "components/admin-home/admin-home.styles";
import Icon from "components/icon/icon.component";

const AdminHome = () => {
  const [active, setActive] = useState("home");
  return (
    <Wrapper>
      <Sidebar>
        <MenuItem onClick={() => setActive("home")} active={active === "home"}>
          <Icon name="home" />
          Home
        </MenuItem>
        <MenuItem
          onClick={() => setActive("experts")}
          active={active === "experts"}
        >
          <Icon name="experts" />
          <StyledLink to="/admin/dashboard/experts">Experts</StyledLink>
        </MenuItem>
        <MenuItem
          onClick={() => setActive("subjects")}
          active={active === "subjects"}
        >
          Subjects
        </MenuItem>
        <MenuItem
          onClick={() => setActive("admins")}
          active={active === "admins"}
        >
          Admins
        </MenuItem>
        <MenuItem
          onClick={() => setActive("users")}
          active={active === "users"}
        >
          Users
        </MenuItem>
      </Sidebar>
    </Wrapper>
  );
};

export default AdminHome;

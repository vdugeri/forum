import React from "react";
import logo from "assets/logo.png";

import {
  Wrapper,
  LogoContainer,
  Logo,
  MenuLink,
} from "components/admin/sidebar/sidebar.styles";
import Icon from "components/shared/icon.component";
import { withRouter } from "react-router-dom";

const paths = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: "dashboard",
    active: false,
  },
  {
    label: "Learners",
    link: "/admin/learners",
    icon: "students",
    active: false,
  },
  {
    label: "Experts",
    link: "/admin/experts",
    icon: "users",
    active: false,
  },
  {
    label: "Topics",
    link: "/admin/topics",
    icon: "subjects",
    active: false,
  },
];

const Sidebar = ({ location }) => {
  const { pathname } = location;

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <img src={logo} alt="GCCM" />
        </Logo>
        <span>Vanillatots</span>
      </LogoContainer>
      {paths.map((path) => {
        const active = pathname === path.link;
        return (
          <MenuLink to={path.link} active={active} key={path.link}>
            <Icon name={path.icon} />
            <span>{path.label}</span>
          </MenuLink>
        );
      })}
    </Wrapper>
  );
};

export default withRouter(Sidebar);

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  LoginOverlay,
  LoginContainer,
  LoginForm,
  Catchline,
  StyledButton,
  StyledInput
} from "pages/admin/login.styles";
import { Gap } from "components/message-modal/message-modal.styles";
import { Heading } from "pages/expert-list/expert-list.styles";
import { useDispatch } from "react-redux";
import { adminLogin } from "redux/admin/admin.actions";

const AdminLogin = ({ history }) => {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  const { username, password } = userCreds;

  return (
    <LoginOverlay>
      <Catchline>Help Educate the Child</Catchline>
      <LoginContainer>
        <LoginForm
          onSubmit={e => {
            e.preventDefault();
            history.push("/admin/dashboard");
            // dispatch(adminLogin(userCreds));
          }}
        >
          <Heading size="22px">Sign In</Heading>
          <StyledInput
            type="text"
            name="username"
            label="Username"
            value={username}
            handleChange={e =>
              setUserCreds({ ...userCreds, username: e.target.value })
            }
          />
          <StyledInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={e =>
              setUserCreds({ ...userCreds, password: e.target.value })
            }
          />
          <Gap height="20px" />
          <StyledButton primary>Login</StyledButton>
        </LoginForm>
      </LoginContainer>
    </LoginOverlay>
  );
};

export default withRouter(AdminLogin);

import React, { useState } from "react";
import {
  LoginOverlay,
  LoginContainer,
  LoginForm,
  Catchline,
  StyledButton,
  StyledInput
} from "pages/admin/login.styles";
import CustomInput from "components/custom-input/custom-input.component";
import { Gap } from "components/message-modal/message-modal.styles";
import { Heading } from "pages/expert-list/expert-list.styles";
import { useDispatch } from "react-redux";
import { adminLogin } from "redux/admin/admin.actions";

const AdminLogin = () => {
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
            dispatch(adminLogin(userCreds));
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

export default AdminLogin;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 8%;
  right: 2%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.14);
  border: 1px solid #e7e7e7;
  padding: 2rem;
  min-height: 36rem;
  min-width: 28rem;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
export const UsernameWrapper = styled.div`
  font-family: "Domaine Display Semibold", serif;
  color: #263633;

  & a {
    text-decoration: none;
    color: #08561f;
    font-family: "Open sans", sans-serif;
    font-size: 1.6rem;
  }
`;

export const LinksWrapper = styled.div`
  margin-top: 1rem;
  & a {
    border-bottom: 1px solid #e7e7e7;
    font-size: 1.6rem;
    font-weight: 300;
    font-family: "Proxima Nova Regular", sans-serif;
  }
`;

export const LogoutLink = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

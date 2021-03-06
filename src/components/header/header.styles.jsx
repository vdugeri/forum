import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
  font-size: 1.6rem;
  font-weight: 400;
  border-bottom: 1px solid #e6e6e6;
  font-family: "Proxima Nova Bold";
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  cursor: pointer;
  object-fit: contain;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  & img {
    width: 7rem;
    height: auto;
  }
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 2rem;
  align-items: center;
  margin-right: 4rem;
  margin-left: auto;
  position: relative;
`;

export const NavItem = styled.div`
  cursor: pointer;
`;

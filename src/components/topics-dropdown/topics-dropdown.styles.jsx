import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 35rem;
  min-height: 40rem;
  top: 150%;
  right: 20%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.14);
  z-index: 999;
  background-color: #fff;
  transform-origin: right top 0px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const DropdownHeading = styled.h2`
  margin: 2rem 0 2rem 2rem;
  font-family: "Domaine Display Semibold", serif;
`;

export const DropdownFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  padding: 1rem 0;
  color: #777;

  & button {
    width: 8rem;
  }
`;

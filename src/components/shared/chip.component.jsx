import React from "react";
import styled from "styled-components";

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 30px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
`;

const CloseButton = styled.span`
  color: #888;
  font-weight: 700;
  float: right;
  font-size: 2rem;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: #ff3c00cc;
  }
`;

export const Tag = ({ label, closeable, onClose }) => {
  return (
    <ChipContainer>
      <span>{label}</span>
      {closeable && (
        <CloseButton onClick={() => onClose(label)}>&#10005;</CloseButton>
      )}
    </ChipContainer>
  );
};

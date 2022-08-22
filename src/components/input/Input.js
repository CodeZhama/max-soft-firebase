import React from "react";
import styled from "styled-components";

export default function Input({ children, ...props }) {
  return <StyleInput {...props} placeholder="Search UI" />;
}

const StyleInput = styled.input`
  border: none;
  background-color: #f2f2f2;
  width: 100px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d7d7d7;
  }
`;

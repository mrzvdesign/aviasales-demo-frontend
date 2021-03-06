import React from "react";
import styled from "styled-components";

////

const Input = styled.input`
  border: none;
  height: 56px;
  padding: 1.15rem 1rem 1.2rem 1rem;
  &:focus {
    box-shadow: 0 0 0 2pt #ff9241;
    outline: none;
  }
`;

const InputComing = Input.extend`
  width: 100%;

  @media (min-width: 768px) {
    border-top-right-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

export default function() {
  return (
    <div>
      <InputComing placeholder="Город прибытия" />
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const Input = ({ label, register, required, type }) => {
  return (
    <InputStyled>
      <input
        type={type}
        placeholder={label}
        {...register(label, { required })}
      />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  border-color: #cccccc;
  border-radius: 4px;
  margin: 1rem 0;
  input {
    height: 100%;
    font-size: 16px;
    width: 100%;
    outline: none;
    background: transparent;
    border: none;
  }
`;

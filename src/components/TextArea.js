import React from "react";
import styled from "styled-components";

const TextArea = ({ label, register, required }) => {
  return (
    <TextAreaStyled>
      <input placeholder={label} {...register(label, { required })} />
    </TextAreaStyled>
  );
};

export default TextArea;

const TextAreaStyled = styled.div`
  height: 120px;
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  border-color: #cccccc;
  border-radius: 4px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";
import styled from "styled-components";
const Back = () => {
  return (
    <BackStyled>
      <AiOutlineArrowLeft color="#646464" />
      <p>Back to cart</p>
    </BackStyled>
  );
};

export default Back;

const BackStyled = styled.div`
  align-items: center;
  display: flex;
  p {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

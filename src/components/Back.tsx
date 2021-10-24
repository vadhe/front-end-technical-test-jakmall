import * as React from "react";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";

const BackStyled = styled.div<{ marginY?: string }>`
  align-items: center;
  display: flex;
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  p {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Back: React.FC<{ marginY?: string }> = ({ marginY }) => {
  return (
    <BackStyled marginY={marginY}>
      <AiOutlineArrowLeft color="#646464" />
      <p>Back to cart</p>
    </BackStyled>
  );
};

export default Back;

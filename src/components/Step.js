import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import styled from "styled-components";
const Step = () => {
  return (
    <StepStyled>
      <p>1</p>
      <h3>Delivery</h3>
      <IoIosArrowForward color="#FF8A00" />
    </StepStyled>
  );
};

const StepStyled = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.orange};
    margin-right: 1rem;
  }
  .active {
    background-color: #ff8a00;
  }
  p {
    background: ${({ theme }) => theme.colors.orange};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 1024px) {
    margin: 0 1rem;
  }
`;
export default Step;

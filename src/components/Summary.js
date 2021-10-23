import Heading from "./Heading";
import React from "react";
import styled from "styled-components";

const Summary = () => {
  return (
    <SummaryStyled>
      <Heading as="h2" size="24px">
        Summary
      </Heading>
    </SummaryStyled>
  );
};

export default Summary;

const SummaryStyled = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 100%;
  /* height: 500px; */
  /* background-color: red; */
`;

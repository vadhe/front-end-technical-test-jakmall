import * as React from "react";

import ButtonStyled from "../styled/ButtonStyled";
import FlexStyled from "../styled/FlexStyled";
import HeadingStyled from "../styled/HeadingStyled";
import styled from "styled-components";

const SummaryStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  .item-purchased {
    font-size: 16px;
    color: #ccc;
  }
  .grid-item-4 {
    grid-row-start: 4;
  }
  @media (min-width: 1280px) {
    width: 300px;
    padding: 0 1rem;
  }
`;

const Summary: React.FC = () => {
  return (
    <SummaryStyled>
      <div className="grid-item-1">
        <HeadingStyled as="h2" marginY="2.5rem" size="24px">
          Summary
        </HeadingStyled>
        <p className="item-purchased">10 items purchased</p>
      </div>
      <div className="grid-item-2" />
      <div className="grid-item-3">
        <FlexStyled marginY="1rem">
          <p>Cost of goods</p>
          <p>500,000</p>
        </FlexStyled>
        <FlexStyled marginY="1rem">
          <p>Dropshipping Fee</p>
          <p>5,900</p>
        </FlexStyled>
        <FlexStyled marginY="1rem">
          <HeadingStyled as="h3" size="24px">
            Total
          </HeadingStyled>
          <HeadingStyled as="h3" size="24px">
            505,900
          </HeadingStyled>
        </FlexStyled>
      </div>
      <div className="grid-item-4">
        <ButtonStyled>Submit</ButtonStyled>
      </div>
    </SummaryStyled>
  );
};

export default Summary;

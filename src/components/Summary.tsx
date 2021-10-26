import * as React from "react";

import ButtonStyled from "../styled/ButtonStyled";
import FlexStyled from "../styled/FlexStyled";
import HeadingStyled from "../styled/HeadingStyled";
import { SummaryContext } from "../context/SummaryContext";
import { formatCurrency } from "../utils/numberToRupiah";
import styled from "styled-components";

const SummaryStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  .item-purchased {
    font-size: 16px;
    color: #8d8d8d;
  }
  .grid-item-4 {
    grid-row-start: 4;
  }
  @media (min-width: 1280px) {
    width: 300px;
    padding: 0 1rem;
  }
`;
interface ISummary {
  button: string;
  onSubmit: () => void;
}
const Summary: React.FC<ISummary> = ({ button, onSubmit }) => {
  const { cost, feeDropship, total } = React.useContext(SummaryContext);
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
          <p>{formatCurrency(cost)}</p>
        </FlexStyled>
        {feeDropship !== 0 && (
          <FlexStyled marginY="1rem">
            <p>Dropshipping Fee</p>
            <p>{formatCurrency(feeDropship)}</p>
          </FlexStyled>
        )}
        <FlexStyled marginY="1rem">
          <HeadingStyled as="h3" size="24px">
            Total
          </HeadingStyled>
          <HeadingStyled as="h3" size="24px">
            {formatCurrency(total)}
          </HeadingStyled>
        </FlexStyled>
      </div>
      <div className="grid-item-4">
        <ButtonStyled onClick={onSubmit}>{button}</ButtonStyled>
      </div>
    </SummaryStyled>
  );
};

export default Summary;

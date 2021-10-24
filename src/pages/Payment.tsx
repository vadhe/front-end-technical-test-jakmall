import * as React from "react";

import Back from "../components/Back";
import Card from "../components/Card";
import HeadingStyled from "../styled/HeadingStyled";
import Summary from "../components/Summary";
import styled from "styled-components";

const PaymentStyled = styled.div`
  .payment {
    width: 100%;
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .grid {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

const Payment: React.FC = () => {
  return (
    <PaymentStyled>
      <section className="payment">
        <Back />
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Shipment
        </HeadingStyled>
        <div className="grid">
          <Card />
          <Card />
          <Card />
        </div>
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Payment
        </HeadingStyled>
        <div className="grid">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="summary">
        <Summary />
      </section>
    </PaymentStyled>
  );
};

export default Payment;

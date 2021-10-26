/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react";

import Back from "../components/Back";
import Card from "../components/Card";
import HeadingStyled from "../styled/HeadingStyled";
import Summary from "../components/Summary";
import { SummaryContext } from "../context/SummaryContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PaymentStyled = styled.form`
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

const listshipments = [
  {
    id: 1,
    name: "GO-SEND",
    estimate: "today",
    cost: 15000,
  },
  {
    id: 2,
    name: "JNE",
    estimate: "2Days",
    cost: 9000,
  },
  {
    id: 3,
    name: "Personal Courier",
    estimate: "1Days",
    cost: 29000,
  },
];
const wallets = [
  {
    id: 1,
    name: "e-Wallet",
  },
  {
    id: 2,
    name: "Bank Transfer",
  },
  {
    id: 3,
    name: "Virtual Account",
  },
];
const Payment: React.FC = () => {
  const { setShipment, shipment, paymentMethod, setPaymentMethod } = React.useContext(SummaryContext);

  const history = useHistory();
  const onSubmit = () => {
    if (shipment.cost && paymentMethod !== "Payment") {
      history.push("/finish");
    }
  };
  return (
    <PaymentStyled>
      <section className="payment">
        <Back />
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Shipment
        </HeadingStyled>
        <div className="grid">
          {listshipments.map((listshipment) => (
            <Card
              key={listshipment.id}
              cost={listshipment.cost}
              name={listshipment.name}
              onClick={() =>
                setShipment({
                  name: listshipment.name,
                  cost: listshipment.cost,
                  estimate: listshipment.estimate,
                })
              }
            />
          ))}
          {/* <Card />
          <Card /> */}
        </div>
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Payment
        </HeadingStyled>
        <div className="grid">
          {wallets.map((wallet) => (
            <Card key={wallet.id} name={wallet.name} onClick={() => setPaymentMethod(wallet.name)} />
          ))}
        </div>
      </section>
      <section className="summary">
        <Summary button={paymentMethod} onSubmit={onSubmit} />
      </section>
    </PaymentStyled>
  );
};

export default Payment;

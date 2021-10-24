import * as React from "react";

import Back from "../components/Back";
import HeadingStyled from "../styled/HeadingStyled";
import Summary from "../components/Summary";
import styled from "styled-components";

const FinishStyled = styled.div`
  .finish {
    /* position: relative; */
    .wrap-finish {
    }
    p {
      margin: 1rem 0;
    }
    .order-id {
      margin-top: 2rem;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .finish {
      width: 30%;
      margin: 0 auto;
      margin-top: 6rem;
    }
  }
`;

const Finish: React.FC = () => {
  return (
    <FinishStyled>
      <section className="finish">
        {/* <div className="wrap-finish"> */}
        <HeadingStyled as="h2" marginY="1rem" size="36px">
          Thank you
        </HeadingStyled>
        <p className="order-id">Order ID : XXKYB</p>
        <p>Your order will be delivered today with GO-SEND</p>
        <Back marginY="4rem" />
        {/* </div> */}
      </section>
      <section className="summary">
        <Summary />
      </section>
    </FinishStyled>
  );
};

export default Finish;

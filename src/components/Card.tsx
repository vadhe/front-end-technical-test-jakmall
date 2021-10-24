import * as React from "react";

import { BsCheck2 } from "react-icons/bs";
import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;
const Card: React.FC = () => {
  return (
    <CardStyled>
      <div>
        <p>GO-SEND</p>
        <p>15,000</p>
      </div>
      <BsCheck2 />
    </CardStyled>
  );
};

export default Card;

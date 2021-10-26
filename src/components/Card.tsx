import * as React from "react";

import { BsCheck2 } from "react-icons/bs";
import { formatCurrency } from "../utils/numberToRupiah";
import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;
interface ICard {
  onClick: () => void;
  name: string;
  cost?: number;
}
const Card: React.FC<ICard> = ({ onClick, cost, name }) => {
  return (
    <CardStyled onClick={onClick}>
      <div>
        <p>{name}</p>
        <p>{cost && formatCurrency(cost)}</p>
      </div>
      <BsCheck2 />
    </CardStyled>
  );
};

export default Card;

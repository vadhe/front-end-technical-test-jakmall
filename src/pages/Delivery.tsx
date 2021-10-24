/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from "react";

import Back from "../components/Back";
import { BsCheck2 } from "react-icons/bs";
import HeadingStyled from "../styled/HeadingStyled";
import { MdOutlineClose } from "react-icons/md";
import Summary from "../components/Summary";
import styled from "styled-components";

const DeliveryStyled = styled.div<{ islabel: boolean; isValid: boolean }>`
  .is-dropship {
    display: none;
  }
  .form-input {
    margin-top: 1rem;
    background-color: white;
    border: 1px solid;
    padding: ${({ islabel }) => (islabel ? "0.5rem" : "1rem")};
    border-radius: 4px;
    border-color: ${({ isValid }) => (isValid ? "#1BD97B" : "#FF8A00")};
    .input {
      display: flex;
      justify-content: space-between;
    }
    & label {
      display: ${({ islabel }) => (islabel ? "" : "none")};
    }
    & input {
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .form-input-text-area {
    height: 10rem;
    margin-top: 1rem;
    background-color: white;
    border: 1px solid;
    padding: ${({ islabel }) => (islabel ? "0.5rem" : "1rem")};
    border-radius: 4px;
    border-color: ${({ isValid }) => (isValid ? "#1BD97B" : "#FF8A00")};
    .input {
      display: flex;
      justify-content: space-between;
    }
    & label {
      display: ${({ islabel }) => (islabel ? "" : "none")};
    }
    & input {
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .is-dropship-mobile {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    input {
      margin-right: 0.9rem;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .delivery {
      width: 100%;
    }
    .is-dropship {
      display: inline-block;
      input {
        margin-right: 0.9rem;
      }
    }
    .is-dropship-mobile {
      display: none;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form {
      width: 100%;
      form {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        .left {
          grid-column: span 2 / span 2;
        }
      }
    }
  }
`;

const Delivery: React.FC = () => {
  const islabel = false;
  const isValid = false;

  return (
    <DeliveryStyled isValid={isValid} islabel={islabel}>
      <section className="delivery">
        <Back />
        <section className="header">
          <HeadingStyled as="h1" marginY="1rem" size="36px">
            Delivery details
          </HeadingStyled>
          <div className="is-dropship">
            <input type="checkbox" />
            <span>send as dropshipper</span>
          </div>
        </section>
        <section className="form">
          <form>
            <div className="left">
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className="input">
                  <input id="email" placeholder="Email" type="text" />
                  {isValid && <BsCheck2 color="#1BD97B" />}
                  {!isValid && <MdOutlineClose color="#FF8A00" />}
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className="input">
                  <input id="email" placeholder="okoko" type="text" />
                  {isValid && <BsCheck2 color="#1BD97B" />}
                  {!isValid && <MdOutlineClose color="#FF8A00" />}
                </div>
              </div>
              <div className="form-input-text-area">
                <label htmlFor="email">Email</label>
                <div className="input">
                  <input id="email" placeholder="okoko" type="text" />
                  {isValid && <BsCheck2 color="#1BD97B" />}
                  {!isValid && <MdOutlineClose color="#FF8A00" />}
                </div>
              </div>
            </div>
            <div className="is-dropship-mobile">
              <input type="checkbox" />
              <span>send as dropshipper</span>
            </div>
            <div className="righ">
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className="input">
                  <input id="email" placeholder="okoko" type="text" />
                  {isValid && <BsCheck2 color="#1BD97B" />}
                  {!isValid && <MdOutlineClose color="#FF8A00" />}
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className="input">
                  <input id="email" placeholder="okoko" type="text" />
                  {isValid && <BsCheck2 color="#1BD97B" />}
                  {!isValid && <MdOutlineClose color="#FF8A00" />}
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
      <section className="summary">
        <Summary />
      </section>
    </DeliveryStyled>
  );
};

export default Delivery;

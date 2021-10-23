import * as React from "react";

import Back from "../components/Back";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Summary from "../components/Summary";
import TextArea from "../components/TextArea";
import styled from "styled-components";
// import Summary from "../components/Summary";
import { useForm } from "react-hook-form";

const Delivery = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <DeliveryStyled>
      <Back />
      <div className="header">
        <Heading as="h2" size="36px">
          {" "}
          Delivery details
        </Heading>
        <div className="is-dropshipper">
          <input type="checkbox" />
          <label>Send as dropshipper</label>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <div className="input-user">
            <Input type="email" label="Email" register={register} />
            <Input label="Phone Number" register={register} />
            <TextArea label="Delivery Address" register={register} />
          </div>
          <div className="dropshipper">
            <div className="is-dropshipper-mobile">
              <input type="checkbox" />
              <label>Send as dropshipper</label>
            </div>
            <Input label="Dropshipper Name" register={register} />
            <Input label="Dropshipper Phone Number" register={register} />
          </div>
        </div>
        <div className="summary">
          <Summary />
        </div>
      </form>
    </DeliveryStyled>
  );
};

export default Delivery;

const DeliveryStyled = styled.div`
  padding: 1rem;
  .is-dropshipper {
    display: none;
  }
  .is-dropshipper-mobile {
    display: block;
    margin: 1rem 0;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    width: 66%;
  }
  @media (min-width: 1024px) {
    form {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .form-input {
      grid-column: span 2 / span 2;
    }
    .is-dropshipper {
      display: block;
    }
    .is-dropshipper-mobile {
      display: none;
    }
    .form-input {
      display: flex;
      width: 100%;
      .input-user {
        width: 70%;
      }
    }
    .dropshipper {
      margin-left: 1.5rem;
    }
  }
`;

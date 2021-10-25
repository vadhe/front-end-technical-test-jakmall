import * as React from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import Back from "../components/Back";
import { DeliveryStyled } from "./DeliveryStyled";
import { FormContex } from "../context/FormContext";
import HeadingStyled from "../styled/HeadingStyled";
import { IFormInputs } from "./type";
import Summary from "../components/Summary";

const Delivery: React.FC = () => {
  const {
    isEmail,
    validateEmail,
    isPhone,
    validatePhone,
    isDropshipPhone,
    validateDropshipPhone,
    isDropshipName,
    validateDropshipName,
  } = React.useContext(FormContex);
  const { register, trigger, handleSubmit } = useForm<IFormInputs>();
  const [checked, setChecked] = React.useState(false);
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <DeliveryStyled>
      <section className="delivery">
        <Back />
        <section className="header">
          <HeadingStyled as="h1" marginY="1rem" size="36px">
            Delivery details
          </HeadingStyled>
          <div className="is-dropship">
            <input onChange={() => setChecked(!checked)} type="checkbox" />
            <span>send as dropshipper</span>
          </div>
        </section>
        <section className="form">
          <form>
            <div className="left">
              <div className={`form-control ${isEmail}`}>
                <label>
                  <input
                    autoComplete="off"
                    placeholder="email"
                    type="text"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Invalid email",
                      },
                    })}
                    onKeyUp={async () => {
                      const isValid = await trigger("email");
                      validateEmail(isValid);
                    }}
                  />
                  <span>Email</span>
                </label>
              </div>
              <div className={`form-control ${isPhone}`}>
                <label>
                  <input
                    autoComplete="off"
                    placeholder="phone number"
                    type="text"
                    {...register("phone", {
                      required: "Phone is Required",
                      minLength: 6,
                      maxLength: 20,
                      pattern: {
                        value: /^[+0-9]*$/g,
                        // value: /go*/,
                        message: "Invalid Phone Number",
                      },
                    })}
                    onKeyUp={async () => {
                      const isValid = await trigger("phone");
                      validatePhone(isValid);
                    }}
                  />
                  <span>Phone Number</span>
                </label>
              </div>
            </div>
            <div className="is-dropship-mobile">
              <input onChange={() => setChecked(!checked)} type="checkbox" />
              <span>send as dropshipper</span>
            </div>
            <div className="righ">
              <div className={`form-control ${isDropshipName}`}>
                <label>
                  <input
                    autoComplete="off"
                    disabled={checked}
                    placeholder="Dropshipper Name"
                    type="text"
                    {...register("dropShipperName", {
                      required: "Dropshipper Name is Required",
                    })}
                    onKeyUp={async () => {
                      const isValid = await trigger("dropShipperName");
                      validateDropshipName(isValid);
                    }}
                  />
                  <span>Dropshipper Name</span>
                </label>
              </div>
              <div className={`form-control ${isDropshipPhone}`}>
                <label>
                  <input
                    autoComplete="off"
                    disabled={checked}
                    placeholder="Dropshipper phone number"
                    type="text"
                    {...register("dropshipperphone", {
                      required: "Dropshipper Phone is Required",
                      minLength: 6,
                      maxLength: 20,
                      pattern: {
                        value: /^[+0-9]*$/g,
                        // value: /go*/,
                        message: "Dropshipper Phone Invalid",
                      },
                    })}
                    onKeyUp={async () => {
                      const isValid = await trigger("dropshipperphone");
                      validateDropshipPhone(isValid);
                    }}
                  />
                  <span>Phone Number Dropshipper</span>
                </label>
              </div>
            </div>
          </form>
        </section>
      </section>
      <section className="summary">
        <Summary button="Continue to payment" onSubmit={handleSubmit(onSubmit)} />
      </section>
    </DeliveryStyled>
  );
};

export default Delivery;

import * as React from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import Back from "../components/Back";
import { DeliveryStyled } from "./DeliveryStyled";
import { FormContex } from "../context/FormContext";
import HeadingStyled from "../styled/HeadingStyled";
import { IFormInputs } from "./type";
import Summary from "../components/Summary";
import { SummaryContext } from "../context/SummaryContext";
import { useHistory } from "react-router-dom";

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
    isAddress,
    validateAddress,
  } = React.useContext(FormContex);
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInputs>();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { setFeeDropship } = React.useContext(SummaryContext);
  const [checked, setChecked] = React.useState(false);
  const [lengthText, setLengtexh] = React.useState(120);
  const history = useHistory();
  const addFeeDropship = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (checked) setFeeDropship(5900);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (!checked) setFeeDropship(0);
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    history.push("/payment");
  };
  React.useEffect(() => {
    addFeeDropship();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
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
              <section>
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
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </section>
              <section>
                <div className={`form-control ${isPhone}`}>
                  <label>
                    <input
                      autoComplete="off"
                      placeholder="phone number"
                      type="number"
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
                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
              </section>
              <section>
                <div className={`form-control ${isAddress}`}>
                  <label>
                    <textarea
                      autoComplete="off"
                      placeholder="Delivery Address"
                      {...register("address", {
                        required: "Delivery Address is Required",
                        maxLength: {
                          value: 120,
                          message: "maximun allowed lengthis 120",
                        },
                        pattern: {
                          value: /[a-z0-9]/gi,
                          // value: /go*/,
                          message: "Invalid Delivery Address",
                        },
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("address");
                        setLengtexh(120 - getValues("address").length);
                        validateAddress(isValid);
                      }}
                    />
                    <span>Delivery Address</span>
                    <p className="length-address"> characters left {lengthText}</p>
                  </label>
                </div>
                {errors.address && <small className="text-danger">{errors.address.message}</small>}
              </section>
            </div>
            <div className="is-dropship-mobile">
              <input onChange={() => setChecked(!checked)} type="checkbox" />
              <span>send as dropshipper</span>
            </div>
            <div className="righ">
              <div>
                <div className={`form-control ${isDropshipName}`}>
                  <label>
                    <input
                      autoComplete="off"
                      placeholder="Dropshipper Name"
                      type="text"
                      {...register("dropShipperName", {
                        required: "Dropshipper Name is Required",
                        disabled: !checked,
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("dropShipperName");
                        validateDropshipName(isValid);
                      }}
                    />
                    <span>Dropshipper Name</span>
                  </label>
                </div>
                {errors.dropShipperName && <small className="text-danger">{errors.dropShipperName.message}</small>}
              </div>
              <div>
                <div className={`form-control ${isDropshipPhone}`}>
                  <label>
                    <input
                      autoComplete="off"
                      disabled={!checked}
                      placeholder="Dropshipper phone number"
                      type="number"
                      {...register("dropshipperphone", {
                        required: "Dropshipper Phone is Required",
                        disabled: !checked,
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
                {errors.dropshipperphone && <small className="text-danger">{errors.dropshipperphone.message}</small>}
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

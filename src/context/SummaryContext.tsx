/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

interface ISummary {
  cost: string | number;
  feeDropship: string | number;
  total: string | number;
  setFeeDropship: any;
  setShipment: any;
  setPaymentMethod: any;
  shipment: { name: string; cost: number; estimate: string };
  paymentMethod: string;
}
export const SummaryContext = React.createContext({} as ISummary);

const SummaryContextProvider: React.FC = ({ children }) => {
  const [cost] = React.useState(5000);
  const [feeDropship, setFeeDropship] = React.useState(0);
  const [shipment, setShipment] = React.useState({
    name: "",
    cost: 0,
    estimate: "",
  });
  const [paymentMethod, setPaymentMethod] = React.useState("Payment");
  const total = cost + feeDropship + shipment.cost;
  return (
    <SummaryContext.Provider
      value={{ cost, feeDropship, total, setFeeDropship, shipment, paymentMethod, setPaymentMethod, setShipment }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export default SummaryContextProvider;

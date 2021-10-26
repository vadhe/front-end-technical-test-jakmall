import * as React from "react";

interface ISummary {
  cost: string | number;
  feeDropship: string | number;
  total: string | number;
  setFeeDropship: any;
}
export const SummaryContext = React.createContext({} as ISummary);

const SummaryContextProvider: React.FC = ({ children }) => {
  const [cost] = React.useState(5000);
  const [feeDropship, setFeeDropship] = React.useState(0);
  const total = cost + feeDropship;
  return (
    <SummaryContext.Provider value={{ cost, feeDropship, total, setFeeDropship }}>{children}</SummaryContext.Provider>
  );
};

export default SummaryContextProvider;

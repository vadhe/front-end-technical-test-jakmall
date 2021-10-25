import * as React from "react";

interface ISummary {
  cost: string | number;
  fee: string | number;
  total: string | number;
}
export const SummaryContext = React.createContext({} as ISummary);

const SummaryContextProvider: React.FC = ({ children }) => {
  const [cost] = React.useState(5000);
  const [fee] = React.useState(5000);
  const total = cost + fee;
  return <SummaryContext.Provider value={{ cost, fee, total }}>{children}</SummaryContext.Provider>;
};

export default SummaryContextProvider;

import * as React from "react";

import FormProvider from "./context/FormContext";
import GlobalStyles from "./theme/GlobalStyle";
import Layout from "./layout/Layout";
import SummaryContextProvider from "./context/SummaryContext";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <SummaryContextProvider>
          <GlobalStyles />
          <Layout />
        </SummaryContextProvider>
      </FormProvider>
    </ThemeProvider>
  );
};

export default App;

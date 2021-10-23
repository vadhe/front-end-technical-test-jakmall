import * as React from "react";

import GlobalStyles from "./theme/GlobalStyle";
import Layout from "./layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;

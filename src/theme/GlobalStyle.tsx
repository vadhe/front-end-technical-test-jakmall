import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600;900&display=swap');
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background: #FFFAE6;
	font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;

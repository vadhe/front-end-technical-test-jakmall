import { createGlobalStyle } from "styled-components";
// import { createGlobalStyle } from "styled-components";
import reset from "./reset";

// const GlobalStyles = createGlobalStyle`
//    ${reset}
//    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600;900&display=swap');
//    body{
// 	background-color: "#000";
// p {
//     opacity: 0.6;
//     line-height: 1.5;
//   }

//   img {
//     max-width: 100%;
//    }

// `;

// export default GlobalStyles;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600;900&display=swap');
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.leadGlass};
	font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;

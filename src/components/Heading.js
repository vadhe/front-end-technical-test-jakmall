import React from "react";
import styled from "styled-components";

// const Heading = ({ heading, as }) => {
//   return <HeadingStyled as={as}>{heading}</HeadingStyled>;
// };

// export default Heading;

const Heading = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ size }) => size};
`;
export default Heading;

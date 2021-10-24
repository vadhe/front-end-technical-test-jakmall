/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";

interface TypeHeading {
  size?: string;
  marginY?: string;
}
const HeadingStyled = styled.div<TypeHeading>`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ size }) => size};
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
`;
export default HeadingStyled;

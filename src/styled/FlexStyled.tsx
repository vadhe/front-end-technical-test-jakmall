import styled from "styled-components";

interface TypeFlexStyled {
  marginY?: string;
  alignItems?: string;
}
const FlexStyled = styled.div<TypeFlexStyled>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems};
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
`;
export default FlexStyled;

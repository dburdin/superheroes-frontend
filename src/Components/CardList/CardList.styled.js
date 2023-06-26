import styled from "styled-components";

export const List = styled.ul`
  width: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
`;

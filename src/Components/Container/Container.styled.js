import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
`;

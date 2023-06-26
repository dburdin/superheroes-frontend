import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #ffed10;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: fit-content;
  height: 40px;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :not(:disabled):hover,
  :not(:disabled):focus {
    outline: 0;
    background: #f4e603;
    box-shadow: 0 0 0 2px rgba(226, 0, 37, 0.2),
      0 3px 8px 0 rgba(226, 0, 37, 0.15);
  }

  :disabled {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
    cursor: not-allowed;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    display: inline;
    font-size: 12px;
    padding: 5px 10px;
    height: 30px;
  }
`;

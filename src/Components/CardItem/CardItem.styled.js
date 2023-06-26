import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30px;

  transform: scale(1);
  transition: transform 250ms linear;

  :hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ButtonContainer = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  display: flex;
  align-self: center;
  gap: 5px;
`;

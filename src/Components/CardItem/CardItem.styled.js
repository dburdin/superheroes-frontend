import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  :not(:last-child) {
    margin-bottom: 15px;
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
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

import styled, { keyframes } from "styled-components";

const animationBackground = keyframes`
  {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: #0060aa;
  box-shadow: rgba(255, 237, 16, 0.6) 1.95px 1.95px 2.6px;
  z-index: 100;
`;

export const CreateButton = styled.button`
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
`;

export const Logo = styled.a`
  font-weight: 700;
  font-size: 26px;
  text-decoration: none;

  background: linear-gradient(to right, #ffed10, #e20025);
  background-size: 400% 400%;
  background-clip: text;
  color: transparent;
  animation: ${animationBackground} 8s linear infinite;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -ms-box-decoration-break: clone;
  box-decoration-break: clone;

  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Navigation = styled.nav``;

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
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

export const Navigation = styled.nav`
  @media (min-width: 320px) and (max-width: 768px) {
    display: inline;
    margin-left: 10px;
    width: 100%;
  }
`;

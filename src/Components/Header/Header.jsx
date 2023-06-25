import { StyledHeader, Logo, Navigation, StyledButton } from "./Header.styled";
import { Button } from "Components/Button/Button";

export const Header = ({ toggleModal }) => {
  return (
    <StyledHeader>
      <Logo href="/" to={"/"}>
        SuperHeroes
      </Logo>
      <Navigation>
        <Button onClick={toggleModal}>Create Your Hero</Button>
      </Navigation>
    </StyledHeader>
  );
};

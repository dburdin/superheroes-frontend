import PropTypes from "prop-types";

import { StyledHeader, Logo, Navigation } from "./Header.styled";
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

Header.proppTypes = {
  toggleModal: PropTypes.func.isRequired,
};

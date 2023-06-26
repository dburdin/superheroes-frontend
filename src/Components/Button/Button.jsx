import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ children, style, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton onClick={handleClick} style={style}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

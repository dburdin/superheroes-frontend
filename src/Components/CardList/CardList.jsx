import PropTypes from "prop-types";

import { CardItem } from "Components/CardItem/CardItem";
import { List } from "./CardList.styled";
import { Children } from "react";

export const CardList = ({ superHeroes, toggleModal }) => {
  return (
    <List>
      {superHeroes.map((superHero) => (
        <CardItem
          key={superHero._id}
          superHero={superHero}
          toggleModal={toggleModal}
        />
      ))}
    </List>
  );
};

CardList.propTypes = {
  superHeroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

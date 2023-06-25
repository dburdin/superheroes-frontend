import PropTypes from "prop-types";

import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { getImageUrl } from "API/api";
import { Image, Item, CardContent } from "./CardItem.styled";
import { Button } from "Components/Button/Button";
import { remove } from "API/api";
import { useHeroContext } from "./context";

export const CardItem = ({ superHero, toggleModal }) => {
  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superHero;
  const superpowersList = superpowers.join(",");

  const [isRemoving, setIsRemoving] = useState(false);

  const OnClickRemoveItem = async (_id) => {
    try {
      setIsRemoving(true);

      if (window.confirm("Are you sure?")) {
        await remove(_id);
      }

      toast.success(`You sucsesfully deleted ${nickname} from your list`);
      location.reload();
    } catch (error) {
      toast.error(`Opps. Something gone wrong`);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <>
      <Item>
        <Toaster />
        <Image src={getImageUrl(images[0])} alt="nickname" />
        <CardContent>
          <p>
            <b>Nickname:</b> {nickname}
          </p>
          <p>
            <b>Real name:</b> {real_name}
          </p>
          <p>
            <b>Origin description:</b> {origin_description}
          </p>
          <p>
            <b>Superpowers:</b> {superpowersList}
          </p>
          <p>
            <b>Catch phrase:</b> {catch_phrase}
          </p>
        </CardContent>
        <Button
          onClick={() => OnClickEditItem()}
          style={{ alignSelf: "start" }}
        >
          Edit
        </Button>
        <Button
          onClick={() => OnClickRemoveItem(_id)}
          style={{ alignSelf: "start" }}
          disabled={isRemoving}
        >
          {isRemoving ? "Removing..." : "X"}
        </Button>
      </Item>
    </>
  );
};

CardItem.propTypes = {
  superHeroes: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.array.isRequired,
    catch_phrase: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};

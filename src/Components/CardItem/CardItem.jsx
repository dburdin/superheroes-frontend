import PropTypes from "prop-types";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { getById, getImageUrl, remove, update, upload } from "API/api";
import { Image, Item, CardContent, ButtonContainer } from "./CardItem.styled";
import { Button } from "Components/Button/Button";
import { Overlay, ModalWindow } from "Components/Modal/Modal.styled";
import { EditForm } from "Components/EditForm/EditForm";

export const CardItem = ({ superHero }) => {
  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superHero;

  const [isRemoving, setIsRemoving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleModal = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  const handleEditClick = async () => {
    try {
      setIsEditing(true);
      const { data } = await getById(_id);

      setSelectedPhoto(data.images[0]);
    } catch (error) {
      toast.error("Failed to retrieve hero data");
    }
  };

  const handleRemoveClick = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        setIsRemoving(true);
        await remove(_id);
        toast.success(`You successfully deleted ${nickname} from your list`);
        location.reload();
      }
    } catch (error) {
      toast.error("Oops. Something went wrong");
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <>
      <Toaster />
      {isEditing ? (
        <EditForm
          superHero={superHero}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      ) : (
        <Item>
          <ButtonContainer>
            <Button
              onClick={handleEditClick}
              style={{
                alignSelf: "start",
                opacity: 0.7,
              }}
            >
              Edit
            </Button>
            <Button
              onClick={handleRemoveClick}
              style={{ alignSelf: "center", opacity: 0.7 }}
              disabled={isRemoving}
            >
              {isRemoving ? "Removing..." : "X"}
            </Button>
          </ButtonContainer>
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
              <b>Superpowers:</b> {superpowers.join(",")}
            </p>
            <p>
              <b>Catch phrase:</b> {catch_phrase}
            </p>
          </CardContent>
        </Item>
      )}
    </>
  );
};

CardItem.propTypes = {
  superHero: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.array.isRequired,
    catch_phrase: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired,
};

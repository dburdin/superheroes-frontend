import PropTypes from "prop-types";

import { EditorForm } from "./EditForm.styled";
import { Button } from "Components/Button/Button";
import { Overlay, ModalWindow } from "Components/Modal/Modal.styled";
import { useKeyPress } from "hooks/useKeyPress";
import { useState, useEffect } from "react";
import { getImageUrl, upload, update } from "API/api";
import { toast } from "react-hot-toast";

export const EditForm = ({
  isEditing,
  setIsEditing,
  selectedPhoto,
  setSelectedPhoto,
  superHero,
}) => {
  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superHero;

  const [editNickname, setEditNickname] = useState(nickname);
  const [editRealName, setEditRealName] = useState(real_name);
  const [editOriginDescription, setEditOriginDescription] =
    useState(origin_description);
  const [editSuperpowers, setEditSuperpowers] = useState(superpowers.join(","));
  const [editCatchPhrase, setEditCatchPhrase] = useState(catch_phrase);

  const toggleModal = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useKeyPress("Escape", toggleModal);

  const handleNicknameChange = (event) => {
    setEditNickname(event.target.value);
  };

  const handleRealNameChange = (event) => {
    setEditRealName(event.target.value);
  };

  const handleOriginDescriptionChange = (event) => {
    setEditOriginDescription(event.target.value);
  };

  const handleSuperpowersChange = (event) => {
    setEditSuperpowers(event.target.value);
  };

  const handleCatchPhraseChange = (event) => {
    setEditCatchPhrase(event.target.value);
  };

  const handleUploadFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      const response = await upload(formData);
      const imageUrl = response.data.imageUrl;

      setSelectedPhoto(imageUrl);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const onClickRemoveButton = (event) => {
    event.preventDefault();
    setSelectedPhoto("");
  };

  const handleUpdateClick = async (event) => {
    event.preventDefault();

    try {
      const updatedHero = {
        nickname: editNickname,
        real_name: editRealName,
        origin_description: editOriginDescription,
        superpowers: editSuperpowers.split(",").map((power) => power.trim()),
        catch_phrase: editCatchPhrase,
        images: selectedPhoto ? [selectedPhoto] : [],
      };

      await update(_id, updatedHero);
      location.reload();
      toast.success(`Successfully updated ${editNickname}`);
      setIsEditing(false);
    } catch (error) {
      toast.error("Oops! Something went wrong while updating the hero");
    }
  };

  return (
    <Overlay onClick={handleClickOnOverlay}>
      <ModalWindow>
        <EditorForm action="">
          <Button
            onClick={toggleModal}
            type="button"
            style={{ alignSelf: "end" }}
          >
            Close
          </Button>
          {selectedPhoto && (
            <Button
              type="button"
              onClick={onClickRemoveButton}
              style={{ alignSelf: "center" }}
            >
              Remove
            </Button>
          )}
          <img
            style={{ width: "150px", alignSelf: "center" }}
            src={getImageUrl(selectedPhoto)}
            alt=""
          />
          <input
            type="text"
            value={editNickname}
            onChange={handleNicknameChange}
          />
          <input
            type="text"
            value={editRealName}
            onChange={handleRealNameChange}
          />
          <input
            type="text"
            value={editOriginDescription}
            onChange={handleOriginDescriptionChange}
          />
          <input
            type="text"
            value={editSuperpowers}
            onChange={handleSuperpowersChange}
          />
          <input
            type="text"
            value={editCatchPhrase}
            onChange={handleCatchPhraseChange}
          />
          <input type="file" accept="image/*" onChange={handleUploadFile} />
          <Button
            type="submit"
            onClick={handleUpdateClick}
            style={{ alignSelf: "center" }}
          >
            Update
          </Button>
        </EditorForm>
      </ModalWindow>
    </Overlay>
  );
};

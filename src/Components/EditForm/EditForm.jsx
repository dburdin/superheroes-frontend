import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useKeyPress } from "hooks/useKeyPress";
import { toast } from "react-hot-toast";

import { Button } from "Components/Button/Button";
import { Overlay, ModalWindow } from "Components/Modal/Modal.styled";
import { upload, update, getImageUrl } from "API/api";
import {
  Form,
  FormLabel,
  Field,
  FormLabelImage,
  SubmitButton,
} from "./EditForm.styled";

const validationSchema = Yup.object({
  nickname: Yup.string().required("Nickname is required"),
  real_name: Yup.string().required("Real Name is required"),
  catch_phrase: Yup.string().required("Catch Phrase is required"),
  origin_description: Yup.string().required("Origin description is required"),
});

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
  } = superHero;

  const toggleModal = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useKeyPress("Escape", toggleModal);

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

  const handleUpdateClick = async (values) => {
    try {
      const updatedHero = {
        ...values,
        superpowers: values.superpowers.split(",").map((power) => power.trim()),
        images: selectedPhoto ? [selectedPhoto] : [],
      };

      await update(_id, updatedHero);
      toast.success(`Successfully updated ${values.nickname}`);
      location.reload();
      setIsEditing(false);
    } catch (error) {
      toast.error("Oops! Something went wrong while updating the hero");
    }
  };

  return (
    <Formik
      initialValues={{
        nickname,
        real_name,
        origin_description,
        superpowers: superpowers.join(", "),
        catch_phrase,
      }}
      validationSchema={validationSchema}
      onSubmit={handleUpdateClick}
    >
      {({ values }) => (
        <Form>
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
          <FormLabel>
            Nickname:
            <Field
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={values.nickname}
            />
            <ErrorMessage
              name="nickname"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabel>

          <FormLabel>
            Real Name:
            <Field
              type="text"
              name="real_name"
              placeholder="Real Name"
              value={values.real_name}
            />
            <ErrorMessage
              name="real_name"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabel>

          <FormLabel>
            Origin Description:
            <Field
              type="text"
              name="origin_description"
              placeholder="Description"
              value={values.origin_description}
            />
            <ErrorMessage
              name="origin_description"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabel>

          <FormLabel>
            Superpowers (comma-separated):
            <Field
              type="text"
              name="superpowers"
              placeholder="Superpowers"
              value={values.superpowers}
            />
            <ErrorMessage
              name="origin_description"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabel>

          <FormLabel>
            Catch Phrase:
            <Field
              type="text"
              name="catch_phrase"
              placeholder="Catch Phrase"
              value={values.catch_phrase}
            />
            <ErrorMessage
              name="catch_phrase"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabel>

          <FormLabelImage>
            <label style={{ cursor: "pointer" }} htmlFor="imageInput">
              Upload image
            </label>
            <input
              id="imageInput"
              name="image"
              type="file"
              onChange={handleUploadFile}
              hidden
              style={{ cursor: "pointer" }}
            />
            <ErrorMessage
              name="image"
              component="div"
              style={{ color: "red", fontSize: "11px" }}
            />
          </FormLabelImage>

          <Button type="submit" style={{ alignSelf: "center" }}>
            Update
          </Button>
        </Form>
      )}
    </Formik>
  );
};

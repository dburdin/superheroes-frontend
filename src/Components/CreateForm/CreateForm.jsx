import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHeroContext } from "Components/CardItem/context";
import { Toaster, toast } from "react-hot-toast";
import { Formik, ErrorMessage } from "formik";
import { add, upload } from "API/api";
import * as Yup from "yup";
import { Button } from "Components/Button/Button";
import {
  Form,
  FormLabel,
  Field,
  FormLabelImage,
  SubmitButton,
} from "./CreateForm.styled";
import { Loader } from "Components/Loader/Loader";

const validationSchema = Yup.object({
  nickname: Yup.string().required("Nickname is required"),
  real_name: Yup.string().required("Real Name is required"),
  catch_phrase: Yup.string().required("Catch Phrase is required"),
  origin_description: Yup.string().required("Origin description is required"),
});

export const CreateForm = ({ toggleModal, postAdd, postUpdate }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setUploadedImage(storedImage);
    }
  }, []);

  const handleFileChange = async (event) => {
    try {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      const response = await upload(formData);
      const imageUrl = response.data.imageUrl;

      setUploadedImage(imageUrl);
      localStorage.setItem("uploadedImage", imageUrl);
    } catch (error) {
      toast.error("Error uploading image");
    }
  };

  const onClickRemoveButton = () => {
    setUploadedImage("");
    localStorage.removeItem("uploadedImage");
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const data = {
        ...values,
        superpowers: values.superpowers.split(",").map((power) => power.trim()),
        images: uploadedImage ? [uploadedImage] : [],
      };

      await add(data);

      toggleModal();
      toast.success("You successfully created a hero");

      location.reload();
    } catch (error) {
      toast.error("Something went wrong. Check the fields.");
    } finally {
      setIsLoading(false);
      setUploadedImage("");
      localStorage.removeItem("uploadedImage");
    }
  };

  return (
    <>
      <Toaster />
      {isLoading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values }) => (
            <Form id="form">
              <Button onClick={toggleModal} style={{ alignSelf: "end" }}>
                X
              </Button>
              <FormLabel>
                Nickname:
                <Field type="text" name="nickname" />
                <ErrorMessage
                  name="nickname"
                  component="div"
                  style={{ color: "red", fontSize: "11px" }}
                />
              </FormLabel>
              <FormLabel>
                Real Name:
                <Field type="text" name="real_name" />
                <ErrorMessage
                  name="real_name"
                  component="div"
                  style={{ color: "red", fontSize: "11px" }}
                />
              </FormLabel>
              <FormLabel>
                Origin Description:
                <Field type="text" name="origin_description" />
                <ErrorMessage
                  name="origin_description"
                  component="div"
                  style={{ color: "red", fontSize: "11px" }}
                />
              </FormLabel>

              <FormLabel>
                Superpowers (comma-separated):
                <Field type="text" name="superpowers" />
                <ErrorMessage
                  name="superpowers"
                  component="div"
                  style={{ color: "red", fontSize: "11px" }}
                />
              </FormLabel>
              <FormLabel>
                Catch Phrase:
                <Field type="text" name="catch_phrase" />
                <ErrorMessage
                  name="catch_phrase"
                  component="div"
                  style={{ color: "red", fontSize: "11px" }}
                />
              </FormLabel>

              {uploadedImage ? (
                <>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      alignSelf: "center",
                      borderRadius: "30px",
                    }}
                    src={uploadedImage}
                    alt="Uploaded Image"
                  />
                  <Button
                    style={{ alignSelf: "center" }}
                    type="button"
                    onClick={onClickRemoveButton}
                  >
                    Remove
                  </Button>
                </>
              ) : (
                <FormLabelImage>
                  <label style={{ cursor: "pointer" }} htmlFor="imageInput">
                    Upload image
                  </label>
                  <input
                    id="imageInput"
                    name="image"
                    type="file"
                    onChange={handleFileChange}
                    hidden
                    style={{ cursor: "pointer" }}
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    style={{ color: "red", fontSize: "11px" }}
                  />
                </FormLabelImage>
              )}

              <SubmitButton type="submit" style={{ alignSelf: "center" }}>
                Add
              </SubmitButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

CreateForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

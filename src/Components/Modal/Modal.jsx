import PropTypes from "prop-types";
import { useEffect } from "react";

import { createPortal } from "react-dom";

import { ModalWindow, Overlay } from "./Modal.styled";
import { HeroForm } from "../HeroForm/HeroForm";

export const Modal = ({ toggleModal }) => {
  const modalRoot = document.querySelector("#modal-root");

  useEffect(() => {
    const handlePressOnEsc = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handlePressOnEsc);
    return () => {
      window.removeEventListener("keydown", handlePressOnEsc);
    };
  }, [toggleModal]);

  const handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleClickOnOverlay}>
      <ModalWindow>
        <HeroForm toggleModal={toggleModal}></HeroForm>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

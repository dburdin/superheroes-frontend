import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ModalWindow, Overlay } from "./Modal.styled";
import { CreateForm } from "../CreateForm/CreateForm";
import { useKeyPress } from "hooks/useKeyPress";

export const Modal = ({ toggleModal, children }) => {
  const modalRoot = document.querySelector("#modal-root");

  useKeyPress("Escape", toggleModal);

  const handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  const handleToggleModal = () => {
    toggleModal();
  };

  return createPortal(
    <Overlay onClick={handleClickOnOverlay}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

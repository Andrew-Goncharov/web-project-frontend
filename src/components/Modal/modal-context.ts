/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react";

export interface IModalContext {
  onClose: () => void;
  // toggleModal: () => void;
  onOpen: () => void;
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
  toggleAddModal: () => void;

  isOpen: boolean;
  modalContent: React.ReactElement;
}

const ModalContext = createContext<IModalContext>({
  onClose: () => {},
  // toggleModal: () => {},
  onOpen: () => {},
  toggleLoginModal: () => {},
  toggleRegisterModal: () => {},
  toggleAddModal: () => {},

  isOpen: false,
  modalContent: React.createElement("div"),
});

export default ModalContext;

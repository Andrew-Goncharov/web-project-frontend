import React, { useMemo, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ModalContext from "./modal-context";
import AddElementModal from "../AddElementModal/AddElementModal";

interface IModalProvider {
  children: React.ReactElement;
}

function ModalProvider({ children }: IModalProvider) {
  const [state, setState] = useState(false);
  const [modalContent, setModalContent] = useState(<div />);

  const onCloseHandler = () => {
    setState(false);
  };

  const onOpenHandler = () => {
    setState(true);
  };

  const toggleLoginModal = () => {
    setModalContent(<LoginModal />);
    setState(true);
  };

  const toggleRegisterModal = () => {
    setModalContent(<RegisterModal />);
    setState(true);
  };

  const toggleAddModal = () => {
    setModalContent(<AddElementModal />);
    setState(true);
  };

  const modalActions = useMemo(() => ({
    onClose: onCloseHandler,
    onOpen: onOpenHandler,

    toggleLoginModal,
    toggleRegisterModal,
    toggleAddModal,

    modalContent,
    isOpen: state,
  }), [state, setState]);
  return <ModalContext.Provider value={modalActions}>{children}</ModalContext.Provider>;
}

export default ModalProvider;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import ModalContext from "./modal-context";
import styles from "./Modal.module.css";

function Modal() {
  const { onClose } = useContext(ModalContext);

  const { modalContent, isOpen } = useContext(ModalContext);

  return (
    <div>
      {isOpen && (
        <div className={styles.modalBackdrop} onClick={onClose}>
          <div
            className={styles.modalWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

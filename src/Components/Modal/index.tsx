import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  removeModal: () => void;
}

export const Modal: FC<Props> = ({ isOpen, closeModal, removeModal }) => {
  const handleClickOutside = (e: any) => {
    const modalContent = document.getElementById("modal-content");
    if (modalContent && !modalContent.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <Wrapper isOpen={isOpen} onClick={handleClickOutside}>
      <div id="modal-content" className="modal-content">
        <h2>Modal</h2>
        <button onClick={closeModal}>Hide Modal</button>
        <button onClick={removeModal}>Delete Modal</button>
      </div>
    </Wrapper>
  );
};

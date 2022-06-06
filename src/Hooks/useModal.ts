import { useState } from "react";

export const useModal = () => {
  const [state, setState] = useState({ isOpen: false, isRemoved: false });

  const openModal = () => {
    setState({ isOpen: true, isRemoved: false });
  };

  const closeModal = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
  };

  const removeModal = () => {
    setState((prev) => ({ ...prev, isRemoved: true }));
  };

  return {
    state,
    openModal,
    closeModal,
    removeModal,
  };
};

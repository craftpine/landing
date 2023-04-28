import ModalRoot from "@/components/_gadgets/ModalRoot";
import { useClickOutSide } from "@/hooks";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal(props: Props) {
  const { show, onClose, children } = props;

  return null;
}

export default Modal;

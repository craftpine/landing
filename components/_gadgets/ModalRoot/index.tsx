import { useClickOutSide } from "@/hooks";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};

function ModalRoot(props: Props) {
  const { show, onClose, children } = props;

  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  const modalRef = React.useRef<any>(null);

  useClickOutSide(modalRef, onClose);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed w-100 h-100 top-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full" ref={modalRef}>
        {/* Modal content */}
        {children}
      </div>
    </div>
  ) : null;

  if (typeof window === "undefined") return null;

  const portalRoot = document.querySelector("#modal-root");

  if (isBrowser && portalRoot) {
    return ReactDOM.createPortal(modalContent, portalRoot);
  }

  return null;
}

export default ModalRoot;

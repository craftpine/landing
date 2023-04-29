import { useClickOutSide } from "@/hooks";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  renderFooter?: ReactNode | string;
};

function ModalRoot(props: Props) {
  const { show, onClose, children, title, renderFooter } = props;

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
      className="fixed w-100 h-full top-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full" ref={modalRef}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal content */}
          {children}

          {/* Modal footer */}
          {renderFooter}
        </div>
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

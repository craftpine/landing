import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void;
  revert?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

function Button(props: Props) {
  const { children, className, onClick, disabled, revert, ...rest } = props;

  const btnClass = revert
    ? "text-indigo-600 bg-white"
    : "text-white bg-indigo-600";
  return (
    <button
      className={`px-6 py-2  rounded-md ${btnClass} ${
        className ? className : ""
      } ${disabled ? "cursor-not-allowed" : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);

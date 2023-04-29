import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void;
} & React.ComponentPropsWithoutRef<"button">;

function Button(props: Props) {
  const { children, className, onClick, disabled, ...rest } = props;
  return (
    <button
      className={`px-6 py-2 text-white bg-indigo-600 rounded-md ${
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

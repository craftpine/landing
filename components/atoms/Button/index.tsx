import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button(props: Props) {
  const { children, className } = props;
  return (
    <button
      className={`px-6 py-2 text-white bg-indigo-600 rounded-md ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}

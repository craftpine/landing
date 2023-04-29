import React from "react";

type Props = {
  label?: string;
  error?: string;
} & React.ComponentPropsWithRef<"input">;

function Input(props: Props) {
  const { error, label, type, placeholder, required, className, ...rest } =
    props;

  return (
    <div className={`mb-5 ${className}`}>
      {!!label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label} {required && <span className="text-xs text-red-600">*</span>}
        </label>
      )}

      <input
        type={type}
        className="bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...rest}
      />

      {!!error && (
        <p
          id="filled_error_help"
          className="text-xs text-red-600 dark:text-red-400"
        >
          {error}.
        </p>
      )}
    </div>
  );
}

export default Input;

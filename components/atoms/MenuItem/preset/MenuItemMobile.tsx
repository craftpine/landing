import Link from "next/link";
import React from "react";

type Props = {
  menu: string;
};

export default function MenuItemMobile(props: Props) {
  const { menu } = props;
  return (
    <Link
      href="/"
      className="w-full px-4 py-2 -ml-4 text-gray-500 text-left rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
    >
      {menu}
    </Link>
  );
}

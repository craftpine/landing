import Link from "next/link";
import React from "react";

type Props = {
  menu: string;
};

export default function MenuItem(props: Props) {
  const { menu } = props;
  return (
    <li className="mr-3">
      <Link
        href="/"
        className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
      >
        {menu}
      </Link>
    </li>
  );
}

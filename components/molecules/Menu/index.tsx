import React from "react";
import MenuItem from "@/components/atoms/MenuItem";
import MenuItemMobile from "@/components/atoms/MenuItem/preset/MenuItemMobile";

type Props = {
  navigation: string[];
  mobile?: boolean;
};

export default function Menu(props: Props) {
  const { navigation, mobile = false } = props;

  const Component = mobile ? MenuItemMobile : MenuItem;

  const menuClass = mobile
    ? "flex flex-wrap w-full my-5"
    : "items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex";

  return (
    <div className="text-center lg:flex lg:items-center">
      <ul className={menuClass}>
        {navigation.map((menu, index) => (
          <Component key={index} menu={menu} />
        ))}
      </ul>
    </div>
  );
}

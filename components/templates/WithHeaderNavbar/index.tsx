import React from "react";
import NavbarDropdown from "@/components/organisms/NavBar";

type Props = {
  children: React.ReactNode;
  /** title navbar */
  navbarTitle?: string;
  /** link page */
  link?: string;
};

/** A page template with global navbar */
const WithNavbarTemplate = React.memo(function WithNavbarTemplate({
  children,
}: Props) {
  return (
    <>
      <NavbarDropdown />
      <div className="container p-6 md:px-8 mx-auto xl:px-0">{children}</div>
    </>
  );
});

export default WithNavbarTemplate;

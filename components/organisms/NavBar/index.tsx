import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "@/components/atoms/ThemeSwitch";
import Menu from "@/components/molecules/Menu";
import Button from "@/components/atoms/Button";
import { useWindowSize } from "@/hooks";
import ModalRoot from "@/components/_gadgets/ModalRoot";
import RegisterModalContent from "@/components/molecules/RegisterModalContent";

const renderIcon = (open: boolean) => (
  <svg
    className="w-6 h-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    {open && (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
      />
    )}
    {!open && (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    )}
  </svg>
);

const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  const { width } = useWindowSize();

  const handleRegister = () => {
    setShow(true);
  };

  const [show, setShow] = React.useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                      <span>
                        <Image
                          src="/img/logo.svg"
                          alt="N"
                          width="32"
                          height="32"
                          className="w-8"
                        />
                      </span>
                      <span>Astro</span>
                    </span>
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                  >
                    {renderIcon(open)}
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {width && width < 1024 && (
                        <Menu mobile navigation={navigation} />
                      )}

                      <Button className="w-full mt-3">Get Started</Button>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {width && width >= 1024 && <Menu navigation={navigation} />}

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Button onClick={handleRegister}>Get Started</Button>
            <ThemeChanger />
          </div>
        </nav>
      </div>

      <ModalRoot
        show={show}
        onClose={handleClose}
        title="Create your free account"
      >
        <RegisterModalContent />
      </ModalRoot>
    </>
  );
};

export default Navbar;

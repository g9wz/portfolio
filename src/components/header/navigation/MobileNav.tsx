"use client";

import { useState, useEffect } from "react";

import Menu from "~icons/line-md/menu";
import Close from "~icons/line-md/menu-to-close-transition";

import NavLinks from "../parts/NavLinks";
import Socials from "../parts/Socials";

const MobileNav = ({ navLinks }: { navLinks: string[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resetAnimationKey, setResetAnimationKey] = useState(0);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setResetAnimationKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <>
      <button
        className="fixed right-7 top-7 z-50 md:hidden"
        onClick={toggleMenu}
        aria-label="nav menu toggle button"
      >
        {isMenuOpen ? (
          <Close className="h-8 w-8" />
        ) : (
          <Menu className="h-8 w-8" />
        )}
      </button>

      <nav
        className={`fixed z-40 flex h-screen w-screen ${
          isMenuOpen ? "scale-100" : "scale-0"
        } flex-col items-center justify-center gap-y-16 bg-primary transition-transform duration-300 md:hidden`}
      >
        <NavLinks navLinks={navLinks} onLinkClick={toggleMenu} />
        <Socials
          resetAnimationKey={resetAnimationKey}
          containerStyle="flex gap-x-5"
        />
      </nav>
    </>
  );
};

export default MobileNav;

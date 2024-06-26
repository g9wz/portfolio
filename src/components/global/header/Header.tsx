"use client";

import { useState } from "react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/global";

import InitialMenuIcon from "~icons/line-md/menu";
import MenuIcon from "~icons/line-md/close-to-menu-transition";
import CloseIcon from "~icons/line-md/menu-to-close-transition";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMenuBeenOpened, setHasMenuBeenOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!hasMenuBeenOpened) {
      setHasMenuBeenOpened(true);
    }
  };

  return (
    <header className="relative z-50 mt-12 flex items-center justify-between lg:px-[2%] xl:px-[4%]">
      <span className="mt-2 text-[23px] font-semibold !leading-none md:text-2xl">
        Khalil Melhem.
      </span>

      <nav className="relative flex items-center gap-x-2 max-md:-mr-2 max-md:scale-95 md:gap-x-4">
        <Button asChild variant="dark">
          <Link href="#contact">
            <div className="mr-2 size-1.5 rounded-full bg-green-500 shadow-[0px_0px_6px] shadow-green-400" />
            Hire Me
          </Link>
        </Button>

        <Button size="icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon aria-label="Close menu" />
          ) : hasMenuBeenOpened ? (
            <MenuIcon aria-label="Open menu" />
          ) : (
            <InitialMenuIcon aria-label="Open menu" />
          )}
        </Button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-3 w-full space-y-2 rounded-2xl border-2 border-foreground bg-background p-4"
            >
              {navItems.map((item) => (
                <motion.div key={item.name}>
                  <Button asChild className="w-full">
                    <Link href={item.href} onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

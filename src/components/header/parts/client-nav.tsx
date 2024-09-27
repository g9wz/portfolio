"use client";

import { useState } from "react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import InitialMenuIcon from "~icons/line-md/menu";
import MenuIcon from "~icons/line-md/close-to-menu-transition";
import CloseIcon from "~icons/line-md/menu-to-close-transition";

const ClientNav = ({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMenuBeenOpened, setHasMenuBeenOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!hasMenuBeenOpened) {
      setHasMenuBeenOpened(true);
    }
  };

  return (
    <>
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
    </>
  );
};

export default ClientNav;

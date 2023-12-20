"use client";

import { useState, useEffect } from "react";

const NavLinks = ({
  navLinks,
  onLinkClick
}: {
  navLinks: string[];
  onLinkClick?: () => void;
}) => {
  const [currentActiveLink, setCurrentActiveLink] = useState("");

  useEffect(() => {
    const updateActiveLink = () => {
      let top = window.scrollY;

      navLinks.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          let offset = section.offsetTop - 300;
          let height = section.offsetHeight;

          if (top >= offset && top < offset + height) {
            setCurrentActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // init on mount

    return () => window.removeEventListener("scroll", updateActiveLink);
  }, [navLinks]);

  return (
    <ul className="flex flex-col gap-y-10 md:flex-row-reverse md:gap-x-5 md:gap-y-0">
      {navLinks.map((link) => (
        <li key={link} className="text-center text-2xl md:text-base">
          <a
            href={`#${link}`}
            className={`relative font-medium capitalize tracking-wider before:absolute before:top-1/2 before:h-[0.175rem] ${
              currentActiveLink === link ? "before:w-full" : "before:w-0"
            } before:bg-accent before:transition-[width] before:duration-[400ms] before:content-[''] hover:before:w-full hover:before:transition-[width] hover:before:duration-[400ms] md:before:h-[0.125rem]`}
            onClick={onLinkClick}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

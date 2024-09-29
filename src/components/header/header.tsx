import Link from "next/link";

import { Button } from "../ui/button";
import ClientNav from "./parts/client-nav";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
];

const Header = () => {
  return (
    <header className="relative z-50 mt-12 flex items-center justify-between lg:px-[2%] xl:px-[4%]">
      <span className="mt-2 text-[23px] font-semibold !leading-none md:text-2xl">
        Khalil Melhem.
      </span>

      <nav className="relative flex items-center gap-x-2 max-md:-mr-2 max-md:scale-95 md:gap-x-4">
        <Button asChild variant="dark">
          <Link href="#contact">
            <div className="mr-2 size-1.5 rounded-full bg-green-500 shadow-[0px_0px_6px] shadow-green-400" />
            Contact Me
          </Link>
        </Button>

        <ClientNav navItems={navItems} />
      </nav>
    </header>
  );
};

export default Header;

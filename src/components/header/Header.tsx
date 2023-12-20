import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const Header = () => {
  const navLinks = ["home", "about", "work", "contact"];

  return (
    <header className="flex flex-col md:fixed md:bottom-8 md:left-4 md:top-8 md:w-14 md:items-center md:justify-between lg:w-20">
      <span className="fixed left-7 top-7 z-50 cursor-pointer text-4xl font-bold transition-colors duration-300 hover:text-accent md:static md:mb-7">
        K’
      </span>
      <DesktopNav navLinks={navLinks} />
      <MobileNav navLinks={navLinks} />
    </header>
  );
};

export default Header;

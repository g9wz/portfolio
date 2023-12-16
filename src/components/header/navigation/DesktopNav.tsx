import NavLinks from "../parts/NavLinks";
import Socials from "../parts/Socials";

const DesktopNav = ({ navLinks }: { navLinks: string[] }) => {
  return (
    <>
      <nav className="hidden -rotate-90 transform md:block">
        <NavLinks navLinks={navLinks} />
      </nav>
      <Socials containerStyle="mt-7 hidden flex-col gap-y-4 md:flex" />
    </>
  );
};

export default DesktopNav;

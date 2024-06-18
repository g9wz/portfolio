import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between pt-10">
      <span className="text-2xl font-semibold max-md:hidden">
        Khalil Melhem.
      </span>

      <nav className="flex items-center justify-center gap-2 rounded-2xl bg-black/[0.04] p-2 max-md:mx-auto">
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="px-2.5 text-left text-sm font-medium transition-opacity hover:opacity-75"
          >
            {name}
          </Link>
        ))}

        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-xl bg-white p-2 px-4 shadow-xl transition-opacity hover:opacity-75"
        >
          <div className="size-[6px] rounded-full bg-green-500 shadow-[0px_0px_6px] shadow-green-400" />
          Hire Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;

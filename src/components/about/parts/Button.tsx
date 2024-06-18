import Link from "next/link";

import ArrowUpRight from "~icons/ph/arrow-up-right-bold";

const Button = () => {
  return (
    <Link
      href="#"
      // target="_blank"
      className="group inline-flex items-center rounded-2xl border-2 border-white px-9 py-4 font-semibold leading-4 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      See my Resumé
      <ArrowUpRight className="ml-1 font-bold transition-transform duration-300 ease-in-out group-hover:rotate-45" />
    </Link>
  );
};

export default Button;

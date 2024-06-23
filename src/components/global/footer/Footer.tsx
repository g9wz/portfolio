import { Links } from "@/components/global";

const Footer = () => {
  return (
    <footer className="padding-b-gone z-10 mt-5 py-5 lg:mt-14">
      <div className="flex flex-col-reverse items-center justify-between gap-y-7 border-t-4 border-foreground p-5 leading-none md:flex-row lg:mx-[8%] lg:px-10 lg:pt-10">
        <div className="text-lg font-medium leading-none">
          ©2024 Khalil Melhem
        </div>
        <Links />
      </div>
    </footer>
  );
};

export default Footer;

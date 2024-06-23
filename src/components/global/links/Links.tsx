import Link from "next/link";

import ThemeToggle from "@/components/global/theme/ThemeToggle";

import GithubIcon from "~icons/line-md/github-loop";
import LinkedinIcon from "~icons/line-md/linkedin";

const links = [
  {
    url: "https://github.com/g9wz",
    icon: GithubIcon,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/khalil-melhem/",
    icon: LinkedinIcon,
    name: "Linkedin",
  },
];

interface LinksProps extends React.HTMLAttributes<HTMLUListElement> {}

const Links = ({ className, ...props }: LinksProps) => {
  return (
    <ul className={`flex justify-end gap-x-6 px-2 ${className}`} {...props}>
      <li>
        <ThemeToggle />
      </li>
      {links.map(({ url, icon: Icon, name }, idx) => (
        <li key={idx}>
          <Link
            href={url}
            target="_blank"
            aria-label={name}
            className="block rounded-2xl p-2 hover:bg-foreground hover:text-background"
          >
            <Icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;

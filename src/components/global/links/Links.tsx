import Link from "next/link";

import TwitterX from "~icons/line-md/twitter-x";
import GithubIcon from "~icons/line-md/github-loop";
import LinkedinIcon from "~icons/line-md/linkedin";

const links = [
  {
    url: "https://x.com/iKhalilM",
    icon: TwitterX,
    name: "X (Previously Twitter)",
  },
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
      {links.map(({ url, icon: Icon, name }, idx) => (
        <li key={idx}>
          <Link
            href={url}
            target="_blank"
            aria-label={name}
            className="block rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-black/[0.04]"
          >
            <Icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;

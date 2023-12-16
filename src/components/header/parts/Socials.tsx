import UsedToBeTwitter from "~icons/line-md/twitter-x";
import GitHub from "~icons/line-md/github-loop";
import LinkedIn from "~icons/line-md/linkedin";

const socialLinks = [
  {
    href: "https://x.com/iKhalilM/",
    icon: UsedToBeTwitter,
    label: "Link to my X account (formerly Twitter)"
  },
  {
    href: "https://github.com/g9wz/",
    icon: GitHub,
    label: "Link to my GitHub account"
  },
  {
    href: "https://linkedin.com/in/khalil-melhem/",
    icon: LinkedIn,
    label: "Link to my LinkedIn account"
  }
];

const Socials = ({
  containerStyle,
  resetAnimationKey
}: {
  containerStyle: string;
  resetAnimationKey?: number;
}) => {
  return (
    <ul className={containerStyle}>
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener" aria-label={label}>
            <Icon
              key={resetAnimationKey}
              className="h-8 w-8 transition-colors duration-300 hover:text-accent md:h-6 md:w-6"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;

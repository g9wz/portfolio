import ErbutPreview from "./images/erbut.gif";
import SarndPreview from "./images/sarnd.gif";
import GdscPreview from "./images/gdsc.gif";
import GameCampPreview from "./images/game-camp.gif";

export const projects = [
  {
    url: "https://erbut.me/",
    image: ErbutPreview,
    alt: "Animated GIF of the Erbut website, showing landing page, features grid, and testimonials.",
    title: "Erbut",
    description:
      "Co-founded a link-in-bio tool. Built with Go, gRPC, PostgreSQL, React, Zustand, Framer Motion, and Tailwind CSS. Self-hosted with the help of Coolify as a microservices architecture.",
  },
  {
    url: "https://sarnd.sa/",
    image: SarndPreview,
    alt: "Animated GIF of Sarnd's landing page with hero section and background video.",
    title: "Sarnd",
    description:
      "Designed, built, and deployed from scratch using Next.js and Tailwind CSS. Meeting strict client requirements, including specific text lengths and provided images.",
  },
  {
    url: "https://gdscyu.netlify.app/",
    image: GdscPreview,
    alt: "Animated GIF of GDSC Yu landing page with 3D logo, slogan, and join button.",
    title: "Google DSC | Yu",
    description:
      "Conceived as a member, initiated as engineering lead, and refined as club lead. Built with SvelteKit, Threlte, Tailwind CSS, and a lot of team fights <3",
  },
  {
    url: "https://gamecamp-gdscyu.netlify.app/",
    title: "Game Camp",
    image: GameCampPreview,
    alt: "Animated GIF of Game Camp landing page with pixel art background and event info.",
    description:
      "Pixel art-themed site for the annual game camp. Features speakers, schedule, and FAQs. Built using Astro and Tailwind CSS (Yes, I love tailwind that much ¯\\_(ツ)_/¯).",
  },
];

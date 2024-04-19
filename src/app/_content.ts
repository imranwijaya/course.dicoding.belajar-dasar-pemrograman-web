import type { StaticImageData } from "next/image";
import recipePageDesktop from "../../public/recipe-page-desktop.png";
import myGalleryDesktop from "../../public/my-gallery-desktop.png";
import checkoutPageDesktop from "../../public/checkout-page-desktop.png";
import blogHowToOrganizeYourCss from "../../public/blog-how-to-organize-your-css.png";

export type ProjectTag =
  | "HTML"
  | "CSS"
  | "responsive"
  | "Next.js"
  | "Recipe"
  | "Masonry"
  | "Gallery"
  | "Checkout";

type Project = {
  title: string;
  description: string;
  tag: ProjectTag[];
  image: StaticImageData | string;
  imageAlt: string;
  hrefDemo: string;
  hrefCode: string;
};

type Blog = {
  category: string;
  title: string;
  description: string;
  href: string;
  hrefName: string;
  image: StaticImageData | string;
  imageAlt: string;
};

export const projectTags: ProjectTag[] = [
  "HTML",
  "CSS",
  "responsive",
  "Next.js",
  "Recipe",
  "Masonry",
  "Gallery",
  "Checkout",
];

export const projects: Project[] = [
  {
    title: "Recipe Blog",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Recipe"],
    image: recipePageDesktop,
    imageAlt: "Recipe Blog",
    hrefDemo:
      "https://devchallenges-solutions.vercel.app/legacy/responsive-web-developer/recipe-page",
    hrefCode:
      "https://github.com/imranwijaya/devchallenges/tree/legacy/src/app/responsive-web-developer/recipe-page",
  },
  {
    title: "My Gallery",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Masonry", "Gallery"],
    image: myGalleryDesktop,
    imageAlt: "My Gallery",
    hrefDemo:
      "https://devchallenges-solutions.vercel.app/legacy/responsive-web-developer/my-gallery",
    hrefCode:
      "https://github.com/imranwijaya/devchallenges/tree/legacy/src/app/responsive-web-developer/my-gallery",
  },
  {
    title: "Checkout",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Checkout"],
    image: checkoutPageDesktop,
    imageAlt: "Checkout Page",
    hrefDemo:
      "https://devchallenges-solutions.vercel.app/legacy/responsive-web-developer/checkout-page",
    hrefCode:
      "https://github.com/imranwijaya/devchallenges/tree/legacy/src/app/responsive-web-developer/checkout-page",
  },
];

export const blogs: Blog[] = [
  {
    category: "Blog",
    title: "How to organize your CSS",
    description: `In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`,
    href: "https://dev.to/couellet/how-to-organize-your-css-with-a-modular-architecture-oocss-bem-smacss-3gk0",
    hrefName: "dev.to",
    image: blogHowToOrganizeYourCss,
    imageAlt: "How to organize your CSS",
  },
];

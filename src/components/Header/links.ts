import { links } from "../../constants/links";

type Link = {
  label: string;
  href: string;
};

export const mainLinks: Link[] = [
  {
    label: "About",
    href: links.ABOUT,
  },
  {
    label: "Blog",
    href: links.BLOG,
  },
  {
    label: "Events",
    href: links.EVENTS,
  },
  {
    label: "International",
    href: links.INTERNATIONAL,
  },
  {
    label: "Contact",
    href: links.CONTACT,
  },
];

export const authLinks: Link[] = [
  {
    label: "LOG IN",
    href: links.LOGIN,
  },
  {
    label: "JOIN US",
    href: links.REGISTER,
  },
];

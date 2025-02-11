// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/aboutus" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Tools & Equipment", url: "/products" },
  //     { name: "Construction Services", url: "/services" },
  //   ],
  // },
  {
    section: "Sections",
    links: [
      { name: "About us", url: "/aboutus" },
      { name: "Blog", url: "/blog" },
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/es/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
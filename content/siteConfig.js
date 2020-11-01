function menuItem(title, url) {
  return {
    title,
    url,
  };
}

export const mainMenu = [
  menuItem("Books", "/books/things-we-didnt-say"),
  menuItem("Meet Amy", "/about"),
  menuItem("Contact", "/contact"),
];

export const socialLinks = {
  facebook: "https://www.facebook.com/amygreenbooks/",
  instagram: "https://www.instagram.com/amygreenbooks/",
};

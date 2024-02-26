export default function NavPath(pathName: string) {
  if (pathName === "/about") {
    return {
      prevLink: "/projects",
      nextLink: "/",
    };
  } else if (pathName === "/projects") {
    return {
      prevLink: "/",
      nextLink: "/about",
    };
  } else {
    return {
      prevLink: "/about",
      nextLink: "/projects",
    };
  }
}

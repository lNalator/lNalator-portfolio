export default function NavPath(pathName: string) {
  if (pathName === "/contact") {
    return {
      prevLink: "/projects",
      nextLink: "/",
    };
  } else if (pathName === "/projects") {
    return {
      prevLink: "/",
      nextLink: "/contact",
    };
  } else {
    return {
      prevLink: "/contact",
      nextLink: "/projects",
    };
  }
}

import React from "react";

type Props = {};

const MainNav = (props: Props) => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <ul className="flex gap-4">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <a href={route.path}>{route.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNav;

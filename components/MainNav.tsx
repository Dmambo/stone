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
      {" "}
      <div >
        <ul className="hidden md:flex gap-4 ">
          {routes.map((route, index) => {
            return (
              <li key={index}>
                <a href={route.path}>{route.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/*  */}
      <div
      >
        <div>
        <ul className="md:hidden flex flex-col gap-4 ">
          {routes.map((route, index) => {
            return (
              <li key={index} className=" flex  items-center mt-10">
                <a href={route.path}>{route.name}</a>
              </li>
            );
          })}
        </ul>
          
        </div>
      </div>
    </div>
  );
};

export default MainNav;

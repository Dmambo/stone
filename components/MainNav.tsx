import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

type Route = {
  name: string;
  path: string;
  active: boolean;
};

type Props = {};

const MainNav = (props: Props) => {
  const [routes, setRoutes] = useState<Route[]>([
    {
      name: "Home",
      path: "/",
      active: false,
    },
    {
      name: "Gallery",
      path: "/gallery",
      active: false,
    },
    {
      name: "About",
      path: "/about",
      active: false,
    },
    {
      name: "Contact",
      path: "/contact",
      active: false,
    },
  ]);

  const handleRouteClick = (index: number) => {
    const updatedRoutes = [...routes];
    updatedRoutes.forEach((route, i) => {
      if (i === index) {
        route.active = true;
      } else {
        route.active = false;
      }
    });
    setRoutes(updatedRoutes);
  };

  return (
    <div>
      {" "}
      <div >
        <ul className="hidden md:flex gap-4 ">
          {routes.map((route, index) => {
            return (
              <li
                key={index}
                className={cn(
                  "hover:text-slate-400",
                  "text-xl font-bold",
                  route.active ? "text-slate-200" : "text-white"
                )}
                onClick={() => handleRouteClick(index)}
              >
                <Link href={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/*  */}
      <div>
        <div>
          <ul className="md:hidden flex flex-col gap-4 ">
            {routes.map((route, index) => {
              return (
                <li key={index} className=" flex  items-center mt-10">
                  <Link href={route.path}>{route.name}</Link>
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

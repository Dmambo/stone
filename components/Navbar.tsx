import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MainNav from "./MainNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-around p-2 items-center bg-black text-white">
        <div><MainNav /></div>
        <div>
        <Image src="/logo2.png" alt="logo" width={94} height={19} />
      </div>
    
      <div>
        <Button variant={"secondary"}>Get consultation</Button>
      </div>
    </div>
  );
};

export default Navbar;

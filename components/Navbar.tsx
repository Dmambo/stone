"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import MainNav from "./MainNav";
import { Menu, XCircle } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {

  const [open, setOpen] = useState(false)

  const handleGetConsultation = () => {
    window.location.href = 'https://wa.link/6igttg'; // Set the URL you want to open
  };


  return (
    <main className="bg-black text-white">
      <div className="hidden md:flex justify-around p-2 items-center">
        <div><MainNav /></div>
  
        <div className="flex">
          <Image src="/logo2.png" alt="logo" width={94} height={19} />
        </div>
        <div className="hidden md:block">
          <Button variant={"secondary"} onClick={handleGetConsultation}>Get consultation</Button>
        </div>


      </div>

      {/* mobile version */}

        <div className=" flex justify-between items-center mx-3"><div className=" md:hidden flex">
          <Image src="/logo2.png" alt="logo" width={94} height={19} />
        </div>
        <div className="z-50 md:hidden" onClick={() => setOpen(!open)}>{
          open ? <XCircle size={32} color="#000" /> : <Menu size={32} color="#fff" />
        }
</div></div>
        <div  className={`md:hidden flex-col bg-white absolute w-full h-full bottom-0  text-black py-14 pl-8 font-bold text-xl duration-500 ${open ? 'left-0' :  'left-[-100%]'}`}>
        <div className=" flex items-center justify-center m-auto font-bold text-2xl"><Image src="/logo1.png" alt="logo" width={94} height={19} /></div>
          <div onClick={() => setOpen(!open)}><MainNav /></div>
          <div className=" mt-8 block">
          <Button variant={"default"} onClick={handleGetConsultation}>Get consultation</Button>
        </div>
        </div>
        

    </main>
  );
};

export default Navbar;

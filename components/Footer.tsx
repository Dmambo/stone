import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Facebook, PhoneCall, Instagram} from 'lucide-react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-black w-auto text-white md:p-4 p-2 items-center">
      <div className="flex justify-between md:m-12 m-2">
        {" "}
        <div>
          <Image src="/logo2.png" alt="logo2" width={84} height={84} />
        </div>
        <div>
          <h2 className="mb-4">Information</h2>
          <ul className="text-xs text-slate-300 ">
            <li className="mb-3">Shipping</li>
            <li className="mb-3">Privacy</li>
            <li className="mb-3">Returns</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4">About</h2>
          <ul className="text-xs text-slate-300 ">
            <Link href='/about'>
            <li className="mb-3">Our Story</li>
            </Link>
            <li className="mb-3">Terms</li>
            <li className="mb-3">FAQ</li>
            <Link href='/contact'><li className="mb-3">Contact</li></Link>
          </ul>
        </div>
        <div>
          <h2 className="mb-4">Contact</h2>
          <ul className="text-xs text-slate-300 ">
            <li className="mb-3">Info</li>
            <li className="mb-3">+66823650818</li>
            <li className="mb-3"><div className="flex text-xs gap-1"><Facebook />
            <PhoneCall />
            <Instagram />
            </div></li>
          </ul>
        </div>
      </div>
      <Separator className="text-slate-300 mb-8" />
      <div className=" flex justify-between text-xs text-slate-300 m-5"><div><p>© 2023 Savane Gems co.ltd </p></div>
      <div><p> All rights reserved.</p></div></div>
    </div>
  );
};

export default Footer;

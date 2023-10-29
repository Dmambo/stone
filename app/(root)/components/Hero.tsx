import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="  flex-col-reverse justify-around items-center p-6 bg-black text-white m-8 rounded-2xl w-auto">
      <div className=" md:flex justify-around items-center"><div className="">
        <h1 className=" font-bold text-4xl">
          Discover the World of Gemstones{" "}
        </h1>
        <p>
          Explore our exquisite collection of gemstones and find the perfect
          piece for your jewelry.{" "}
        </p>
        <Link href="/gallery">
                <Button variant={"destructive"} className="text-white mt-4">
                  Check our Gallery
                </Button>
              </Link>
      </div>
      <div className="rounded-lg">
        <Image
          src="/gem1.jpg"
          alt="pagegem"
          width={314}
          height={84}
          className="rounded-3xl"
        />
      </div></div>
    </div>
  );
};

export default Hero;

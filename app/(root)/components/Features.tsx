import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="flex-1">
      <div>
        <div className="flex-col-reverse justify-around gap-5 items-center p-6 bg-slate-500 text-white m-8 rounded-2xl w-auto">
          <div className="md:flex justify-around items-center">
            {" "}
            <div className=" gap-4">
              <h1 className="mb-4 font-bold text-3xl">
                Wide Selection of Gemstones{" "}
              </h1>
              <p className="mb-4 text-sm">
                We offer a wide variety of gemstones, from diamonds to emeralds,
                allowing you to create unique and stunning jewelry.
              </p>
              <Link href="/gallery">
                <Button variant={"secondary"} className="text-black mb-4">
                  Check our Gallery
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="/gem2.jpg"
                alt="gem"
                width={314}
                height={84}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex-col-reverse  justify-around items-center p-6 bg-slate-500 text-white m-8 rounded-2xl w-auto">
<div className="md:flex md:flex-row-reverse justify-around items-center">          <div className=" gap-6  ml-2">
            <h1 className="mb-4 font-bold text-3xl">
              Beautiful Gemstone Jewelry{" "}
            </h1>
            <p className="mb-4 text-sm">
              Explore our collection of stunning gemstone jewelry, perfect for
              any occasion.{" "}
            </p>
            <Link href="/gallery">
              <Button variant={"secondary"} className="text-black mb-4">
                Check our Gallery
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/gem3.jpg"
              alt="gem3"
              width={314}
              height={84}
              className="rounded-3xl"
            />
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Features;

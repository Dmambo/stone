import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <div className="m-6 ">
        <div className="flex justify-center items-center my-4">
          <h1 className="font-bold text-xl my-4">About Us</h1>
        </div>
        <div className="gap-5 flex-col justify-between bg-black text-white p-8 rounded-3xl ">
          <div className="flex justify-center items-center">
            {" "}
            <div>
              {" "}
              <Image src="/ceo.jpeg" alt="ceo" width={250} height={84} />{" "}
              <span className="m-4">
                <p className=" font-bold text-lg">
                  {" "}
                  <strong>MOUSTAPHA KEITA</strong>{" "}
                  <span className=" text-slate-600">manager</span>
                </p>
              </span>
            </div>
          </div>
          <div>
            {" "}
            <p className=" leading-6 text-sm">
              Welcome to Savane Gems Co. Ltd! I&rsquo;m Moustapha Keita, the
              manager of our gemstone business established in 2014. We&rsquo;re
              your go-to source for a wide variety of top-quality gemstones.
              Whether you&rsquo;re a private collector or in the commercial
              sector, we&rsquo;ve got you covered. Our mission is to provide you
              with exquisite gemstones, sourced with care and expertise, and
              delivered with exceptional customer service. Explore our
              collection and let the world of gemstones enchant you. Thank you
              for considering Savane Gems for your gemstone needs. We&rsquo;re
              here to make your experience truly remarkable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from "react";
import { CheckCircle, Star } from "lucide-react";

type Props = {};

const Slug = (props: Props) => {
  return (
    <div className="bg-gray-800 p-6 flex flex-col md:flex-row">
      <div className="m-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Bringing the beauty of Gemstones to you!
        </h1>
      </div>
      <div className="m-4 flex flex-col md:flex-row text-slate-300">
        <div className="flex gap-2 mb-4 md:mb-0 md:mr-4">
          <CheckCircle color="#434e9d" />
          <span>
            <p className="text-sm md:text-base">Exquisite gemstones for elegant jewelry</p>
          </span>
        </div>
        <div className="flex gap-2">
          <Star color="#434e9d" />
          <span>
            <p className="text-sm md:text-base">Create stunning pieces with our gemstones</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slug;

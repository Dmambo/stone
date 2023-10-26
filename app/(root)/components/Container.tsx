import React from "react";

type Props = {};

const Container = (props: Props) => {
  return (
    <div >
      <div className="flex justify-center align-middle m-4 py-6">
        <h2 className=" m-4 font-bold text-3xl">Trusted by <span className=" text-red-600">1,000+</span> both private and commercial entities</h2>
      </div>
      <div className="flex justify-around items-center font-bold">
        <h4>GEMSTONE</h4>
        <h4>JEWERY</h4>
        <h4>ROCKS</h4>
      </div>
    </div>
  );
};

export default Container;

import React from "react";

const About = () => {
  return (
    <div className="w-full my-32 text-center">
      <div className="max-w-[1100px] mx-auto">
        <div className="py-7 ">
          <h1 className="text-5xl font-bold ">
            Trusted by developers across the world
          </h1>
          <p className="text-3xl py-6 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            dignissimos aliquam atque accusamus facilis incidunt fugit suscipit!
          </p>
        </div>
        <div className=" grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="w-full py-8 text-center border rounded-md shadow-gray-200 shadow-xl">
            <p className="text-5xl text-indigo-600 font-bold">100%</p>
            <p className="text-slate-400 mt-2">Completeion</p>
          </div>
          <div className="w-full py-8 text-center border rounded-md shadow-gray-200 shadow-xl">
            <p className="text-5xl text-indigo-600 font-bold">24/7</p>
            <p className="text-slate-400 mt-2">Delivery</p>
          </div>
          <div className="w-full py-8 text-center border rounded-md shadow-gray-200 shadow-xl">
            <p className="text-5xl text-indigo-600 font-bold">100K</p>
            <p className="text-slate-400 mt-2">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

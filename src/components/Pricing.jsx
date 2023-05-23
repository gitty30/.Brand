import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
const Pricing = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full h-[700px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-14 relative">
        <h1 className="text-center text-3xl py-3 text-slate-400 uppercase">
          Pricing
        </h1>
        <h2 className="text-5xl text-center py-4 font-bold">
          The right price of research.
        </h2>
        <p className="text-3xl text-slate-400 text-center py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a
          voluptatum magnam consequatur necessitatibus obcaecati velit sint.
        </p>
        <div className=" grid md:grid-cols-2 gap-8">
          <div className=" bg-white text-black rounded-lg p-8 shadow-2xl">
            <span className="py-1 px-2 uppercase bg-indigo-200 font-semibold text-sm rounded-2xl text-indigo-900 ">
              Standard
            </span>
            <div className="py-5 text-6xl">
              <p className="font-bold  flex ">
                $49
                <span className="text-xl flex flex-col justify-end text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <div className="">
              <p className="text-2xl py-9 text-slate-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
              <div className="flex flex-col gap-7">
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <button className="max-w-full py-4 text-2xl my-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white text-black rounded-lg p-8 shadow-2xl">
            <span className="py-1 px-2 uppercase bg-indigo-200 font-semibold text-sm rounded-2xl text-indigo-900 ">
              Standard
            </span>
            <div className="py-5 text-6xl">
              <p className="font-bold  flex ">
                $49
                <span className="text-xl flex flex-col justify-end text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <div className="">
              <p className="text-2xl py-9 text-slate-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
              <div className="flex flex-col gap-7">
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <p className=" flex text-2xl font-medium gap-5">
                  <CheckIcon className="w-8 text-green-600 " />
                  Lorem, ipsum dolor.
                </p>
                <button className="max-w-full py-4 text-2xl my-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

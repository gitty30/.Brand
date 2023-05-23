import React from "react";
import {
  PhoneIcon,
  CpuChipIcon,
  LifebuoyIcon,
} from "@heroicons//react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons//react/24/solid";
import Suuport from "../assets/support.jpg";
const Support = () => {
  return (
    <div className="w-full  mt-24">
      <div className="w-full h-[700px] bg-slate-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={Suuport}
          alt="support"
        />
      </div>
      <div className="max-w-[1240px]  text-white mx-auto relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 uppercase text-center">Support</h2>
          <h3 className="text-5xl py-8 font-bold text-center">
            Finding the right team
          </h3>
          <p className="text-slate-200 text-3xl  py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit
            adipisci dolor error saepe atque laudantium quas dolore deserunt
            illum quis ut perspiciatis inventore ullam quia voluptas, excepturi
            fugiat voluptates.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-7 gap-y-16 px-4 py-12 text-black ">
          <div className="rounded-xl  shadow-2xl bg-white ">
            <div className="p-8">
              <PhoneIcon className=" bg-indigo-600 text-white w-16 p-4 rounded-lg mt-[-4rem]" />
              <h3 className="text-black text-3xl py-5 font-bold ">Sales</h3>
              <p className="text-gray-500 pr-8 text-xl font-medium ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, corporis. Autem laborum corrupti hic quae, sunt
                tempora. Exercitationem distinctio nemo consequatur quia est
                vel.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-bold">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="rounded-xl  shadow-2xl bg-white ">
            <div className="p-8">
              <LifebuoyIcon className=" bg-indigo-600 text-white w-16 p-4 rounded-lg mt-[-4rem]" />
              <h3 className="text-black text-3xl py-5 font-bold ">Technical Support</h3>
              <p className="text-gray-500 pr-8 text-xl font-medium ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, corporis. Autem laborum corrupti hic quae, sunt
                tempora. Exercitationem distinctio nemo consequatur quia est
                vel.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-bold">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="rounded-xl  shadow-2xl bg-white ">
            <div className="p-8">
              <CpuChipIcon className=" bg-indigo-600 text-white w-16 p-4 rounded-lg mt-[-4rem]" />
              <h3 className="text-black text-3xl py-5 font-bold ">Media Inquiries</h3>
              <p className="text-gray-500 pr-8 text-xl font-medium ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, corporis. Autem laborum corrupti hic quae, sunt
                tempora. Exercitationem distinctio nemo consequatur quia est
                vel.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-bold">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

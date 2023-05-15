import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const navLink = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Support",
      link: "/support",
    },
    {
      title: "Platforms",
      link: "/platforms",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
  ];
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="w-full h-full flex justify-between items-center px-2">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">
            BRAND.
          </h1>
          <ul className="hidden md:flex">
            {navLink.map((item) => (
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Signup
          </button>
          <button className="px-6 py-3">Login</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-7" /> : <XMarkIcon className="w-7" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        {navLink.map((item) => (
          <li className="border-b-2 border-zinc-300 w-full">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
        <div className="flex flex-col my-4 ">
          <button className="bg-transparent text-indigo-600  mb-4 py-3">
            Signup
          </button>
          <button className="px-6 py-3">Login</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

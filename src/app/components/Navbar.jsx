"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="flex items-center justify-center text-sm bg-black rounded-md p-1 font-semibold"
        >
          <span className="text-white mr-1">Abhishek</span>
          <span className="flex items-center justify-center w-12 h-8 rounded text-black bg-white ">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/AbhishekMadaan23">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-around z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>

        {/* MENU LIST    */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => {
              return (
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import React from "react";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 "
      >
        {/* FIRST ANIMATION DIV */}
        <motion.div
          className="h-screen w-screen bg-black z-40 fixed rounded-b-[100px] "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* TEXT ANIMATION DIV */}
        <motion.div
          className=" h-fit w-fit inset-0 m-auto z-50 fixed text-white cursor-default text-8xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        {/* SECOND ANIMATION DIV */}
        <motion.div
          className="h-screen w-screen bg-black z-40 fixed rounded-t-[100px] bottom-0 "
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

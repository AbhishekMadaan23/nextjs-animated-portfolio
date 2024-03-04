"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import airbnb from "../../../airbnbSite.png";
import crystalAromatics from "../../../crystalSite.png";
import amr from "../../../amrSite.png";
import wardrobe from "../../../wardrobeSite.png";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Crystal Aromatics Official site",
    desc: "I designed and developed a fully responsive website utilizing React.js and Tailwind CSS. This project seamlessly adapts to various screen sizes and devices, providing an optimal viewing experience for users across platforms.",
    img: crystalAromatics,
    link: "https://indianessentialoils.co.in",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "AMR ltd. ",
    desc: "I spearheaded the design and development of a dynamic website using React.js and Tailwind CSS. This project boasts full responsiveness, effortlessly adjusting to diverse screen sizes and devices. Currently in the development phase",
    img: amr,
    link: "https://avery-metal-recycling.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Airbnb Clone",
    desc: "Utilized Next.js to develop a comprehensive Airbnb clone, integrating Server-Side Rendering (SSR) for enhanced performance and SEO optimization. Employed responsive design principles to ensure seamless functionality across various devices. Implemented features mirroring Airbnb's core functionalities, including search, listing display",
    img: airbnb,
    link: "https://air-bnb-dun-three.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "E-Commerce Clothing Website",
    desc: "I led the development of a comprehensive full-stack project, harnessing React with Styled Components for a polished frontend. By integrating React Redux for efficient state management and implementing JWT token authentication. Backend operations are powered by Node.js and Express.js, while MongoDB Atlas serves as the robust database solution",
    img: wardrobe,
    link: "#",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-56 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[360px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px]  xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

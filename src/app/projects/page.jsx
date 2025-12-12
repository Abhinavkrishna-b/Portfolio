"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Nyaaya Bot",
    desc: "A smart chatbot that helps people understand Indian laws by answering their questions in simple language using real legal documents.",
    img: "/project-1.jpg",
    link: "https://github.com/Abhinavkrishna-b/nyaayaBot",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Farmer Activity Management",
    desc: "A user friendly web application for farmers to manage their daily tasks including, task management, tracking finances, weather prediction, profit-loss analysis.",
    img: "/project-2.png",
    link: "https://github.com/Abhinavkrishna-b/Farmer_Activity_Management",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Portfolio Website",
    desc: "My Developer portfolio to showcase my skills, project, experience. Made with Framer Motion and Next.JS",
    img: "/project-3.png",
    link: "https://github.com/Abhinavkrishna-b/Portfolio",
  },
  {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Contact Manager",
      desc: "A app where you can easily add, view, edit, and delete all your contacts in one place and manage the contacts.",
      img: "/project-4.png",
      link: "https://github.com/Abhinavkrishna-b/Portfolio",
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
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl md:text-8xl text-center px-4">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Empty slide */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} px-4`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white w-full max-w-[900px] mx-auto text-left">
                  <h1 className="text-3xl md:text-4xl font-bold">{item.title}</h1>

                  <div className="relative w-full max-w-[500px] h-[250px] md:h-[350px]">
                    <Image 
                      src={item.img} 
                      alt="" 
                      fill 
                      className="object-cover rounded" 
                    />
                  </div>

                  <p className="w-full max-w-[500px] text-base md:text-lg">
                    {item.desc}
                  </p>

                  <Link href={item.link} className="flex justify-start">
                    <button className="p-3 md:p-4 text-sm md:text-md bg-white text-gray-700 font-semibold rounded">
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-screen h-screen flex flex-col gap-12 md:gap-16 items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-8xl">Do you have a project?</h1>

        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-48 h-48 md:w-64 md:h-64"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-sm md:text-xl">
                | Backend Developer | System Engineer
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-12 h-12 md:w-16 md:h-16 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm md:text-base"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

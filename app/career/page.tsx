"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DeskCareerVid from "../../components/DeskCareerVid";
import Image from "next/image";

const Career: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("mad");

  const videoUrl =
    "https://ipfs.io/ipfs/QmeJpxsnQQw5FvbH1pJf18nEywXKheuZugyVzZNNHx6o7K/QmeTNhQpMewhqK5NEP8mEwSEmNzEyJR7VtnP1MjkdrNRTZ";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const renderListItem = (
    item: string,
    imageSrc: string,
    width: number,
    height: number
  ) => (
    <motion.li
      key={item}
      variants={container}
      onClick={() => handleItemClick(item)}
      className="items-center flex flex-col"
    >
      <Image
        className={`webTitile object-contain ml-1 hover:opacity-70 shadow-2xl w-${width} h-${height} items-center flex flex-col ${
          selectedItem === item ? "opacity-100" : "opacity-50"
        }`}
        src={imageSrc}
        alt=""
        width={width}
        height={height}
      />
      {selectedItem === item && (
        <div className="w-10 h-1 mt-3 transform ease-in-out bg-yellow-500"></div>
      )}
    </motion.li>
  );

  return (
    <>
      <div className="hidden md:flex md:flex-row">
        {/* Sidebar content... */}
        <div className="hidden md:flex justify-center md:flex-row relative w-[30vw] bg-gradient-to-l from-black to-transparent h-[100vh]">
          <div className="overflow-hidden absolute top-24">
            <motion.ul
              className="cursor-pointer space-y-12"
              aria-label="Sidebar"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {renderListItem("mad", "/images/real1.png", 68, 68)}
              {renderListItem("dot", "/images/dortmund.png", 68, 68)}
              {renderListItem("bir", "/images/birminham.png", 68, 68)}
            </motion.ul>
          </div>
        </div>

        {/* Video content... */}
        <div className="hidden md:flex md:flex-column relative w-[70vw] bg-[url('/images/j11.jpg')] bg-cover h-[100vh]">
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-black opacity-80"></div>
          <div className="absolute  flex flex-row top-8  left-8 z-[100]">
            <Link href={"/"}>
              <div className="crumbs text-sm font-medium text-gray-400 ">
                HOME
              </div>
            </Link>

            <Link href={"/career"}>
              <div className="crumbs ml-1 text-sm font-medium text-white ">
                / GALLERY
              </div>
            </Link>
          </div>
          <div className="mt-20 h-[50vh] w-[full] z-20">
            {selectedItem === "mad" && <DeskCareerVid src={videoUrl} />}
            {selectedItem === "dot" && <DeskCareerVid src={videoUrl} />}
            {selectedItem === "bir" && <DeskCareerVid src={videoUrl} />}
          </div>
        </div>
      </div>

      {/* Mobile view content... */}
      <div className="md:hidden w-[100vw] h-[100vh] relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-90 bg-gradient-to-t from-black to-transparent"></div>

        <div className="h-[100vh] w-[100vw]">
          {selectedItem === "mad" && (
            <video
              className="object-cover h-[100vh] w-[100vw]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {selectedItem === "dot" && (
            <video
              className="object-cover h-[100vh] w-[100vw]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {selectedItem === "bir" && (
            <video
              className="object-cover h-[100vh] w-[100vw]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Sidebar for mobile view... */}
        <div className="overflow-hidden absolute top-48 left-6">
          <motion.ul
            className="cursor-pointer space-y-12"
            aria-label="Sidebar"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {renderListItem("mad", "/images/real1.png", 32, 32)}
            {renderListItem("dot", "/images/dortmund.png", 32, 32)}
            {renderListItem("bir", "/images/birminham.png", 32, 32)}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Career;

"use client"
import React, { useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

const Page: React.FC = () => {
  const [ch, setCh] = useState<boolean>(false);
  const [laliga, setLaliga] = useState<boolean>(false);
  const [copa, setCopa] = useState<boolean>(false);
  const [pri, setPri] = useState<boolean>(false);

  const handleMouseEnter = (setState: Function) => () => {
    setState(true);
  };

  const handleMouseLeave = (setState: Function) => () => {
    setState(false);
  };

  return (
    <>
      <div className="hidden md:flex md:flex-row">
        <div className="hidden md:flex md:flex-row relative w-[20vw] bg-gradient-to-l from-black to-transparent h-[100vh]">
          <div className="absolute top-72 left-6">
            <div className="glb text-white transform -rotate-90">GALLERY</div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row relative w-[80vw] bg-[url('/images/j11.jpg')] bg-cover h-[100vh]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <div className="absolute flex flex-row top-8 left-8 z-[100]">
            <Link href={"/"}>
              <div className="crumbs text-sm font-medium text-gray-400">HOME</div>
            </Link>
            <Link href={"/gallery"}>
              <div className="crumbs ml-1 text-sm font-medium text-white">/ GALLERY</div>
            </Link>
          </div>
          <div className="absolute top-40">
            <section className="bg-transparent">
              <div className="relative items-center w-full px-4 py-8 grid-rows-4 md:px-8 lg:px-6">
                <div className="flex flex-row">
                  <motion.ul
                    className="cursor-pointer flex flex-row space-x-8"
                    aria-label="Sidebar"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {[
                      { text: "Champions League", imageSrc: "/images/j1.jpg", state: ch, setState: setCh },
                      { text: "Copa Del Rey", imageSrc: "/images/j11.jpg", state: copa, setState: setCopa },
                      { text: "La Liga", imageSrc: "/images/j22.jpg", state: laliga, setState: setLaliga },
                      { text: "Personal", imageSrc: "https://ipfs.io/ipfs/QmQLSbRxdzYWixFKxzr51RkS7dNGvnaoMbcSDRnpcTvfa7", state: pri, setState: setPri }
                    ].map((item, index) => (
                      <motion.li key={index} variants={container}>
                        <Link href={"/gallery/cleague"}>
                          <figure
                            className="relative hover:border-2 border-yellow-500 shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out"
                            onMouseEnter={handleMouseEnter(item.setState)}
                            onMouseLeave={handleMouseLeave(item.setState)}
                          >
                            <Image
                              className="w-full bg-white"
                              src={item.imageSrc}
                              alt=""
                              width="1310"
                              height="873"
                            />
                            {item.state ? (
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                            ) : (
                              <>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                              </>
                            )}
                            <div className="absolute text-white mx-auto bottom-10">
                              <div className="deskGalbut">{item.text}</div>
                            </div>
                          </figure>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {[
          { backgroundImageUrl: "https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7", matchDetail: "CHAMPIONS LEAGUE", mt: "mt-16" },
          { backgroundImageUrl: "https://ipfs.io/ipfs/QmfZJNgr5fV7sMNPgKc1AMybZo6iAFJC7v6FxetX87QU5F", matchDetail: "COPA DEL REY", mt: "mt-2" },
          { backgroundImageUrl: "https://ipfs.io/ipfs/QmaAHgDuqx3LQSUKTNktvsD3xaDn5A7jGCQ7e3BnDobQwM", matchDetail: "LA LIGA", mt: "mt-2" },
          { backgroundImageUrl: "https://ipfs.io/ipfs/QmQLSbRxdzYWixFKxzr51RkS7dNGvnaoMbcSDRnpcTvfa7", matchDetail: "PERSONAL", mt: "mt-2" }
        ].map((item, index) => (
          <GalleryCard key={index} backgroundImageUrl={item.backgroundImageUrl} matchDetail={item.matchDetail} mt={item.mt} ilink={"/gallery/cleague"} />
        ))}
      </div>
    </>
  );
};
export default Page;

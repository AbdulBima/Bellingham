"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Custom hook to handle hover state and background image
const useHover = (initialImage: string) => {
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(initialImage);

  const handleMouseEnter = (image: string) => {
    setBackgroundImage(image);
    setIsHovered(true);
  };

  const handleMouseLeave = (defaultImage: string) => {
    setBackgroundImage(defaultImage);
    setIsHovered(false);
  };

  return { isHovered, backgroundImage, handleMouseEnter, handleMouseLeave };
};

// Reusable Sidebar Link component
const SidebarLink: React.FC<{ href: string; text: string; selected: boolean; onClick: () => void }> = ({
  href,
  text,
  selected,
  onClick,
}) => (
  <motion.li onClick={onClick} className={`deskPara flex flex-row ${selected ? "text-yellow-500" : "text-white opacity-60"}`}>
    {selected && <div className="bg-white mt-1.5 w-1 h-3 mr-2"></div>}
    <Link href={href}>{text}</Link>
  </motion.li>
);

const Home: React.FC = () => {
  const defaultImage = "/images/j1.jpg";
  const [selectedItem, setSelectedItem] = useState<string>("b");

  const careerHover = useHover(defaultImage);
  const charityHover = useHover(defaultImage);
  const galleryHover = useHover(defaultImage);
  const partnersHover = useHover(defaultImage);
  const shopHover = useHover(defaultImage);

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

  return (
    <>
      {/* Sidebar for mobile view */}
      <div className="md:hidden bg-[url('/images/j1.jpg')] bg-cover bg-center w-[100vw] h-[100vh]">
        <div className="absolute top-0 left-0 w-screen h-[100vh] opacity-30 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-screen h-[100vh] opacity-85 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute left-8 top-0 opacity-10 bottom-0 w-px bg-white"></div>
        <div className="overflow-hidden absolute left-6 top-72 opacity-80">
          <motion.ul className="cursor-pointer space-y-4" aria-label="Sidebar" variants={container} initial="hidden" animate="show">
            <SidebarLink href="/" text="HOME" selected={selectedItem === "b"} onClick={() => setSelectedItem("b")} />
            <SidebarLink href="/career" text="CAREER" selected={selectedItem === "e"} onClick={() => setSelectedItem("e")} />
            <SidebarLink href="/charity" text="CHARITY" selected={selectedItem === "c"} onClick={() => setSelectedItem("c")} />
            <SidebarLink href="/gallery" text="GALLERY" selected={selectedItem === "sy"} onClick={() => setSelectedItem("sy")} />
            <SidebarLink href="/partners" text="PARTNERS" selected={selectedItem === "s"} onClick={() => setSelectedItem("s")} />
            <SidebarLink href="/shop" text="SHOP" selected={selectedItem === "shop"} onClick={() => setSelectedItem("shop")} />
          </motion.ul>
        </div>
      </div>
      {/* Main content for larger screens */}
      <div
        className="hidden md:relative md:flex bg-cover bg-center h-[100vh]"
        style={{
          backgroundImage: `url(${careerHover.isHovered || charityHover.isHovered || galleryHover.isHovered || partnersHover.isHovered || shopHover.isHovered ? careerHover.backgroundImage : defaultImage})`,
          backgroundPosition: careerHover.isHovered || charityHover.isHovered || galleryHover.isHovered || partnersHover.isHovered || shopHover.isHovered ? "top center" : "center center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute flex flex-col">
          <Link href="/career">
            <p
              className="liti text-white hover:text-yellow-400 mt-20 ml-16"
              onMouseEnter={() => careerHover.handleMouseEnter("/images/j55.jpg")}
              onMouseLeave={() => careerHover.handleMouseLeave(defaultImage)}
            >
              Career
            </p>
          </Link>
          <Link href="/charity">
            <p
              className="liti text-white hover:text-yellow-400 -mt-10 ml-16"
              onMouseEnter={() => charityHover.handleMouseEnter("/images/j66.jpg")}
              onMouseLeave={() => charityHover.handleMouseLeave(defaultImage)}
            >
              Charity
            </p>
          </Link>
          <Link href="/gallery">
            <p
              className="liti text-white hover:text-yellow-400 -mt-10 ml-16"
              onMouseEnter={() => galleryHover.handleMouseEnter("/images/j11.jpg")}
              onMouseLeave={() => galleryHover.handleMouseLeave(defaultImage)}
            >
              Gallery
            </p>
          </Link>
          <Link href="/partners">
            <p
              className="liti text-white hover:text-yellow-400 -mt-10 ml-16"
              onMouseEnter={() => partnersHover.handleMouseEnter("/images/partners.jpg")}
              onMouseLeave={() => partnersHover.handleMouseLeave(defaultImage)}
            >
              Partners
            </p>
          </Link>
          <Link href="/shop">
            <p
              className="liti text-white hover:text-yellow-400 -mt-10 ml-16"
              onMouseEnter={() => shopHover.handleMouseEnter("/images/shop.jpg")}
              onMouseLeave={() => shopHover.handleMouseLeave(defaultImage)}
            >
              Shop
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

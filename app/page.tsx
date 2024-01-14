"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: React.FC = () => {
	// State variables for background image URL and hover states
	const [backgroundImageUrl, setBackgroundImageUrl] =
		useState<string>("/images/j1.jpg");
	const [isBrandHovered, setIsBrandHovered] =
		useState<boolean>(false);
	const [isShopHovered, setIsShopHovered] =
		useState<boolean>(false);
	const [isGalleryHovered, setIsGalleryHovered] =
		useState<boolean>(false);
	const [isCharityHovered, setIsCharityHovered] =
		useState<boolean>(false);

	// Functions to handle hover events
	const patnersHandleHover = () => {
		setBackgroundImageUrl("/images/j3.jpg");
		setIsBrandHovered(true);
	};
	const shopsHandleHover = () => {
		setBackgroundImageUrl("/images/judeb.png");
		setIsShopHovered(true);
	};
	const gallerysHandleHover = () => {
		setBackgroundImageUrl("/images/j11.jpg");
		setIsGalleryHovered(true);
	};
	const careerHandleHover = () => {
		setBackgroundImageUrl("/images/j55.jpg");
	};
	const charityHandleHover = () => {
		setBackgroundImageUrl("/images/j66.jpg");
		setIsCharityHovered(true);
	};

	// Functions to handle mouse leave events
	const brandHandleMouseLeave = () => {
		setBackgroundImageUrl("/images/j1.jpg");
		setIsBrandHovered(false);
	};
	const shopHandleMouseLeave = () => {
		setBackgroundImageUrl("/images/j1.jpg");
		setIsShopHovered(false);
	};
	const galleryHandleMouseLeave = () => {
		setBackgroundImageUrl("/images/j1.jpg");
		setIsGalleryHovered(false);
	};
	const careerHandleMouseLeave = () => {
		setBackgroundImageUrl("/images/j1.jpg");
	};
	const charityHandleMouseLeave = () => {
		setBackgroundImageUrl("/images/j1.jpg");
		setIsCharityHovered(false);
	};

	const [selectedItem, setSelectedItem] =
		useState<string>("b");

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
			<div className="md:hidden md:invisible bg-[url('/images/j1.jpg')] bg-cover bg-center w-[100vw] h-[100vh]">
				<div className='absolute top-0 left-0 w-screen h-[100vh] opacity-30 bg-gradient-to-r from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-screen h-[100vh] opacity-85 bg-gradient-to-t from-black to-transparent'></div>

				<div className='absolute left-8 top-0 opacity-10 bottom-0 w-px bg-white'></div>

				<div className='overflow-hidden absolute left-6 top-72 opacity-80'>
					<motion.ul
						className='cursor-pointer space-y-4'
						aria-label='Sidebar'
						variants={container}
						initial='hidden'
						animate='show'
					>
						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("b");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "b"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "b" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/"}> HOME </Link>
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("e");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "e"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "e" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/career"}>
								CAREER
							</Link>
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("c");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "c"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "c" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/charity"}>
								CHARITY
							</Link>
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("sy");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "sy"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "sy" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/gallery"}>
								GALLERY
							</Link>
						</motion.li>
						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("s");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "s"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "s" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/patners"}>
								PATNERS
							</Link>
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("shop");
							}}
							className={`deskPara flex flex-row ${
								selectedItem === "shop"
									? "text-yellow-500"
									: "text-white opacity-60"
							}`}
						>
							{selectedItem === "shop" ? (
								<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
							) : null}
							<Link href={"/"}>SHOP</Link>
						</motion.li>
					</motion.ul>
				</div>
			</div>

			<div
				className='hidden md:relative md:flex bg-cover bg-center h-[100vh]'
				style={{
					backgroundImage: `url(${backgroundImageUrl})`,
					backgroundPosition:
						isBrandHovered ||
						isShopHovered ||
						isGalleryHovered ||
						isCharityHovered
							? "top center"
							: "center center",
				}}
			>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
				<div className='absolute flex flex-col'>
					<Link href={"/career"}>
						<p
							className='liti text-white hover:text-yellow-400 mt-20 ml-16'
							onMouseEnter={careerHandleHover}
							onMouseLeave={
								careerHandleMouseLeave
							}
						>
							career
						</p>
					</Link>
					<Link href={"/charity"}>
						<p
							className='liti text-white hover:text-yellow-400 -mt-10 ml-16'
							onMouseEnter={
								charityHandleHover
							}
							onMouseLeave={
								charityHandleMouseLeave
							}
						>
							charity
						</p>
					</Link>

					<Link href={"/gallery"}>
						<p
							className='liti text-white hover:text-yellow-400 hover:transition hover:ease-in-out -mt-10 ml-16'
							onMouseEnter={
								gallerysHandleHover
							}
							onMouseLeave={
								galleryHandleMouseLeave
							}
						>
							gallery
						</p>
					</Link>
					<Link href={"/patners"}>
						<p
							className='liti text-white hover:text-yellow-400 ml-16 -mt-10'
							onMouseEnter={
								patnersHandleHover
							}
							onMouseLeave={
								brandHandleMouseLeave
							}
						>
							patners
						</p>
					</Link>
					<Link href={""}>
						<p
							className='liti text-white hover:text-yellow-400 -mt-10 ml-16'
							onMouseEnter={shopsHandleHover}
							onMouseLeave={
								shopHandleMouseLeave
							}
						>
							shop
						</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;

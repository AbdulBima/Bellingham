"use client";
import React, { useState } from "react";
import BrandCard from "../../components/BrandCard";
import CharityCard from "../../components/CharityCard";
import { motion } from "framer-motion";

type CharityData = {
	category: string;
	brandTitle: string;
	brandDesc: string;
	url: string;
	headImage: string;
	buttonText: string;
	currentPage: string;
};

const Charity: React.FC = () => {
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

	const [selectedItem, setSelectedItem] =
		useState<string>("b");

	const HOPE: CharityData = {
		category: "FOOTBALL CLINIC",
		brandTitle: "HOPE",
		brandDesc:
			"Kick for Hope has achieved remarkable progress within a year...",
		url: "HOPE.com",
		headImage: "/images/s1.jpg",
		buttonText: "DONATE",
		currentPage: "/ CHARITY",
	};

	const STARLIGHT: CharityData = {
		category: "OIL & GAS",
		brandTitle: "STARLIGHT",
		brandDesc:
			"With a focus on sustainable practices and cutting-edge technology...",
		url: "STARLIGHT.com",
		headImage: "/images/s2.jpg",
		buttonText: "DONATE",
		currentPage: "/ CHARITY",
	};

	const RIPPLE: CharityData = {
		category: "FRAGRANCE",
		brandTitle: "RIPPLE",
		brandDesc:
			"Crafting Timeless Fragrances. Embracing tradition and innovation...",
		url: "RIPPLE.com",
		headImage: "/images/s3.jpg",
		buttonText: "DONATE",
		currentPage: "/ CHARITY",
	};

	const V2030: CharityData = {
		category: "IT",
		brandTitle: "V2030",
		brandDesc:
			"Merging innovation with reliability, V2030 drives digital transformation...",
		url: "V2030.com",
		headImage: "/images/s.jpg",
		buttonText: "DONATE",
		currentPage: "/ CHARITY",
	};

	const combinedData: CharityData =
		selectedItem === "b"
			? HOPE
			: selectedItem === "s"
			? STARLIGHT
			: selectedItem === "c"
			? RIPPLE
			: V2030;

	return (
		<>
			<div className='hidden md:flex md:flex-row'>
				<div className='relative w-[30vw] bg-gradient-to-l from-black to-transparent h-[100vh]'>
					<div className='overflow-hidden absolute left-16 top-40'>
						<motion.ul
							className='cursor-pointer'
							aria-label='Sidebar'
							variants={container}
							initial='hidden'
							animate='show'
						>
							<motion.li
								variants={container}
								onClick={() =>
									setSelectedItem("b")
								}
								className={`webTitile flex flex-row ${
									selectedItem === "b"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "b" && (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								)}
								HOPE
							</motion.li>
							<motion.li
								variants={container}
								onClick={() =>
									setSelectedItem("s")
								}
								className={`webTitile flex flex-row ${
									selectedItem === "s"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "s" && (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								)}
								STARLIGHT
							</motion.li>
							<motion.li
								variants={container}
								onClick={() =>
									setSelectedItem("c")
								}
								className={`webTitile flex flex-row ${
									selectedItem === "c"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "c" && (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								)}
								RIPPLE
							</motion.li>
							<motion.li
								variants={container}
								onClick={() =>
									setSelectedItem("v")
								}
								className={`webTitile flex flex-row ${
									selectedItem === "v"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "v" && (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								)}
								V2030
							</motion.li>
						</motion.ul>
					</div>
				</div>
				<div className='relative w-[70vw] h-[100vh]'>
					<BrandCard data={combinedData} />
				</div>
			</div>
			<div className='md:hidden'>
				<CharityCard />
			</div>
		</>
	);
};

export default Charity;

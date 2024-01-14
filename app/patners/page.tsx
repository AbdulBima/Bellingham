"use client";
import React, { useState } from "react";
import BrandCard from "../../components/BrandCard";
import { motion } from "framer-motion";

const Brands: React.FC = () => {
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

	enum BrandNames {
		BULFAC = "BULFAC",
		CEDAR = "CEDAR",
		SIRUS = "SIRUS",
		SYNC = "SYNC",
		ESSORANT = "ESSORANT",
	}

	const bulfac: {
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}[] = [
		{
			title: BrandNames.BULFAC,
			category: "LOGISTICS",
			url: "bulfac.com",
			img: "/images/bulfaco.jpg",
			desc: "BULFAC navigates global supply chains to ensure timely deliveries and customer satisfaction. ",
		},
	];

	const [brandDesc, setBrandDesc] = useState<string>(
		bulfac[0]?.desc
	);

	const [brandTitle, setBrandTitle] = useState<string>(
		bulfac[0]?.title
	);

	const [category, setCategory] = useState<string>(
		bulfac[0]?.category
	);

	const [url, setUrl] = useState<string>(bulfac[0]?.url);

	const [headImage, setHeadImage] = useState<string>(
		bulfac[0]?.img
	);

	const sirus: {
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}[] = [
		{
			title: BrandNames.SIRUS,
			category: "OIL & GAS",
			url: "bulfac.com",
			img: "/images/siruso.jpg",
			desc: "With a focus on sustainable practices and cutting-edge technology, SIRUS drives excellence in exploration and distribution. ",
		},
	];

	const cedar: {
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}[] = [
		{
			title: BrandNames.CEDAR,
			category: "FRAGRANCE",
			url: "bulfac.com",
			img: "/images/cedaro.jpg",
			desc: " Embracing tradition and innovation, CEDAR captures elegance and sophistication. ",
		},
	];

	const essorant: {
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}[] = [
		{
			title: BrandNames.ESSORANT,
			category: "LOGISTICS",
			url: "bulfac.com",
			img: "/images/real.jpg",
			desc: " Blending expertise with innovation, ESSORANT shapes modern living and investment landscapes. ",
		},
	];

	const buttonText = "VISIT";
	const currentPage = " / BRANDS";

	const sync: {
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}[] = [
		{
			title: BrandNames.SYNC,
			category: "IT",
			url: "bulfac.com",
			img: "/images/sync.jpg",
			desc: " Merging innovation with reliability, SYNC drives digital transformation and efficiency. Committed to cutting-edge technology and client success, we pave the way for seamless integration and growth, positioning SYNC at the forefront of IT excellence. ",
		},
	];

	const combinedData = {
		category,
		brandTitle,
		brandDesc,
		url,
		headImage,
		buttonText,
		currentPage,
	};

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
								onClick={() => {
									setSelectedItem("b");
									setBrandTitle(
										bulfac[0]?.title
									);
									setCategory(
										bulfac[0]?.category
									);
									setUrl(bulfac[0]?.url);
									setHeadImage(
										bulfac[0]?.img
									);
									setBrandDesc(
										bulfac[0]?.desc
									);
								}}
								className={`webTitile flex flex-row ${
									selectedItem === "b"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "b" ? (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								) : null}
								BULFAC
							</motion.li>

							<motion.li
								variants={container}
								onClick={() => {
									setSelectedItem("s");
									setBrandTitle(
										sirus[0]?.title
									);
									setCategory(
										sirus[0]?.category
									);
									setUrl(sirus[0]?.url);
									setHeadImage(
										sirus[0]?.img
									);
									setBrandDesc(
										sirus[0]?.desc
									);
								}}
								className={`webTitile flex flex-row ${
									selectedItem === "s"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "s" ? (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								) : null}
								SIRUS
							</motion.li>

							<motion.li
								variants={container}
								onClick={() => {
									setSelectedItem("c");
									setBrandTitle(
										cedar[0]?.title
									);
									setCategory(
										cedar[0]?.category
									);
									setUrl(bulfac[0]?.url);
									setHeadImage(
										cedar[0]?.img
									);
									setBrandDesc(
										cedar[0]?.desc
									);
								}}
								className={`webTitile flex flex-row ${
									selectedItem === "c"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "c" ? (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								) : null}
								CEDAR
							</motion.li>

							<motion.li
								variants={container}
								onClick={() => {
									setSelectedItem("e");
									setBrandTitle(
										essorant[0]?.title
									);
									setCategory(
										essorant[0]
											?.category
									);
									setUrl(
										essorant[0]?.url
									);
									setHeadImage(
										essorant[0]?.img
									);
									setBrandDesc(
										essorant[0]?.desc
									);
								}}
								className={`webTitile flex flex-row ${
									selectedItem === "e"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "e" ? (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								) : null}
								ESSORANT
							</motion.li>

							<motion.li
								variants={container}
								onClick={() => {
									setSelectedItem("sy");
									setBrandTitle(
										sync[0]?.title
									);
									setCategory(
										sync[0]?.category
									);
									setUrl(sync[0]?.url);
									setHeadImage(
										sync[0]?.img
									);
									setBrandDesc(
										sync[0]?.desc
									);
								}}
								className={`webTitile flex flex-row ${
									selectedItem === "sy"
										? "text-yellow-500"
										: "text-white opacity-70"
								}`}
							>
								{selectedItem === "sy" ? (
									<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
								) : null}
								SYNC
							</motion.li>
						</motion.ul>
					</div>
				</div>

				<div className='relative w-[70vw] h-[100vh]'>
					<BrandCard data={combinedData} />
				</div>
			</div>

			<div
				className='md:hidden md:invisible transform  bg-cover bg-center w-[100vw] h-[100vh]'
				style={{
					backgroundImage: `url(${headImage})`,
				}}
			>
				<div className='absolute top-0 left-0 w-screen h-[100vh] opacity-85 bg-gradient-to-r from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-screen h-[100vh] opacity-85 bg-gradient-to-t from-black to-transparent'></div>

				<div className='overflow-hidden absolute left-6 top-56 opacity-90'>
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
								setBrandTitle(
									bulfac[0]?.title
								);
								setCategory(
									bulfac[0]?.category
								);
								setUrl(bulfac[0]?.url);
								setHeadImage(
									bulfac[0]?.img
								);
								setBrandDesc(
									bulfac[0]?.desc
								);
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
							{BrandNames.BULFAC}
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("s");
								setBrandTitle(
									sirus[0]?.title
								);
								setCategory(
									sirus[0]?.category
								);
								setUrl(sirus[0]?.url);
								setHeadImage(sirus[0]?.img);
								setBrandDesc(
									sirus[0]?.desc
								);
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
							{BrandNames.SIRUS}
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("c");
								setBrandTitle(
									cedar[0]?.title
								);
								setCategory(
									cedar[0]?.category
								);
								setUrl(bulfac[0]?.url);
								setHeadImage(cedar[0]?.img);
								setBrandDesc(
									cedar[0]?.desc
								);
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
							{BrandNames.CEDAR}
						</motion.li>

						<motion.li
							variants={container}
							onClick={() => {
								setSelectedItem("e");
								setBrandTitle(
									essorant[0]?.title
								);
								setCategory(
									essorant[0]?.category
								);
								setUrl(essorant[0]?.url);
								setHeadImage(
									essorant[0]?.img
								);
								setBrandDesc(
									essorant[0]?.desc
								);
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
							{BrandNames.ESSORANT}
						</motion.li>
					</motion.ul>
				</div>

				<div className='absolute bottom-40 left-10 text-white'>
					<div>
						<span className='brandtitle text-yellow-500 opacity-90'>
							{category}
						</span>
					</div>
					<div className='mt-3'>
						<span className='bxtiM'>
							{brandTitle}
						</span>
					</div>
					<div className='pr-6 mt-2 opacity-90'>
						<span className='deskPara text-left'>
							{brandDesc}
						</span>
					</div>
					<div className='mt-8 opacity-90'>
						<a href={url}>
							<button className='brandlink '>
								<p>{buttonText}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 '
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									stroke-width='4'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									></path>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Brands;

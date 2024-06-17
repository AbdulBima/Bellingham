"use client";
import React, { useState } from "react";
import BrandCard from "../../components/BrandCard";
import { motion } from "framer-motion";

const Brands: React.FC = () => {
	const [selectedItem, setSelectedItem] =
		useState<string>("b");

	enum BrandNames {
		BULFAC = "BULFAC",
		CEDAR = "CEDAR",
		SIRUS = "SIRUS",
		SYNC = "SYNC",
		ESSORANT = "ESSORANT",
	}

	const [brandData, setBrandData] = useState<{
		title: string;
		category: string;
		url: string;
		img: string;
		desc: string;
	}>({
		title: BrandNames.BULFAC,
		category: "LOGISTICS",
		url: "bulfac.com",
		img: "/images/bulfaco.jpg",
		desc: "BULFAC navigates global supply chains to ensure timely deliveries and customer satisfaction.",
	});

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

	const handleBrandSelection = (brand: BrandNames) => {
		const brandDataMap = {
			[BrandNames.BULFAC]: {
				title: BrandNames.BULFAC,
				category: "LOGISTICS",
				url: "bulfac.com",
				img: "/images/bulfaco.jpg",
				desc: "BULFAC navigates global supply chains to ensure timely deliveries and customer satisfaction.",
			},
			[BrandNames.CEDAR]: {
				title: BrandNames.CEDAR,
				category: "FRAGRANCE",
				url: "bulfac.com",
				img: "/images/cedaro.jpg",
				desc: "Embracing tradition and innovation, CEDAR captures elegance and sophistication.",
			},
			[BrandNames.SIRUS]: {
				title: BrandNames.SIRUS,
				category: "OIL & GAS",
				url: "bulfac.com",
				img: "/images/siruso.jpg",
				desc: "With a focus on sustainable practices and cutting-edge technology, SIRUS drives excellence in exploration and distribution.",
			},
			[BrandNames.ESSORANT]: {
				title: BrandNames.ESSORANT,
				category: "LOGISTICS",
				url: "bulfac.com",
				img: "/images/real.jpg",
				desc: "Blending expertise with innovation, ESSORANT shapes modern living and investment landscapes.",
			},
			[BrandNames.SYNC]: {
				title: BrandNames.SYNC,
				category: "IT",
				url: "bulfac.com",
				img: "/images/sync.jpg",
				desc: "Merging innovation with reliability, SYNC drives digital transformation and efficiency. Committed to cutting-edge technology and client success, we pave the way for seamless integration and growth, positioning SYNC at the forefront of IT excellence.",
			},
		};

		setBrandData(brandDataMap[brand]);
		setSelectedItem(brand);
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
							{Object.values(BrandNames).map(
								(brand) => (
									<motion.li
										key={brand}
										variants={container}
										onClick={() =>
											handleBrandSelection(
												brand
											)
										}
										className={`webTitile flex flex-row ${
											selectedItem ===
											brand
												? "text-yellow-500"
												: "text-white opacity-70"
										}`}
									>
										{selectedItem ===
											brand && (
											<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
										)}
										{brand}
									</motion.li>
								)
							)}
						</motion.ul>
					</div>
				</div>

				<div className='relative w-[70vw] h-[100vh]'>
					<BrandCard
						data={{
							category: brandData.category,
							brandTitle: brandData.title,
							brandDesc: brandData.desc,
							url: brandData.url,
							headImage: brandData.img,
							buttonText: "VISIT",
							currentPage: " / BRANDS",
						}}
					/>
				</div>
			</div>

			<div
				className='md:hidden md:invisible transform bg-cover bg-center w-[100vw] h-[100vh]'
				style={{
					backgroundImage: `url(${brandData.img})`,
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
						{Object.values(BrandNames).map(
							(brand) => (
								<motion.li
									key={brand}
									variants={container}
									onClick={() =>
										handleBrandSelection(
											brand
										)
									}
									className={`deskPara flex flex-row ${
										selectedItem ===
										brand
											? "text-yellow-500"
											: "text-white opacity-60"
									}`}
								>
									{selectedItem ===
										brand && (
										<div className='bg-white mt-1.5 w-1 h-3 mr-2'></div>
									)}
									{brand}
								</motion.li>
							)
						)}
					</motion.ul>
				</div>

				<div className='absolute bottom-40 left-10 text-white'>
					<div>
						<span className='brandtitle text-yellow-500 opacity-90'>
							{brandData.category}
						</span>
					</div>
					<div className='mt-3'>
						<span className='bxtiM'>
							{brandData.title}
						</span>
					</div>
					<div className='pr-6 mt-2 opacity-90'>
						<span className='deskPara text-left'>
							{brandData.desc}
						</span>
					</div>
					<div className='mt-8 opacity-90'>
						<a href={brandData.url}>
							<button className='brandlink '>
								<p>VISIT</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 '
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='4'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
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

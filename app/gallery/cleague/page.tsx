"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import M1C from "../../../components/cleaguematches/M1C";
import M2C from "../../../components/cleaguematches/M2C";
import M3C from "../../../components/cleaguematches/M3C";
import M4C from "../../../components/cleaguematches/M4C";
import M5C from "../../../components/cleaguematches/M5C";
import M6C from "../../../components/cleaguematches/M6C";

const Page: React.FC = () => {
	const [m1, setM1] = useState<boolean>(false);

	const [m2, setM2] = useState<boolean>(false);

	const [m3, setM3] = useState<boolean>(false);

	const [m4, setM4] = useState<boolean>(false);

	const [m5, setM5] = useState<boolean>(false);

	const [m6, setM6] = useState<boolean>(false);

	const componentMapping: { [key: string]: JSX.Element } =
		{
			m1: <M1C />,
			m2: <M2C />,
			m3: <M3C />,
			m4: <M4C />,
			m5: <M5C />,
			m6: <M6C />,
		};

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

	const [selectedItem, setSelectedItem] = useState<
		string | null
	>("m1");
	return (
		<>
			<div className='hidden md:flex md:flex-row'>
				<div className=" md:flex md:flex-row  relative w-[55vw] bg-[url('/images/j11.jpg')] bg-cover h-[100vh]">
					<div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
					<div
						className='absolute  
					top-6 right-8 flex flex-row z-[100]'
					>
						<Link href={"/"}>
							<div className='crumbs text-sm font-medium text-gray-400 '>
								HOME
							</div>
						</Link>

						<Link href={"/gallery"}>
							<div className='crumbs ml-1 text-sm font-medium text-gray-400 '>
								/ GALLERY
							</div>
						</Link>

						<Link href={"/cleague"}>
							<div className='crumbs ml-1 text-sm font-medium text-white '>
								/ CHAMPIONS LEAGUE
							</div>
						</Link>
					</div>

					<div className='absolute top-24'>
						<section className='bg-transparent'>
							<div className='relative w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl'>
								<div className='grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-3'>
									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m1"
											);
										}}
										onMouseEnter={() => {
											setM1(true);
										}}
										onMouseLeave={() => {
											setM1(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m1"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='/images/j22.jpg'
											alt=''
											width='1310'
											height='873'
										/>
										{m1 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 01
												- PSG
											</div>
										</div>
									</figure>

									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m2"
											);
										}}
										onMouseEnter={() => {
											setM2(true);
										}}
										onMouseLeave={() => {
											setM2(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m2"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='/images/j11.jpg'
											alt=''
											width='1310'
											height='873'
										/>
										{m2 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 02
												- BASEL
											</div>
										</div>
									</figure>

									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m3"
											);
										}}
										onMouseEnter={() => {
											setM3(true);
										}}
										onMouseLeave={() => {
											setM3(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m3"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='/images/j2.jpg'
											alt=''
											width='1310'
											height='873'
										/>
										{m3 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 03
												- AC MILAN
											</div>
										</div>
									</figure>

									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m4"
											);
										}}
										onMouseEnter={() => {
											setM4(true);
										}}
										onMouseLeave={() => {
											setM4(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m4"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
											alt=''
											width='1310'
											height='873'
										/>
										{m4 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 04
												- AC MILAN
											</div>
										</div>
									</figure>

									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m5"
											);
										}}
										onMouseEnter={() => {
											setM5(true);
										}}
										onMouseLeave={() => {
											setM5(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m5"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
											alt=''
											width='1310'
											height='873'
										/>
										{m5 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 05
												- BASEL
											</div>
										</div>
									</figure>

									<figure
										className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
										onClick={() => {
											setSelectedItem(
												"m6"
											);
										}}
										onMouseEnter={() => {
											setM6(true);
										}}
										onMouseLeave={() => {
											setM6(false);
										}}
									>
										<Image
											className={`w-full  bg-white ${
												selectedItem ===
												"m6"
													? "border-2 border-yellow-500"
													: "null"
											}`}
											src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
											alt=''
											width='1310'
											height='873'
										/>
										{m6 ? (
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										) : (
											<>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											</>
										)}

										<div className='absolute text-white  mx-auto bottom-10 '>
											<div className='deskGalbut'>
												MATCH DAY 06
												- PSG
											</div>
										</div>
									</figure>
								</div>
							</div>
						</section>
					</div>
				</div>

				<div className=' w-[45vw] h-[100vh] overflow-hidden'>
					{selectedItem
						? componentMapping[selectedItem]
						: null}
				</div>
			</div>

			<div className=' md:hidden md:invinsible relative flex flex-col '>
				<div className=' w-[100vw] h-[60vh]'>
					{selectedItem
						? componentMapping[selectedItem]
						: null}
				</div>

				<div className=''>
					<div className='bg-[url("/images/j3.jpg")]bg-cover bg-opacity-70'>
						<div className='relative w-full px-5 py-2 mt-16'>
							<div className='grid grid-cols-2 col-span-2 gap-4 '>
								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m1"
										);
									}}
									onMouseEnter={() => {
										setM1(true);
									}}
									onMouseLeave={() => {
										setM1(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m1"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='/images/j22.jpg'
										alt=''
										width='1310'
										height='873'
									/>
									{m1 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 01 -
											PSG
										</div>
									</div>
								</figure>

								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m2"
										);
									}}
									onMouseEnter={() => {
										setM2(true);
									}}
									onMouseLeave={() => {
										setM2(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m2"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='/images/j11.jpg'
										alt=''
										width='1310'
										height='873'
									/>
									{m2 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 02 -
											BASEL
										</div>
									</div>
								</figure>

								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m3"
										);
									}}
									onMouseEnter={() => {
										setM3(true);
									}}
									onMouseLeave={() => {
										setM3(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m3"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='/images/j2.jpg'
										alt=''
										width='1310'
										height='873'
									/>
									{m3 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 03 -
											AC MILAN
										</div>
									</div>
								</figure>

								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m4"
										);
									}}
									onMouseEnter={() => {
										setM4(true);
									}}
									onMouseLeave={() => {
										setM4(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m4"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
										alt=''
										width='1310'
										height='873'
									/>
									{m4 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 04 -
											AC MILAN
										</div>
									</div>
								</figure>

								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m5"
										);
									}}
									onMouseEnter={() => {
										setM5(true);
									}}
									onMouseLeave={() => {
										setM5(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m5"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
										alt=''
										width='1310'
										height='873'
									/>
									{m5 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 05 -
											BASEL
										</div>
									</div>
								</figure>

								<figure
									className='relative  shadow-lg hover:-translate-y-3 hover:transition hover:ease-in-out '
									onClick={() => {
										setSelectedItem(
											"m6"
										);
									}}
									onMouseEnter={() => {
										setM6(true);
									}}
									onMouseLeave={() => {
										setM6(false);
									}}
								>
									<Image
										className={`w-full  bg-white ${
											selectedItem ===
											"m6"
												? "border-2 border-yellow-500"
												: "null"
										}`}
										src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
										alt=''
										width='1310'
										height='873'
									/>
									{m6 ? (
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
									) : (
										<>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
											<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
										</>
									)}

									<div className='absolute text-white  mx-auto bottom-10 '>
										<div className='deskGalbut'>
											MATCH DAY 06 -
											PSG
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;

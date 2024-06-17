import React from "react";
import Image from "next/image";

const M1C: React.FC = () => {
	return (
		<>
			<div className='carousel w-full'>
				<div
					id='slide1'
					className='carousel-item relative w-full'
				>
					<Image
						src='/images/j22.jpg'
						className='w-full object-cover '
						alt={""}
						width='1310'
						height='873'
					/>
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a
							href='#slide4'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❮
						</a>
						<a
							href='#slide2'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❯
						</a>
					</div>
				</div>
				<div
					id='slide2'
					className='carousel-item relative w-full'
				>
					<Image
						src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
						className='w-full object-cover'
						alt={""}
						width='1310'
						height='873'
					/>
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a
							href='#slide1'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❮
						</a>
						<a
							href='#slide3'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❯
						</a>
					</div>
				</div>
				<div
					id='slide3'
					className='carousel-item relative w-full'
				>
					<Image
						src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
						className='w-full object-cover'
						alt={""}
						width='1310'
						height='873'
					/>
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a
							href='#slide2'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❮
						</a>
						<a
							href='#slide4'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❯
						</a>
					</div>
				</div>
				<div
					id='slide4'
					className='carousel-item relative w-full'
				>
					<Image
						src='https://ipfs.io/ipfs/QmYxeRFKCizpCct16mJXRH3MqhLekwNqed78VAei6udjs7'
						className='w-full object-cover'
						alt={""}
						width='1310'
						height='873'
					/>
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a
							href='#slide3'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40 '
						>
							❮
						</a>
						<a
							href='#slide1'
							className='btn btn-circle bg-yellow-500 border-none bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-40'
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default M1C;

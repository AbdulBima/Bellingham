import Link from "next/link";
import React from "react";

type ChildComponentProps = {
	data: {
		category: string;
		brandTitle: string;
		brandDesc: string;
		url: string;
		headImage: string;
		buttonText: string;
		currentPage: string;
	};
};

const EssorantCard: React.FC<ChildComponentProps> = ({
	data,
}) => {
	const {
		category,
		brandTitle,
		brandDesc,
		url,
		headImage,
		buttonText,
		currentPage,
	} = data;

	return (
		<>
			<div
				className='hidden md:relative md:flex bg-cover bg-top h-[100vh]'
				style={{
					backgroundImage: `url(${headImage})`,
				}}
			>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
				<div className='absolute  flex flex-row top-8  left-8 z-[100]'>
					<Link href={"/"}>
						<div className='crumbs text-sm font-medium text-gray-400 '>
							HOME
						</div>
					</Link>

					<Link href={"/brands"}>
						<div className='crumbs ml-1 text-sm font-medium text-white '>
							{currentPage}
						</div>
					</Link>
				</div>

				<div className='absolute bottom-20 left-16 text-white'>
					<div>
						<span className='brandtitle text-yellow-500 opacity-90'>
							{category}
						</span>
					</div>
					<div className='mt-3'>
						<span className='bxti'>
							{brandTitle}
						</span>
					</div>
					<div className='pr-60 mt-2 opacity-90'>
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

export default EssorantCard;

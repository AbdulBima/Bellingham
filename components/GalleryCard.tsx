import Link from "next/link";
import React from "react";

type ChildComponentProps = {
	backgroundImageUrl: string;
	matchDetail: string;
	mt: string;
	ilink: string;
};

const GalleryCard: React.FC<ChildComponentProps> = ({
	backgroundImageUrl,
	matchDetail,
	mt,
	ilink,
}) => {
	return (
		<div>
			<Link href={ilink}>
				<div
					className={`max-w-screen-xl relative p-5 mx-auto ${mt} bg-black text-white`}
				>
					<div className='relative flex items-center justify-center'>
						<div
							className='relative flex items-center justify-center w-full text-left bg-center bg-cover h-96'
							style={{
								backgroundImage: `url("${backgroundImageUrl}")`,
							}}
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-black to-transparent'></div>

							<div className='absolute top-0 left-0 w-full opacity-70 h-full bg-gradient-to-b  from-black to-transparent'></div>
							<div className='absolute top-0 left-0 right-0 opacity-70 flex items-center justify-between mx-5 mt-3'></div>
							<h2 className='z-10 p-5'></h2>
						</div>

						<div className='absolute  flex flex-col text-white items-center justify-center '>
							<div className='deskPara'>
								{matchDetail}
							</div>
							<div className='galbut '>
								{/* {matchDetail} */}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default GalleryCard;

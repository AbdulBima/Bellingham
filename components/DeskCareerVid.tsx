import React from "react";

interface DortVidProps {
	src: string;
}

const DeskCareerVid: React.FC<DortVidProps> = ({ src }) => {
	return (
		<video
			className='object-cover border border-opacity-40 shadow-inner border-yellow-500'
			controls
			playsInline
		>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	);
};

export default DeskCareerVid;

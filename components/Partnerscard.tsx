import React from "react";

const Partnerscard: React.FC = () => {
	return (
		<div>
			{" "}
			<div className=' w-screen '>
				<div className='relative'>
					<div
						style={{
							backgroundImage:
								"url(/images/j3.jpg)",
						}}
						className='bg-gray-300 h-[60vh] w-screen shadow-md bg-cover bg-center relative'
					>
						{/* Dark gradient overlay */}
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
							<a
								className='btn-white'
								href='/brands'
							>
								PARTNERS
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partnerscard;

import React from "react";

const CharityCard: React.FC = () => {
	return (
		<>
			<div className='bg-black md:hidden '>
				<div className='carousel carousel-center bg-black max-w-md   space-x-3'>
					<div className='carousel-item'>
						<div className='flex flex-col justify-center items-center max-w-sm mx-auto relative'>
							<div
								style={{
									backgroundImage:
										"url(/images/j66.jpg)",
								}}
								className='bg-gray-300 h-[90vh] w-[90vw] shadow-md bg-cover bg-center relative'
							>
								{/* Dark gradient overlay */}
								<div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-black to-transparent'></div>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
							</div>
							<div className='w-40 bg-transparent -mt-12  z-20 shadow-lg overflow-hidden'>
								<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
									<a
										className='btn-white'
										href='/charity/kickforhope'
									>
										HOPE
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='carousel-item'>
						<div className='flex flex-col justify-center items-center max-w-sm mx-auto relative'>
							<div
								style={{
									backgroundImage:
										"url(/images/s.jpg)",
								}}
								className='bg-gray-300 h-[90vh] w-[90vw] shadow-md bg-cover  relative'
							>
								{/* Dark gradient overlay */}
								<div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-black to-transparent'></div>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>{" "}
							</div>
							<div className='w-40 bg-transparent -mt-12  z-20 shadow-lg overflow-hidden'>
								<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
									<a
										className='btn-white'
										href='/charity/kickforhope'
									>
										RIPPLE
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='carousel-item'>
						<div className='flex flex-col justify-center items-center max-w-sm mx-auto relative'>
							<div
								style={{
									backgroundImage:
										"url(https://images.unsplash.com/photo-1643321612557-57cef422f401?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
								}}
								className='bg-gray-300 h-[90vh] w-[90vw] shadow-md bg-cover bg-center relative'
							>
								{/* Dark gradient overlay */}
								<div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-black to-transparent'></div>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>{" "}
							</div>
							<div className='w-40 bg-transparent -mt-12  z-20 shadow-lg overflow-hidden'>
								<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
									<a
										className='btn-white'
										href='/charity/kickforhope'
									>
										FOOTBOOK
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='carousel-item'>
						<div className='flex flex-col justify-center items-center max-w-sm mx-auto relative'>
							<div
								style={{
									backgroundImage:
										"url(/images/s2.jpg)",
								}}
								className='bg-gray-300 h-[90vh] w-[90vw] shadow-md bg-cover relative'
							>
								{/* Dark gradient overlay */}
								<div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-black to-transparent'></div>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
							</div>
							<div className='w-40 bg-transparent -mt-12  z-20 shadow-lg overflow-hidden'>
								<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
									<a
										className='btn-white'
										href='/charity/kickforhope'
									>
										STARLIGHT
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='carousel-item'>
						<div className='flex flex-col justify-center items-center max-w-sm mx-auto relative'>
							<div
								style={{
									backgroundImage:
										"url(/images/s3.jpg)",
								}}
								className='bg-gray-300 h-[90vh] w-[90vw] shadow-md bg-cover bg-center relative'
							>
								{/* Dark gradient overlay */}
								<div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-black to-transparent'></div>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>{" "}
							</div>
							<div className='w-40 bg-transparent -mt-12  z-20 shadow-lg overflow-hidden'>
								<div className='absolute text-white bottom-20 left-1/2 transform -translate-x-1/2'>
									<a
										className='btn-white'
										href='/charity/kickforhope'
									>
										V2030
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CharityCard;

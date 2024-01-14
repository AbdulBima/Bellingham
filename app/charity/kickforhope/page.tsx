import React from "react";
import Image from "next/image";

const Blog: React.FC = () => {
	return (
		<div>
			<div className='relative w-screen h-[60vh]  overflow-hidden flex flex-col '>
				<Image
					src='/images/s.jpg'
					alt='Background'
					className='absolute w-full h-full object-cover'
				/>

				<div className='absolute top-0 left-0 w-screen  h-72 bg-gradient-to-t from-transparent to-black'></div>
				{/* <div className='absolute top-0 left-0 w-screen opacity-80   h-full bg-gradient-to-t from-black to-transparent'></div> */}

				{/* <div className='absolute opacity-90 top-0  left-0 w-screen h-full bg-gradient-to-t from-black to-transparent'></div> */}

				<div className='absolute text-white bottom-8 left-1/2 transform -translate-x-1/2'>
					<h2>Kick For Hope</h2>
				</div>
			</div>
			<article className='relative max-w-2xl px-6 py-10 mx-auto space-y-8 bg-amber-50 text-black'>
				<div className='w-full mx-auto space-y-4 text-center'>
					<p className='text-sm text-black'>
						by Jude - Feb 12th 2021
					</p>
				</div>
				<div className='text-black relative text-left whitespace-normal'>
					<p className='para'>
						In the span of a year, Kick for Hope
						has made significant strides towards
						its mission. Monthly community
						football clinics have been a
						cornerstone of our efforts,
						providing professional coaching and
						mentorship to hundreds of children
						in economically challenged areas.
						<br />
						<br />
						The resounding success of these
						clinics is a testament to the
						transformative power of sports.
						Educational empowerment is another
						key facet of our initiative.
						<br />
						<br />
						Generous contributions from sponsors
						and supporters have enabled Kick for
						Hope to award educational
						scholarships to promising young
						talents, transcending the boundaries
						of the football field and instilling
						hope in their academic pursuits.
						Distribution of sports equipment,
						made possible through collaborations
						with local businesses and sports
						brands, has ensured that every
						child, regardless of background, has
						access to the joy of playing
						football. <br />
						<br /> The program has also
						established partnerships with
						schools, implementing after-school
						programs that seamlessly blend
						football training with academic
						support. Community events have been
						a celebration of unity, bringing
						families together to revel in the
						joy of sports. The impact on
						participants is palpable, with
						improved physical health, increased
						self-esteem, and a sense of
						belonging reported among those
						engaged in the Kick for Hope
						program. <br />
						<br /> As we reflect on the
						milestones of the past year, Kick
						for Hope remains steadfast in its
						commitment to expanding its reach
						and making an even greater impact in
						the years to come. With the
						continued support of the community,
						we are poised to build a brighter
						future for the next generation
						through the universal language of
						football.
					</p>
				</div>

				<div className='relative justify-center align-center text-black '>
					<a className='btn-donate' href='#'>
						DONATE
					</a>
				</div>

				<div className='pt-12 border-t dark:border-gray-700'></div>

				<div className='relative  w-[90vw] space-y-3 mx-auto overflow-hidden flex flex-col '>
					<div>
						<Image
							src='/images/s2.jpg'
							alt='Background'
							className=' w-96 h-72 object-cover'
						/>
					</div>

					<div>
						<Image
							src='/images/s3.jpg'
							alt='Background'
							className=' w-96 h-72 object-cover'
						/>
					</div>

					<div>
						<Image
							src='/images/s4.jpg'
							alt='Background'
							className=' w-96 h-72 object-cover'
						/>
					</div>

					<div>
						<Image
							src='/images/s5.jpg'
							alt='Background'
							className=' w-96 h-72 object-cover'
						/>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Blog;

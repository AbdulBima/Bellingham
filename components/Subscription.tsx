"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
	email: string;
};

const Subscription: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [isLoading, setIsLoading] =
		useState<boolean>(false);

	const schema: ZodType<FormData> = z.object({
		email: z.string().email(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	// Function to handle email input change
	const handleEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(e.target.value);
	};

	// Function to handle form submission
	const sentToDBS = async (data: FormData) => {
		// e.preventDefault(); // Prevent default form submission behavior

		try {
			// Make Axios POST request to save email value
			setIsLoading(true);
			const response = await axios.post(
				"https://backendv2-smz4.onrender.com/api/subscriber",
				{
					email: email,
				}
			);

			setEmail("");

			setIsLoading(false);

			if (!response) {
				// Show success toast if randomNumber is greater than 0.5
				toast.error(
					"Error! Random number is less than or equal to 0.5."
				);
			} else {
				toast.success("Thanks for subscribing", {
					position: "bottom-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		} catch (error) {
			// Handle errors if any
			console.error("Error:", error);
		}
	};

	return (
		<>
			<div>
				<div>
					<div className='w-screen bg-black px-6 relative pt-28 pb-8 '>
						<div className='w-full'>
							<div className='text-center'>
								<h1 className='text-3xl font-semibold text-white'>
									STAY TUNED
								</h1>
								<p className='mt-2 text-white'>
									Subscribe my newsletter
									and don’t miss any
									update on new products,
									promotions or even
									career events.
								</p>
							</div>
							<div className='mt-5'>
								<form
									onSubmit={handleSubmit(
										sentToDBS
									)}
								>
									<label>Email</label>

									<input
										{...register(
											"email"
										)}
										type='email'
										name='email'
										id='email'
										placeholder='Email'
										className='mt-1 w-full border-b-2 border-gray-300 dark:border-gray-600 px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
										autoComplete='off' // Changed to 'off' from 'NA'
										value={email} // Bind the email state to the input value
										onChange={
											handleEmailChange
										} // Handle input change
									/>
									{errors.email && (
										<span className='text-red-600'>
											{
												errors.email
													.message
											}
										</span>
									)}

									{isLoading ? (
										<div className='flex mt-6 justify-center items-center'>
											<div className='btld mt-10'>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
											</div>
										</div>
									) : (
										<button
											type='submit'
											className='w-full text-center bg-orange-500 px-2 py-2 text-black mt-4'
										>
											Sign up
										</button>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer
				position='bottom-right'
				autoClose={3000} // Close toast automatically after 3 seconds
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default Subscription;

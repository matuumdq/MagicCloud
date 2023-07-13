const Testimonials = () => {
	const clientes = [
		{
			id: 0,
			name: "Alberto",
			work: "Portero",
			comment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem dolor et? Odio, debitis dolore!",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1682018542/fotos%20banner/banner3_hplrif.jpg",
		},
		{
			id: 1,
			name: "Juan",
			work: "Capataz de obra",
			comment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iste enim harum neque provident incidunt natus quas placeat eveniet sed?",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684167391/doc_myich9.jpg",
		},
	];
	return (
		<section className="mx-5 ">
			<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 max-w-screen-xl">
				{clientes &&
					clientes.map((cliente) => (
						<div
							key={cliente.id}
							className="flex flex-col max-w-sm mx-4 my-6 shadow-[0px_0px_20px_5px_#00000024] rounded-lg"
						>
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-green-700/70 ">
								<p className="relative px-6 py-1 text-lg italic text-center text-white">
									{/* Quotes svg*/}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-resalted-bg"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									{cliente.comment}
									{/* Quotes svg*/}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-resalted-bg"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
								<img
									src={cliente.img}
									alt={cliente.name}
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
								/>
								<p className="text-xl font-semibold leading-tight">
									{cliente.name}
								</p>
								<p className="text-sm uppercase font-thin">
									{cliente.work}
								</p>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Testimonials;

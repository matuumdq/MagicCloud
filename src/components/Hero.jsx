// import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const Hero = () => {
	const [showMouse, setShowMouse] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (scrollY === 0) {
				setShowMouse(true);
			} else {
				setShowMouse(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="container"
			className="w-full min-h-[92vh] relative flex items-center justify-center md:justify-start md:items-start"
		>
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
				alt=""
				className="h-full w-full absolute object-cover grayscale"
			/>
			<div
				data-aos="fade-up"
				className="text-white z-10 flex flex-col text-6xl md:text-8xl font-bold font-roboto tracking-wider md:my-72 items-center h-full justify-center w-full"
			>
				<p className="uppercase ">Magic</p>
				<p className="uppercase text-blue-700 md:ml-44">Cloud</p>
			</div>
			{showMouse && (
				<div className="fixed left-0 right-0 bottom-4 animate-bounce flex justify-center items-center">
					<a href="#start">
						<FaAngleDown className="z-20 text-white text-3xl " />
					</a>
				</div>
			)}
		</div>
	);
};

export default Hero;

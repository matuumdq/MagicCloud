import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setVisible(
				prevScrollPos > currentScrollPos || currentScrollPos < 10
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible]);

	return (
		<div
			className={`${
				visible ? "sticky top-0" : ""
			} bg-gray-50 font-roboto uppercase text-sm h-20 mx-auto flex justify-between items-center p-4 z-20 bg-backblue-200 shadow-[0px_0px_20px_5px_#00000024]`}
		>
			{" "}
			{/* Left */}
			<a href="#" className="flex items-center gap-6">
				<img src="" alt="logo" className="h-20 w-auto" />
			</a>
			<div className="hidden md:flex items-center cursor-pointer font-medium gap-10 p-1">
				<a
					href="#start"
					className="border-y-2 py-1 border-transparent hover:border-blue-600/70 hover:text-blue-600/70 ease-in duration-300"
				>
					Nosotros
				</a>
				<a
					href="#strat"
					className="border-y-2 py-1 border-transparent hover:border-blue-600/70 hover:text-blue-600/70 ease-in duration-300"
				>
					estrategia
				</a>
				<a
					href="#contact"
					className="border-y-2 py-1 border-transparent hover:border-blue-600/70 hover:text-blue-600/70 ease-in duration-300"
				>
					Contactanos
				</a>
			</div>
			<div
				className="cursor-pointer md:hidden"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300"
				/>
			</div>
			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}
			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-gray-200 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<a href="#" onClick={() => setNav(false)}>
					<img
						src=""
						alt="logo"
						className="h-32 w-auto mx-auto mt-4"
					/>
				</a>
				<nav>
					<ul className="my-32 flex flex-col px-4 py-8 gap-10 justify-center items-center text-xl text-black">
						<a
							href="#start"
							onClick={() => setNav(false)}
							className="hover:text-blue-600/70 hover:scale-105 ease-in duration-200 flex"
						>
							Nosotros
						</a>
						<a
							href="#strat"
							onClick={() => setNav(false)}
							className="hover:text-blue-600/70 hover:scale-105 ease-in duration-200 flex"
						>
							estrategia
						</a>
						<a
							href="#contact"
							onClick={() => setNav(false)}
							className="hover:text-blue-600/70 hover:scale-105 ease-in duration-200 flex"
						>
							Contactanos
						</a>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

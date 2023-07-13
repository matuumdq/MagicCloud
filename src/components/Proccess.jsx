import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Proccess = () => {
	const [showMouse, setShowMouse] = useState(true);
	const handleScrollToProjects = () => {
		// Aquí puedes ajustar el selector o el ID de la sección "Projects"
		const projectsSection = document.getElementById("contact");
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div
			data-aos="fade-up"
			id="strat"
			className="relative md:min-h-screen h-auto w-full bg-slate-500 flex flex-col md:flex-row md:justify-center items-center gap-10 pb-16 md:pb-0"
		>
			<div
				data-aos="fade-up"
				className="md:w-1/2 md:mx-auto flex flex-col gap-6"
			>
				<img
					src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="video"
					className="md:h-screen object-cover w-full h-full"
				/>
			</div>
			<div
				data-aos="fade-down"
				className="md:w-1/2 md:mx-0 flex flex-col md:items-start font-bold text-3xl md:text-5xl lg:text-6xl uppercase text-black"
			>
				<p>un</p>
				<p>enfoque</p>
				<p>estrategico</p>
				<p className="text-white">para desarrollar</p>
				<p className="text-white">tu presencia</p>
				<p>en linea</p>
			</div>
			{showMouse && (
				<div
					className="absolute left-0 right-0 bottom-4 cursor-pointer animate-bounce flex justify-center items-center z-20"
					onClick={handleScrollToProjects}
				>
					<FaAngleDown className="z-20 text-white text-3xl" />
				</div>
			)}
		</div>
	);
};

export default Proccess;

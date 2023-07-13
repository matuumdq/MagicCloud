import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Portfolio = () => {
	const works = [
		{
			id: 0,
			projectName: "Clinica Cicec",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1689271154/ccc_ah4fae.png",
		},
		{
			id: 1,
			projectName: "Profe Italiano",
			img: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 2,
			projectName: "Nutricionista Pepita",
			img: "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	];
	const [showMouse, setShowMouse] = useState(true);
	const handleScrollToProjects = () => {
		// Aquí puedes ajustar el selector o el ID de la sección "Projects"
		const projectsSection = document.getElementById("strat");
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div data-aos="zoom-in" id="projects">
			<div className="relative min-h-screen md:min-h-0 h-full grid grid-cols-1 md:grid-cols-3 md:content-center justify-items-center ">
				{works.map((work) => (
					<div key={work.id}>
						<div className="relative h-full w-full text-white">
							<img
								src={work.img}
								alt={work.projectName}
								className="relative object-cover w-full h-full"
							/>
							<h3 className="absolute z-10 bottom-8 left-5 font-roboto uppercase font-bold text-2xl">
								{work.projectName}
							</h3>
						</div>
					</div>
				))}
				{showMouse && (
					<div
						className="absolute left-0 right-0 bottom-0 cursor-pointer animate-bounce flex justify-center items-center z-50"
						onClick={handleScrollToProjects}
					>
						<FaAngleDown className="z-20 text-white text-3xl" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Portfolio;

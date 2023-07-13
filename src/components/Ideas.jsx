import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Ideas = () => {
	const [showMouse, setShowMouse] = useState(true);
	const handleScrollToProjects = () => {
		// Aquí puedes ajustar el selector o el ID de la sección "Projects"
		const projectsSection = document.getElementById("projects");
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div id="start" className="min-h-screen h-auto w-full bg-blue-600/40 ">
			<div className="h-screen max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center md:items-center gap-8 ">
				<div
					data-aos="fade-right"
					className="md:w-1/2 mx-5 md:mx-0 pt-12 md:pt-0 flex flex-col md:items-end font-bold text-3xl md:text-5xl lg:text-6xl uppercase text-black"
				>
					<p>Soluciones</p>
					<p className="text-white">Web</p>
					<p className="text-white">Inspiradoras,</p>
					<p>potenciando</p>
					<p>empresas</p>
				</div>
				<div
					data-aos="fade-left"
					className="md:w-1/2 mx-5 md:mx-auto flex flex-col gap-6"
				>
					<img
						src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="video"
						className="h-60 object-cover md:h-auto"
					/>
					<h3 className="uppercase font-semibold text-3xl">
						El Camino hacia el Éxito Digital
					</h3>
					<p className="font-thin">
						Únete a nosotros en este emocionante recorrido donde
						acompañamos a nuestros clientes en el proceso de
						creación de sus páginas web. Explora cómo nuestras
						soluciones web personalizadas inspiran y potencian sus
						negocios, desde la planificación estratégica hasta la
						implementación y el impacto en su audiencia. ¡Prepárate
						para inspirarte y descubrir el poder de una presencia en
						línea efectiva!
					</p>
				</div>
			</div>
			{showMouse && (
				<div
					className="relative left-0 right-0 bottom-4 md:bottom-8 animate-bounce flex justify-center items-center"
					onClick={handleScrollToProjects}
				>
					<FaAngleDown className="z-20 text-black cursor-pointer text-3xl" />
				</div>
			)}
		</div>
	);
};

export default Ideas;

import Contact from "./Contact";
import Hero from "./Hero";
import Ideas from "./Ideas";
import Portfolio from "./Portfolio";
import Proccess from "./Proccess";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<Ideas />
			<Portfolio />
			<Proccess />
			<Contact />
		</div>
	);
};

export default Home;

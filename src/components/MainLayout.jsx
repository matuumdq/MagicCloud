import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Nabvar";
import Footer from "./Footer";

const MainLayout = () => {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={300}
					classNames="page"
				>
					<main className="w-full h-auto min-h-[40vh]">
						<Outlet />
					</main>
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</>
	);
};

export default MainLayout;

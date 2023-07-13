import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
	Aos.init();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

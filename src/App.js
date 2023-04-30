import Home from "./pages/Home/Home";
import Availability from "./pages/Availability/Availability";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import NotFound from "./pages/NotFount/NotFount";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HostProfile from "./pages/HostProfile/HostProfile";
import Messaging from "./pages/Messaging/Messaging";

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/availability" element={<Availability />} />
				<Route path="/house-details" element={<HouseDetails />} />
				<Route path="/messaging" element={<Messaging />} />
				<Route path="/host" element={<HostProfile />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

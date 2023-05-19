import Home from "./pages/Home/Home";
import Availability from "./pages/Availability/Availability";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import NotFound from "./pages/NotFount/NotFount";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HostProfile from "./pages/HostProfile/HostProfile";
import Messaging from "./pages/Messaging/Messaging";
import AddPlace from "./pages/AddPlace/AddPlace";
import AddNumbers from "./pages/AddNumbers/AddNumbers";
import Equipment from "./pages/Equipment/Equipment";
import AddPhotos from "./pages/AddPhotos/AddPhotos";
import AddTitle from "./pages/AddTitle/AddTitle";
import AddDescription from "./pages/AddDescription/AddDescription";
import Publish from "./pages/Publish/Publish";
import AddType from "./pages/AddType/AddType";

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
				<Route path="/add-type" element={<AddType />} />
				<Route path="/add-place" element={<AddPlace />} />
				<Route path="/add-numbers" element={<AddNumbers />} />
				<Route path="/equipment" element={<Equipment />} />
				<Route path="/add-photos" element={<AddPhotos />} />
				<Route path="/add-title" element={<AddTitle />} />
				<Route path="/add-description" element={<AddDescription />} />
				<Route path="/publish" element={<Publish />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

import Home from "./pages/Home/Home";
import Availability from "./pages/Availability/Availability";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import NotFound from "./pages/NotFount/NotFount";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HostProfile from "./pages/HostProfile/HostProfile";
import Messaging from "./pages/Messaging/Messaging";
import AddPlace from "./pages/AddHouse/AddPlace/AddPlace";
import AddNumbers from "./pages/AddHouse/AddNumbers/AddNumbers";
import AddEquipments from "./pages/AddHouse/AddEquipments/AddEquipments";
import AddPhotos from "./pages/AddHouse/AddPhotos/AddPhotos";
import AddTitle from "./pages/AddHouse/AddTitle/AddTitle";
import AddDescription from "./pages/AddHouse/AddDescription/AddDescription";
import Publish from "./pages/AddHouse/Publish/Publish";
import AddType from "./pages/AddHouse/AddType/AddType";
import SignupForm from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AddHouse from "./pages/AddHouse/AddHouse";
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
        <Route path="/house-details/:houseId" element={<HouseDetails />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/host" element={<HostProfile />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addhouse" element={<AddHouse />}>
          <Route path="type" element={<AddType />} />
          <Route path="place" element={<AddPlace />} />
          <Route path="numbers" element={<AddNumbers />} />
          <Route path="equipment" element={<AddEquipments />} />
          <Route path="photos" element={<AddPhotos />} />
          <Route path="title" element={<AddTitle />} />
          <Route path="description" element={<AddDescription />} />
          <Route path="publish" element={<Publish />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;

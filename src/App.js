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
import Admin from "./pages/Dashboard/pages/admin/Admin";
import DashboardHome from "./pages/Dashboard/pages/home/DashboardHome";
import UsersList from "./pages/Dashboard/pages/UsersList/UsersList";
import Single from "./pages/Dashboard/pages/single/single";
import Viewad from "./pages/Dashboard/pages/viewad/Viewad";
import New from "./pages/Dashboard/pages/new/New";
import { userInputs } from "./pages/Dashboard/formSource";
import Apart from "./pages/Dashboard/pages/apart/Apart";

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

        <Route
          path="/dashboard/apartments"
          element={<New inputs={userInputs} title="Apartments category" />}
        />

        <Route path="/dashboard/users" element={<UsersList />}>
          <Route path=":userId" element={<Single />} />
        </Route>
        <Route path="/dashboard/viewad" element={<Viewad />} />
        <Route
          path="/dashboard/apartments"
          element={<New inputs={userInputs} title="Apartments category" />}
        />
        <Route path="/dashboard/bookings" element={<Apart />} />
        <Route path="/dashboard/profile" element={<Admin />} />

        <Route path="/dashboard" element={<DashboardHome />}>
          {/* <Route path="login" element={<Login />} />
          <Route path="users" element={<List />}>
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="viewad" element={<Viewad />} />
          <Route
            path="apartments"
            element={<New inputs={userInputs} title="Apartments category" />}
          />
          <Route path="bookings" element={<Apart />} />
          <Route path="messages" element={<Recieve />} />
          <Route path="reply" element={<Notification />} />
          <Route path="profile" element={<Admin />} /> */}
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;

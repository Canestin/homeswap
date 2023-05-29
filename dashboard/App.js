import Home from "./pages/home/home";
import SignIn from "./pages/SignIn/SignIn";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import New from "./pages/new/New";
import { userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Admin from "./pages/admin/Admin";
import Apart from "./pages/apart/Apart";
import Notification from "./pages/notification/Notification";
import Viewad from "./pages/viewad/Viewad";
import Recieve from "./pages/recieve/Recieve";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="Viewad">
              <Route index element={<Viewad />} />
            </Route>
            <Route path="Apartments">
              <Route
                index
                element={
                  <New inputs={userInputs} title="Apartments category" />
                }
              />
            </Route>
            <Route path="Bookings">
              <Route index element={<Apart />} />
            </Route>
            <Route path="Messages">
              <Route index element={<Recieve />} />
            </Route>
            <Route path="REPLY">
              <Route index element={<Notification />} />
            </Route>
            <Route path="Profile">
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

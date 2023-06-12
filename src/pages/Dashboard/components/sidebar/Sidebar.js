import "./sidebar.scss";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PeopleIcon from "@mui/icons-material/People";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://raw.githubusercontent.com/Canestin/assets/main/img/homeswap.png"
            alt=""
            className="logo-image"
          />
          <span className="logo">HomeSwap</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardCustomizeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/dashboard/apartments" style={{ textDecoration: "none" }}>
            <li>
              <MapsHomeWorkIcon className="icon" />
              <span>Apartments</span>
            </li>
          </Link>
          <Link to="/dashboard/bookings" style={{ textDecoration: "none" }}>
            <li>
              <AddLocationAltIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <p className="title">ADMIN</p>
          <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/dashboard/logout" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

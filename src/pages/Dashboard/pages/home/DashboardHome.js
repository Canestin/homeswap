import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./DashboardHome.scss";
import Widget from "../../components/widget/Widget";

const DashboardHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
            gap: 20,
          }}
        >
          <Widget type="user" />
          <Widget type="apartment" />
          <Widget type="bookings" />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Ads</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

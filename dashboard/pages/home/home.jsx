
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";


const home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget">
          <Widget type="user" />
          <Widget type="Apartment" />
          <Widget type="Bookings" />
          <Widget type="Messages" />
        </div>
        
        <div className="listContainer">
          <div className="listTitle">Latest Ads</div>
        </div>
      </div>
    </div>
  );
};

export default home;
import Datatable from "../../components/Datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./UsersList.scss";

const UsersList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listcontiner">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default UsersList;

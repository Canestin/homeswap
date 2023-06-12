import "./admin.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const Admin = () => {
  return (
    <div className="Admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://th.bing.com/th/id/OIP.cuPvlEYnMZGWp8c-zTE59wHaE_?w=251&h=180&c=7&r=0&o=5&pid=1.7"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Nana Aminu</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nanaeg@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+36 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                   issy le molinoy. France
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">France</span>
                </div>
              </div>
            </div>
          </div>
          
          </div>
       
      </div>
    </div>
  );
};

export default Admin;
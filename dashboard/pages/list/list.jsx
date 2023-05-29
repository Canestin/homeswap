import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const list = () => {
  return (
      <div className="list">
        <Sidebar/>
        <div className="listcontiner">
             <Navbar/>
             <Datatable/>
        </div>
      </div>
  )
}

export default list

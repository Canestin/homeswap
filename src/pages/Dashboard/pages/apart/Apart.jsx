
import  './apart.scss'
import Table from '../../components/table/Table'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'


const Apart = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listcontiner">
             <Navbar/>
          <Table/>
         </div>
    </div>
  )
}

export default Apart;

import { Datatable } from "../../Components/DataTable/Datatable"
import { Navbar } from "../../Components/Navbar/Navbar"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import './List.scss'
export const List = () => {
  return (
    <div className="list" >
      <Sidebar />
      <div className="listContainer">
        <Navbar />
          <Datatable />
      </div>
    </div>
  )
}

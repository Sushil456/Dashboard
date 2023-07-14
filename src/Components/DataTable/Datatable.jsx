import { DataGrid } from "@mui/x-data-grid";
import { usercolumns, userrows } from "../../Datasource";
import './Datatable.scss'
import { Link } from "react-router-dom";
export const Datatable = () => {

    // adding extra column and then concatenate with exisiting one
    const actionColumn = [{field:'action', headerName:'Action', width:200, renderCell:()=>{
        return (
            <div className="cellAction">
              <Link to='/users/test' style={{textDecoration:'none'}}>

                <div className="viewButton">View</div>
              </Link>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]

  return (
    <div className="datatable">
      <div className="datatableTitle" >
        Add New User
        <Link to='/users/new' className="link" >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userrows}
        columns={usercolumns.concat(actionColumn)}
        pageSize = {5}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}

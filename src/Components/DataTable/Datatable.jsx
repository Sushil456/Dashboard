import { DataGrid } from "@mui/x-data-grid";
import { usercolumns, userrows } from "../../Datasource";
import './Datatable.scss'
export const Datatable = () => {

    // adding extra column and then concatenate with exisiting one
    const actionColumn = [{field:'action', headerName:'Action', width:200, renderCell:()=>{
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]

  return (
    <div className="datatable">
        
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

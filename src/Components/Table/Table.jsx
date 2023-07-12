import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export const BasicTable = () => {

    // Defining Data 
    const rows = [
        { id: 1, lastName: 'Sharma', firstName: 'Dharma', age: 35 , product:'television', date:'12/07', status:'pending', payment:'online' },
        { id: 2, lastName: 'Marma', firstName: 'Karma', age: 42 , product:'radio', date:'12/07', status:'approved', payment:'cash'},
        { id: 3, lastName: 'Tarma', firstName: 'Verma', age: 45, product:'television', date:'12/07', status:'pending', payment:'cash' },
        { id: 4, lastName: 'Narma', firstName: 'Garma', age: 16 , product:'mobile', date:'12/07', status:'approved', payment:'online'},
        { id: 5, lastName: 'Koderma', firstName: 'Jerma', age: 44 , product:'television', date:'12/07', status:'approved', payment:'cash'},
      ];

  return (
    // create table container to hold table 
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* table header define */}
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Profile</TableCell>
          <TableCell className='tableCell'>First Name</TableCell>
          <TableCell className='tableCell'>Last Name</TableCell>
          <TableCell className='tableCell'>Age</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Payment</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      {/* table body define where data will go  */}
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className='tableCell'>{row.id}</TableCell>
            
            <TableCell className='tableCell'>
                <div className="wrapper">
                    <img src={row.img} alt="" className="image" />
                </div>
            </TableCell>
            <TableCell className='tableCell'>{row.firstName}</TableCell>
            <TableCell className='tableCell'>{row.lastName}</TableCell>
            <TableCell className='tableCell'>{row.age}</TableCell>
            <TableCell className='tableCell'>{row.product}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.payment}</TableCell>
            <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

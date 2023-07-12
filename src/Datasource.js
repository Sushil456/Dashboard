
export const usercolumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {field:'userName', headerName:'User', width: 230, renderCell:(params)=>{
        return(
            <div className="cellwithimg">
                <img className="cellimg" src={params.row.img} alt='' />
                {params.row.userName}
            </div>
        )
    }},
    {field:'email', headerName:'Email', width:230},
    {field:'age', headerName:'Age', width:110},
    {field:'status', headerName:'Status', width:'130',
    renderCell:(params)=>{
        return(
            <div className={`cellwithstatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }}
  ];

export const userrows = [
    { id: 1, userName:'sushil', img:'', status:'active', email:'sushil@gmail.com', age:'100' },
    { id: 2, userName:'satish', img:'', status:'pending', email:'sushil@gmail.com', age:'100' },
    { id: 3, userName:'ravi', img:'', status:'passive', email:'sushil@gmail.com', age:'100' },
    { id: 4, userName:'santal', img:'', status:'active', email:'sushil@gmail.com', age:'100' },
    { id: 5, userName:'daiba', img:'', status:'pending', email:'sushil@gmail.com', age:'100' },
    { id: 6, userName:'rakhi', img:'', status:'active', email:'sushil@gmail.com', age:'100' },
    
  ];
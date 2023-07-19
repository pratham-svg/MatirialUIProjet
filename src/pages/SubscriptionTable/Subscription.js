
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from '../../../node_modules/axios/index';
import CircularProgress from '@mui/material/CircularProgress';
 import Box from '@mui/material/Box';

import Swal from 'sweetalert2';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const columns = [
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'isYearly',
      label: 'IsYearly',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'subscriptionDate',
      label: 'SubscriptionDate',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US')  ,
    },

    {
        id: 'expiryDate',
        label: 'ExpiryDate',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')  ,
    }
  ];

function Subscription() {
    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [ UserData , SetUserData ] = React.useState([]);
const [loading,setLoading] = React.useState(false)
const Navigate = useNavigate()

const setuserList = async ()=>{
    try{
        setLoading(true)
  let UserList = await axios.get('https://machanicalcalculator.microlent.com/api/subscription/getAll' ,{ headers: { 'authorization':`bearer ${localStorage.getItem("token")}` } } )
  await  SetUserData(UserList?.data?.data)
  let UserListData = UserList?.data
  console.log("UserListData===> " , UserListData)
  if(UserListData.statusCode == 401 ){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
    setLoading(false)
  //  Navigate('/login')

    // Navigate('/login')
  }
 }catch(err){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
  setLoading(false)
  Navigate('/login')
 } 
}
  


React.useEffect(  ()=>{
  setuserList()

  },[])

React.useEffect(()=>{})
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};


if(loading){
     return<Box  sx= {{display: 'flex', justifyContent: 'center' ,  alignItems: 'center',  height: '80vh' }} 
     >
  <CircularProgress />
 </Box> }
  return (
    <div>

   
    
 <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
      :  <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      component="div"
      count={UserData.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper></div>)
}

export default Subscription
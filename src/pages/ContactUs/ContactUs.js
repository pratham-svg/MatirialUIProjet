
import React  , {useEffect}   from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from '../../../node_modules/axios/index';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import Swal from 'sweetalert2';
import { useAuth } from 'AuthContext/AuthContext';

 import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const columns = [
    { id: 'firstName', label: 'FirstName', minWidth: 170 },
    { id: 'lastName', label: 'LastName', minWidth: 100 },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'subject',
      label: 'subject',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'message',
      label: 'Message',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US')  ,
    },
  ];

const ContactUs = () => {

    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [ UserData , SetUserData ] = React.useState([])
const [loading,setLoading] = React.useState(false)

const { user } = useAuth();

  const isLoggedIn = !!user;  
const Navigate = useNavigate()





const setuserList = async ()=>{
    try{
        setLoading(true)
  let UserList = await axios.get('https://machanicalcalculator.microlent.com/api/contact/getAll' ,{ headers: { 'authorization':`bearer ${localStorage.getItem("token")}` } } )
  console.log("UserList===> " , UserList?.data?.data?.data)
  await  SetUserData(UserList?.data?.data?.data)
  let UserListData = UserList?.data
  console.log("UserListData===> " , UserListData)
  if(UserListData.statusCode == 200 ){
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'Something went wrong!',
    // })
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
useEffect(() => {
  // Check if the user is not logged in

  if (!isLoggedIn) {
    // Redirect to the login page
    window.location.href = '/admin/login'; // Replace '/login' with the actual login page path
  }
  setuserList()
}, [isLoggedIn])


React.useEffect(()=>{})
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
if(loading){
    return<Box  sx= {{display: 'flex', justifyContent: 'center' ,  alignItems: 'center',   height: '80vh' }} 
    >
 <CircularProgress />
</Box> }


 


  return (

    <>
   
    <Box sx={{display:"flex" ,justifyContent:"flex-end" }}>
        
    <FormControl sx={{width:"150px"}}  fullWidth >
    <InputLabel id="demo-simple-select-label"></InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={ ""}
      label=""
      required
      onChange={e=>setDuration(e.target.value)}
    >
      <MenuItem value={"1-Month"}>1 Month</MenuItem>
      <MenuItem value={"3-Months"}>3 Months</MenuItem>
      <MenuItem value={"6-Months"}>6 Months</MenuItem>
      <MenuItem value={"1-year"}>1 Year</MenuItem>
    </Select>
  </FormControl>
  <FormControl sx={{width:"150px"}}  fullWidth >
    <InputLabel id="demo-simple-select-label"></InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={""}
      label=" "
      required
      onChange={e=>setAmount(e.target.value)}
    >
      <MenuItem value={"5000$"}>5000$</MenuItem>
      <MenuItem value={"10000$"}>10000$</MenuItem>
      <MenuItem value={"15000$"}>15000$</MenuItem>
      <MenuItem value={"20000$"}>20000$</MenuItem>
    </Select>
  </FormControl>
    
    </Box>
    

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
         <TableRow>
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
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
  </Paper>
  </>

  )
}

export default ContactUs
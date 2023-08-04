import React, { useEffect } from 'react';
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
// import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import Swal from 'sweetalert2';
import { useAuth } from 'AuthContext/AuthContext';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  Button  from '@mui/material/Button';




const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'mobileNo',
    label: 'Mobile No.',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'usertype',
    label: 'Payment Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'isActive',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  }
];

const Pagiantion = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [UserData, SetUserData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [payment, setPayment] = React.useState("");

  const [count,setCount]  = React.useState(0)
 

  const { user } = useAuth();
  const isLoggedIn = !!user;
  // const Navigate = useNavigate();

  const ActiveStatus= async(id , status )=>{
    try{
      setLoading(true)
      console.log("id , status ===> " , id , status )
      let UserStatus = await axios.post('https://machanicalcalculator.microlent.com/api/user/update/user-block-unblock' ,{ userId : id , status : !status}  , {
        headers: { authorization: `bearer ${localStorage.getItem('token')}` }
      })
      let resposne = UserStatus.data  
      if(resposne.statusCode == 200 ){
        Swal.fire({
          icon: 'success',
          title: ' Success',
          text: 'Status Updated Successfully'
        });
      }
      await getUserList()
      
      setLoading(false)
     return 
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
      
      setLoading(false)
     console.log(err.message , "err")
    
    }
    
  }
  

  const getUserList = async () => {
    try {
      setLoading(true);
      let UserList = await axios.post(
        'https://machanicalcalculator.microlent.com/api/user/pagination',
        {
          curPage: page + 1,
          perPage: rowsPerPage,
          sortBy: 'createdAt',
          direction: 'desc',
          whereClause: [
            {
              key: 'isActive',
              value: status,
              operator: 'string'
            },
            {
              key: 'usertype',
              value: payment,
              operator: 'string'
            }
          ]
        },
        {
          headers: { authorization: `bearer ${localStorage.getItem('token')}` }
        }
      );

       SetUserData(UserList?.data?.data);
      setCount(UserList?.data?.count)
      setLoading(false);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      // Redirect to the login page
      window.location.href = '/admin/login'; // Replace '/login' with the actual login page path
    }
    getUserList();
  }, [isLoggedIn, page, rowsPerPage,status,payment]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end',marginBottom: 2 }}>
      <FormControl sx={{ width: '150px',mr:2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={payment} 
            label="Payment Status"
            required
            onChange={(e) => setPayment(e.target.value)}
          >
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="unpaid">Unpaid</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '150px' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status} 
            label="Status"
            required
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value={"true"}>Active</MenuItem>
            <MenuItem value={"false"}>Inactive</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {UserData.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align={'start'}>{row.firstName}</TableCell>
                    <TableCell align={'center'}>{row.email}</TableCell>
                    <TableCell align={'center'}>{row.mobileNo}</TableCell>
                    <TableCell align={'center'}>{row.usertype == "paid"? "Paid":"Unpaid"}</TableCell>

                    <TableCell align={'center'}  ><Button  onClick={()=> ActiveStatus(row.id , row.isActive )} variant="contained" color={row.isActive?'success':'error'}   >{row.isActive ? 'Active' : 'Inactive'}</Button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5,10,50,100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Pagiantion;

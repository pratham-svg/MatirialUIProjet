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
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import Swal from 'sweetalert2';
import { useAuth } from 'AuthContext/AuthContext';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
  const [status, setStatus] = React.useState('Active');
  const [count,setCount]  = React.useState(0)

  const { user } = useAuth();
  const isLoggedIn = !!user;
  const Navigate = useNavigate();

  const FillterFormData =async (data)=>{
    
    setStatus(data)
    let Fillter =     {
      "key": "isActive",
        "value": data,
        "operator": "string"
      }
    setLoading(true);
    let UserList = await axios.post(
      'https://machanicalcalculator.microlent.com/api/user/pagination',
      {
        curPage: page + 1,
        perPage: rowsPerPage,
        sortBy: 'createdAt',
        direction: 'desc',
        whereClause: [
          Fillter
        ]
      },
      {
        headers: { authorization: `bearer ${localStorage.getItem('token')}` }
      }
    );

    await SetUserData(UserList?.data?.data);
    setCount(UserList?.data?.data?.count)
    setLoading(false);
  }

  const setuserList = async () => {
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
              key: 'string',
              value: 'string',
              operator: 'string'
            }
          ]
        },
        {
          headers: { authorization: `bearer ${localStorage.getItem('token')}` }
        }
      );

      await SetUserData(UserList?.data?.data);
      setCount(UserList?.data?.data?.count)
      setLoading(false);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
      setLoading(false);
      Navigate('/login');
    }
  };

  useEffect(() => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      // Redirect to the login page
      window.location.href = '/admin/login'; // Replace '/login' with the actual login page path
    }
    setuserList();
  }, [isLoggedIn, page, rowsPerPage]);

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
        <FormControl sx={{ width: '150px' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status} 
            label="Status"
            required
            onChange={(e) => FillterFormData(e.target.value)}
          >
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>InActive</MenuItem>
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
                    <TableCell align={'center'}>{row.isActive ? 'Active' : 'Inactive'}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={count}
          component="div"
          count={UserData.length}
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

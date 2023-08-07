



import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from '../../../node_modules/axios/index';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import Swal from 'sweetalert2';
import { useAuth } from 'AuthContext/AuthContext';


const columns = [
  { id: 'firstName', label: 'First Name', align: 'center', minWidth: 170 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mobileNo',
    label: 'Mobile No.',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'isActive',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const Pagination = () => {
  const [UserData, SetUserData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { user } = useAuth();
  const isLoggedIn = !!user;
  const Navigate = useNavigate();



  

  const getUserList = async () => {
    try {
      setLoading(true);
      let UserList = await axios.post(
        'https://machanicalcalculator.microlent.com/api/user/pagination',
        {
          curPage: 1,
          perPage: 10,
          sortBy: 'createdAt',
          direction: 'desc',
          whereClause: [
            
          ],
        },
        {
          headers: { authorization: `bearer ${localStorage.getItem('token')}` },
        }
      );

      SetUserData(UserList?.data?.data);
      setLoading(false);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
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
    getUserList();
  }, [isLoggedIn]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer >
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
                    <TableCell align={'center'}>{row.firstName}</TableCell>
                    <TableCell align={'center'}>{row.email}</TableCell>
                    <TableCell align={'center'}>{row.mobileNo}</TableCell>
                    <TableCell align={'center'}>
                     
                        {row.isActive ? 'Active' : 'Inactive'}
                     
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Pagination;

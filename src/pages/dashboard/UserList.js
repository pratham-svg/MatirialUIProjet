// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// // material-ui
// import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// // third-party
// import NumberFormat from 'react-number-format';

// // project import
// import Dot from 'components/@extended/Dot';

// function createData(trackingNo, name, fat, carbs, protein) {
//   return { trackingNo, name, fat, carbs, protein };
// }

// const rows = [
//   createData(84564564, 'Camera Lens', 40, 2, 40570),
//   createData(98764564, 'Laptop', 300, 0, 180139),
//   createData(98756325, 'Mobile', 355, 1, 90989),
//   createData(98652366, 'Handset', 50, 1, 10239),
//   createData(13286564, 'Computer Accessories', 100, 1, 83348),
//   createData(86739658, 'TV', 99, 0, 410780),
//   createData(13256498, 'Keyboard', 125, 2, 70999),
//   createData(98753263, 'Mouse', 89, 2, 10570),
//   createData(98753275, 'Desktop', 185, 1, 98063),
//   createData(98753291, 'Chair', 100, 0, 14001)
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// // ==============================|| ORDER TABLE - HEADER CELL ||============================== //

// const headCells = [
//   {
//     id: 'trackingNo',
//     align: 'left',
//     disablePadding: false,
//     label: 'Tracking No.'
//   },
//   {
//     id: 'name',
//     align: 'left',
//     disablePadding: true,
//     label: 'Product Name'
//   },
//   {
//     id: 'fat',
//     align: 'right',
//     disablePadding: false,
//     label: 'Total Order'
//   },
//   {
//     id: 'carbs',
//     align: 'left',
//     disablePadding: false,

//     label: 'Status'
//   },
//   {
//     id: 'protein',
//     align: 'right',
//     disablePadding: false,
//     label: 'Total Amount'
//   }
// ];

// // ==============================|| ORDER TABLE - HEADER ||============================== //

// function OrderTableHead({ order, orderBy }) {
//   return (
//     <TableHead>
//       <TableRow>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.align}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             {headCell.label}
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// OrderTableHead.propTypes = {
//   order: PropTypes.string,
//   orderBy: PropTypes.string
// };

// // ==============================|| ORDER TABLE - STATUS ||============================== //

// const OrderStatus = ({ status }) => {
//   let color;
//   let title;

//   switch (status) {
//     case 0:
//       color = 'warning';
//       title = 'Pending';
//       break;
//     case 1:
//       color = 'success';
//       title = 'Approved';
//       break;
//     case 2:
//       color = 'error';
//       title = 'Rejected';
//       break;
//     default:
//       color = 'primary';
//       title = 'None';
//   }

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Dot color={color} />
//       <Typography>{title}</Typography>
//     </Stack>
//   );
// };

// OrderStatus.propTypes = {
//   status: PropTypes.number
// };

// // ==============================|| ORDER TABLE ||============================== //

// export default function OrderTable() {
//   const [order] = useState('asc');
//   const [orderBy] = useState('trackingNo');
//   const [selected] = useState([]);

//   const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

//   return (
//     <Box>
//       <TableContainer
//         sx={{
//           width: '100%',
//           overflowX: 'auto',
//           position: 'relative',
//           display: 'block',
//           maxWidth: '100%',
//           '& td, & th': { whiteSpace: 'nowrap' }
//         }}
//       >
//         <Table
//           aria-labelledby="tableTitle"
//           sx={{
//             '& .MuiTableCell-root:first-of-type': {
//               pl: 2
//             },
//             '& .MuiTableCell-root:last-of-type': {
//               pr: 3
//             }
//           }}
//         >
//           <OrderTableHead order={order} orderBy={orderBy} />
//           <TableBody>
//             {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
//               const isItemSelected = isSelected(row.trackingNo);
//               const labelId = `enhanced-table-checkbox-${index}`;

//               return (
//                 <TableRow
//                   hover
//                   role="checkbox"
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                   aria-checked={isItemSelected}
//                   tabIndex={-1}
//                   key={row.trackingNo}
//                   selected={isItemSelected}
//                 >
//                   <TableCell component="th" id={labelId} scope="row" align="left">
//                     <Link color="secondary" component={RouterLink} to="">
//                       {row.trackingNo}
//                     </Link>
//                   </TableCell>
//                   <TableCell align="left">{row.name}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="left">
//                     <OrderStatus status={row.carbs} />
//                   </TableCell>
//                   <TableCell align="right">
//                     <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }



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
import Button from '@mui/material/Button';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
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
                    <TableCell align={'center'}>
                      <Button onClick={() => ActiveStatus(row.id, row.isActive)} variant="contained" color={row.isActive ? 'success' : 'error'}>
                        {row.isActive ? 'Active' : 'Inactive'}
                      </Button>
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

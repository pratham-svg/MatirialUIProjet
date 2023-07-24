
import React  , {useEffect}   from 'react';
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
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select from '@mui/material/Select';
 import { useAuth } from 'AuthContext/AuthContext';


import Swal from 'sweetalert2';
// import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

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
const [ subscriptionList , setSubscriptionList ] = React.useState([]);
const [loading,setLoading] = React.useState(false)
const [count,setCount]  = React.useState(0)

const { user } = useAuth();

  const isLoggedIn = !!user;
// const Navigate = useNavigate()

const fetchUserList = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://machanicalcalculator.microlent.com/api/user-subscription/pagination',
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
        
        { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } }
      );

      const { data,message, statusCode } = response.data;
      setCount(data.count)

      if(statusCode==200){
        setSubscriptionList(data)
      }else{
        Swal.fire({
            title:"error",
            text:message
        })
      }

      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      setLoading(false);
      // Navigate('/login'); // Consider whether you want to redirect to login on error or not.
    }
  };

 
  

  useEffect(() => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      // Redirect to the login page
      window.location.href = '/admin/login'; // Replace '/login' with the actual login page path
    }
    fetchUserList();
  }, [isLoggedIn])


React.useEffect(  ()=>{
 

  },[])

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
 <Box sx={{display:"flex" ,justifyContent:"flex-end" }}>
        
        <FormControl sx={{width:"150px"}}  fullWidth >
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
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
        <InputLabel id="demo-simple-select-label">Amount</InputLabel>
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
          {subscriptionList
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    <TableCell  align={"center"}>
                       {row.amount}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.isYearly?"true":"false"}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.subscriptionDate}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.expiryDate}
                       </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={count}
      component="div"
      count={subscriptionList.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper></div>)
}

export default Subscription
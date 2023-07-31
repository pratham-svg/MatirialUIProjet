
import React  , {useEffect,useState}   from 'react';
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
 import { TextField } from '../../../node_modules/@mui/material/index';



import Swal from 'sweetalert2';
import WithAuth from 'components/WithAuth';
// import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const columns = [

  {  label: 'Name', minWidth: 170 },

  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },


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
      label: 'Subscription Date',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },

    {
        id: 'expiryDate',
        label: 'Expiry Date',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')  ,
    }
  ];

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };

function Subscription() {
    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [ subscriptionList , setSubscriptionList ] = React.useState([]);
const [loading,setLoading] = React.useState(false)
const [count,setCount]  = React.useState(0)
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 1000); // Debounce the search query with a delay of 500ms


const handleSearchQueryChange = (event) => {
  setSearch(event.target.value);
};

const formatUserName =(user) => {
   return user?.firstName + " " + user?.lastName
}



// const Navigate = useNavigate()

const fetchUserList = async (searchQuery) => {
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
              key: 'all',
              value: searchQuery,
              operator: 'string'
            }
          ]
        },
        
        { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } }
      );

      const { data} = response.data;
      setCount(data.count)
    setSubscriptionList(data)
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
    fetchUserList(debouncedSearch);
  }, [page, rowsPerPage, debouncedSearch ])




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
 <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchQueryChange}
        />
        
        </Box>
   
    
 <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  {subscriptionList.length>0?(
  <>
       
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
                   <TableCell  align={"start"}>
                       {formatUserName(row?.user)}
                       </TableCell>
                   <TableCell  align={"center"}>
                       {row?.user?.email}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.amount}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.isYearly?"Yes":"No"}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.subscriptionDate?new Date(row.subscriptionDate).toLocaleDateString():"-"}
                       </TableCell>
                  <TableCell  align={"center"}>
                       {row.expiryDate? new Date(row.expiryDate).toLocaleDateString():"-"}
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
  </> ):( <p style={{ display: 'flex', justifyContent: 'center' }}>Record not found</p>
)}
   
  
  </Paper></div>)
}

export default WithAuth(Subscription)
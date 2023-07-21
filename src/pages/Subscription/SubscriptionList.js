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
 import DeleteIcon from '@mui/icons-material/Delete';
 import EditIcon from '@mui/icons-material/Edit';
 
 import {  Button } from '@mui/material';
 import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'




import Swal from 'sweetalert2';
import { API_URL } from 'Services/Service';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const columns = [
    {
        id: '',
        label: 'Sr.No',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
      },
 
  {
    id: 'packageName',
    label: 'PackageName',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'duration',
    label: 'Duration',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];





function SubscriptionList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [ subscriptionList , setSubscriptionList ] = React.useState([]);
    const [loading,setLoading] = React.useState(false)
    const [duration, setDuration] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const navigate= useNavigate()


    // const Navigate = useNavigate()
    
    const fetchUserList = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            'https://machanicalcalculator.microlent.com/api/subscription/getAll',
            { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } }
          );
    
          const { data,message, statusCode } = response.data;
    
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
    
     
      
    
    
    React.useEffect(  ()=>{
        fetchUserList();
    
      },[])
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    
    const handleClick =()=>{
      window.location.href = '/admin/createSubscription';

    }
    const deleteSubscription = async (id)=>{

      

      try{
       setLoading(true);
       
       let data = await axios.get(`${API_URL}/subscription/delete/${id}`,
       { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } })
       let resposne = data.data
       if(resposne.statusCode == 200){
        fetchUserList();
         Swal.fire(
           'success',
           'Subscription Deleted Successfully',
           'success'
         )
       }
       setLoading(false);
      } catch(err){
       console.log(err.message)
       Swal.fire(
         'error',
         'something went wrong',
         'error'
       )
      }
     }

    const updateSubsciption= async (id)=> {
     
      navigate("/updateSubscription/" + id)
     
    
    }


    
    if(loading){
         return<Box  sx= {{display: 'flex', justifyContent: 'center' ,  alignItems: 'center',  height: '80vh' }} 
         >
      <CircularProgress />
     </Box> }


      return (
      <>
      <stack  spacing={2} direction="row" style={{marginBottom: 15,display:"flex",justifyContent: 'space-between' }} >
        <Button variant="contained" onClick={handleClick} >Create subscription</Button>
        <Box sx={{ }}>
        
        <FormControl sx={{width:"150px"}}  fullWidth >
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={duration}
          label="Duration"
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
          value={amount}
          label="Amount"
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


      </stack>
    
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
                .map((row , index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell  align={"center"}>
                           {index+1}
                           </TableCell>
                                        <TableCell  align={"center"}>
                           {row.packageName}
                           </TableCell>
                      <TableCell  align={"center"}>
                           {row.duration? row.duration:" null "}
                           </TableCell>
                      <TableCell  align={"center"}>
                           {row.amount}
                           </TableCell>

                           <Button onClick={() => updateSubsciption(row.id)}  ><EditIcon/></Button>    


                     <Button  onClick={()=>{deleteSubscription(row.id)}} ><DeleteIcon/></Button>    
                     
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={subscriptionList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper></>)
}

export default SubscriptionList
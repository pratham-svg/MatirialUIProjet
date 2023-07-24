import React from 'react'
import { TextField, Button, Stack,TextareaAutosize } from '@mui/material';
//import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DeleteOutlineOutlined } from '../../../node_modules/@mui/icons-material/index';
import { useParams } from 'react-router-dom';
import { API_URL } from 'Services/Service';
import axios from '../../../node_modules/axios/index';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';




const UpdateSubscription = () => {
    const [duration, setDuration] = React.useState('');
    const [packageName, setPackageName] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [features, setFeatures] = React.useState([{ value: '' }]);
    const [description, setDescription] = React.useState('');
    const [loading,setLoading] = React.useState(false)
    const { id } = useParams();
   // const [isValid, setIsValid] = React.useState(true);
    let UserId = id 
  
  React.useEffect(() => {
    userupdatedata();
  }, []);




    const AddFeatures = () => {
      setFeatures([...features, { value: '' }]);
    };
  
    const handleSubmitf = (index, newValue) => {
      const updatedFields = [...features];
      updatedFields[index].value = newValue;
      setFeatures(updatedFields);
      
    };
    const RemoveFeatures = (index) => {
      const updatedFields = [...features];
      updatedFields.splice(index, 1);
      setFeatures(updatedFields);
    };
    
  


    async function handleSubmit() {

    //   const positiveNumberPattern = /^\+?\d+(\.\d+)?$/;  
    // setIsValid(positiveNumberPattern.test(amount));
        //event.preventDefault();

        try {
          setLoading(true);
        let data ={
          "id": Number(UserId),
          "amount": Number(amount),
          "packageName": packageName,
          "features": features,
          "duration": duration,
          "description" :description,
        }
        console.log('this is the data ' , data )
        let createSubscription = await axios.post(`${API_URL}/subscription/create-update`, data ,  { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } } )
        console.log(createSubscription)
        let response=createSubscription.data
        console.log("response===> " , response)
        if(response.statusCode==200){
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'subscritpion created successfully',
          });
        }else{
          Swal.fire({
            title:"error",
            text:message
        })
        }
        setLoading(false);
        } catch (error) {
          console.log("response error" , error.response)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
          });
          setLoading(false);
          // Navigate('/login'); // Consider whether you want to redirect to login on error or not.
        }
      
        
    }
     

    if(loading){
      return<Box  sx= {{display: 'flex', justifyContent: 'center' ,  alignItems: 'center',  height: '80vh' }} 
      >
   <CircularProgress />
  </Box> }

  const userupdatedata= async()=>{
    try{
        let userdata= await axios.get(`${API_URL}/subscription/getOne/${id}`, { headers: { 'authorization': `bearer ${localStorage.getItem("token")}` } } )
      console.log(userdata.data)
      const subscriptionData =userdata.data.data;
      setPackageName(subscriptionData.packageName)
      setAmount(subscriptionData.amount)
      setDuration(subscriptionData.duration)
    //   setFeatures(subscriptionData.features)
    const extractedArray = JSON.parse(subscriptionData.features);
      console.log("extractedArray===> " ,extractedArray)
      setDescription(subscriptionData.description)
      console.log(subscriptionData.features)
      setFeatures(extractedArray)
      


            // Navigate('/logi
    }
    catch(error){
        console.log(error)

    }

  }


    




  return (
    <div>
        
        <React.Fragment  >
        <div style={{display:"flex",justifyContent: 'center' ,  alignItems: 'center' , margin:"auto"}} >
        
    
    <form onSubmit={handleSubmit}style={{    height: '100%' , width: "100%", backgroundColor: "#e0e00e0",

      border: "2px solid #3333",borderRadius: "8px", padding: "20px", boxSizing:"border-box"}} >
        
        <Stack spacing={2} direction="row" sx={{marginBottom: 4,}}>
            <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="PackageName"
                onChange={e => setPackageName(e.target.value)}
                value={packageName}
                fullWidth
                required
            />
            <TextField
                type="number"
                variant='outlined'
                color='secondary'
                label="Amount"
                onChange={e => setAmount(e.target.value)}
                value={amount}
                
                helperText="Please enter a valid positive number."
                error={amount !== '' && !/^\+?\d+(\.\d+)?$/.test(amount)}
               
                
                fullWidth
                required
            />
            <Box >
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
    </Box>
        </Stack>
    <TextareaAutosize

      aria-label="empty textarea"
      placeholder="Description"
      style={{ width: '100%', minHeight: 30, resize: 'none',marginBottom: 15 }}
      minRows={3} // Minimum number of rows
      maxRows={6} // Maximum number of rows before scrollbar appears
      onChange={e=>setDescription(e.target.value)}
      value={description}
      color='secondary'
      required
      variant='outlined'
      


    />
     {features.map((field,index) => (  <Stack key={index} spacing={2} direction="row"  sx={{mb: 2}} >
     <TextField
            key={index}
            type="text"
            variant='outlined'
            color='secondary'
            label="Features"
            onChange={e => handleSubmitf(index,e.target.value)}
            value={field}
            
            fullWidth
            required
            
           
        /> 
        <DeleteOutlineOutlined onClick={RemoveFeatures} />

        </Stack>))}

        <div style={{display:"flex",justifyContent:"space-between"}} >
          <Button variant="outlined" color="primary" type="submit" onClick={AddFeatures} ><AddCircleIcon/>Features </Button>

          <Button variant="outlined" color="primary" type="submit">Update</Button>
        </div>
      

    </form>
 {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
 </div>
</React.Fragment>


    </div>
  )
}

export default UpdateSubscription
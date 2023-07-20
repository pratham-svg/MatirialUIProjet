
import React from 'react';
import { TextField, Button, Stack,TextareaAutosize } from '@mui/material';
//import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateSubscription() {
    const [duration, setDuration] = React.useState('');
    const [packageName, setPackageName] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [features, setFeatures] = React.useState('');
    const [description, setDescription] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log(packageName,amount,features,duration) 
    }


  return (
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
                type="text"
                variant='outlined'
                color='secondary'
                label="Amount"
                onChange={e => setAmount(e.target.value)}
                value={amount}
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
     <Stack spacing={2} direction="row"  sx={{mb: 2}} >
     <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Features"
            onChange={e => setFeatures(e.target.value)}
            value={features}
            
            fullWidth
            required
            
           
        />
            <Button variant="outlined" color="primary" type="submit"><AddCircleIcon/></Button>

        </Stack>
    <Button variant="outlined" color="primary" type="submit">Submit</Button>

    </form>
 {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
 </div>
</React.Fragment>
  )
}

export default CreateSubscription
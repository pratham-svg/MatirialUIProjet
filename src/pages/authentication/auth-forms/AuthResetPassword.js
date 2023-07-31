import React,{useState}from 'react';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// material-ui
import { API_URL } from 'Services/Service';
import axios from '../../../../node_modules/axios/index';
//import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import {
  Button,
 // Divider,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// project import
//import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
//import { useAuth } from 'AuthContext/AuthContext';
import WithOutAuth from 'components/WithOutAuth ';
import { Backdrop,Box, CircularProgress } from '../../../../node_modules/@mui/material/index';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';

// assets



const AuthResetPassword = () => {
  let Navigate = useNavigate()
  const [ loading , SetLoading ] = useState(false)

// const [checked, setChecked] = React.useState(false);
// let Navigate = useNavigate()
// const {user}= useAuth();
// useEffect(()=> {
//    if(user){
//      return window.location.href = "/admin"
//    }
// },[user])

return (
  <div>  
    <Box  sx= {{display: 'flex', justifyContent: 'center' ,  alignItems: 'center', height:"100%", width:"100%" }} >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
       
      >
    <CircularProgress />
    </Backdrop>
    </Box> 


    <Formik
      initialValues={{
        NewPassword : '',
        ConfirmPassword : '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        NewPassword: Yup.string().max(255).required('NewPassword is required'),
        ConfirmPassword: Yup.string().max(255).required('ConfirmPassword is required')
      })}
      onSubmit={async (values, {  setStatus, setSubmitting }) => {
        SetLoading(true)

        
        try {
           if(values.NewPassword != values.ConfirmPassword ){
            Swal.fire(
                'error',
                'NewPassword and ConfirmPassword must be same',
                'error'
              )
               Navigate('/ResetPassword')
               SetLoading(false)
               return
           }
           let data = await axios.post(`${API_URL}/user/reset-password` , {
            "email": localStorage.getItem('email'),
            "new_password": values.NewPassword
          })
          localStorage.removeItem('email')
          let response = data.data
          
          if(response.statusCode == 200 ){
            Swal.fire(
                'success',
                'Password change successfully',
                'success'
              )
            
              Navigate('/login')
              SetLoading(false)
              return
           }else{
            Swal.fire(
              'error',
              'something went wrong',
              'error'
            )
           }
          setStatus({ success: false });
          setSubmitting(false);
          SetLoading(false)
        } catch (err) {
            Swal.fire(
                'error',
                'Required a strong password ',
                'error'
              )
             
               Navigate('/ResetPassword')
               SetLoading(false) 
          setStatus({ success: false });
          //setErrors({ submit: err.message });
          setSubmitting(false);
          SetLoading(false)
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">New Password</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="password"
                  value={values.NewPassword}
                  name="NewPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter New Password"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Confirm Password</InputLabel>
              <OutlinedInput
                id="email-login"
                type="Password"
                value={values.ConfirmPassword}
                name="ConfirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Confirm Password"
                fullWidth
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                 Reset Password 
                </Button>
              </AnimateButton>
            </Grid>
           
            
          </Grid>
        </form>
      )}
    </Formik>
  </div>
);
}

export default WithOutAuth(AuthResetPassword)

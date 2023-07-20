import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// material-ui
// import { logIn } from 'store/reducers/User';
// import axios from '../../../../node_modules/axios/index';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
// import { useAuth } from 'AuthContext/AuthContext';
import {
  Button,
 // Divider,
  FormHelperText,
  Grid,
  Link,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';
// import Swal from 'sweetalert2'; // Import SweetAlert
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { useDispatch  } from 'react-redux';
// project import
//import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
// import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthForgetPassword = () => {
   // const [checked, setChecked] = React.useState(false);
   let Navigate = useNavigate()
//    const [showPassword, setShowPassword] = React.useState(false);
//    const {  login } = useAuth();
//    const handleClickShowPassword = () => {
//      setShowPassword(!showPassword);
//    };
//    let dispatch = useDispatch()
//    const handleMouseDownPassword = (event) => {
//      event.preventDefault();
//    };
   if(localStorage.getItem('token')){
     console.log(localStorage.getItem('token'))
     Navigate('/dashboard')
     
   }
   
   return (
     <div>  
       <Formik
         initialValues={{
           email: '',
           submit: null
         }}
         validationSchema={Yup.object().shape({
           email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
         })}
         onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
                console.log("values ===> " , values)
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
                console.error(err);
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
         }}
       >
         {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
           <form noValidate onSubmit={handleSubmit}>
             <Grid container spacing={3}>
               <Grid item xs={12}>
                 <Stack spacing={1}>
                   <InputLabel htmlFor="email-login">Email Address</InputLabel>
                   <OutlinedInput
                     id="email-login"
                     type="email"
                     value={values.email}
                     name="email"
                     onBlur={handleBlur}
                     onChange={handleChange}
                     placeholder="Enter email address"
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
            
               <Grid item xs={12} sx={{ mt: -1 }}>
                 <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                   <Link variant="h6" component={RouterLink} to="" color="text.primary">
                     Forgot Password?
                   </Link>
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
                     Login
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

export default AuthForgetPassword

import React, { useState } from 'react';
import Sign_Up from '../../assets/Sign_Up.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ForgetPassword from './ForgetPassword';
const schema = yup.object({

  
    email: yup.string().email().required(),

 
    phoneNumber: yup
        .string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Enter a valid phone number"
        ),

    firstName: yup.string().required(),
    lastName: yup.string().required(),

 
    password: yup.string().min(8).max(32).required(),
    confirmPassword: yup.string().min(8).max(32).required(),
});



const schemaSignIn = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});

function Signup() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema, schemaSignIn),
    });
    const onSubmitHandler = (data) => {
        console.log("------------------->", { data });
        reset();
    };

    // const { register, handleSubmit, formState: { errors }, reset } = useForm({
    //     resolver: yupResolver(, schema),
    // });

    const onSubmitHandlerSignIn = (data) => {
        console.log({ data },"-------------------");
        reset();
    };
    const [activeTab, setActiveTab] = useState('signUp');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };




    return (
        <div>
            <div>
                <section className="container-fluid Sign-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 col-lg-4">
                                        <ul className="nav nav-pills mt-5 mb-4 nav-pills-bg" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">

                                                <button
                                                    className={`nav-link ${activeTab === 'signUp' ? 'active' : ''}`}
                                                    id="pills-Sign-Up-tab"
                                                    onClick={() => handleTabChange('signUp')}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-Sign-Up"
                                                    aria-selected={activeTab === 'signUp'}
                                                >
                                                    Sign Up
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">

                                                <button
                                                    className={`nav-link ${activeTab === 'signIn' ? 'active' : ''}`}
                                                    id="pills-Sign-In-tab"
                                                    onClick={() => handleTabChange('signIn')}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-Sign-In"
                                                    aria-selected={activeTab === 'signIn'}
                                                >
                                                    Sign In
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="tab-content" id="pills-tabContent">
                                    <div className={`tab-pane fade  ${activeTab === 'signUp' ? 'active show' : ''}`} id="pills-Sign-Up" role="tabpanel" aria-labelledby="pills-Sign-Up-tab" tabIndex="0">

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="card Sign-Up-card-section">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <h3 className="fw-bold">SIGN UP</h3>
                                                                <p className="Sign_Up_subheading">On the other hand, we denounce
                                                                    with righteous indignation and
                                                                    dislike men who are so beguiled and demoralized by the
                                                                    charms of
                                                                    pleasure of the moment.</p>
                                                            </div>
                                                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="form-label">First Name</label>
                                                                    <input type="text" className="form-control " placeholder="Ex.-"  {...register("firstName")} />
                                                                    <p>{errors.firstName?.message}</p>
                                                                </div>
                                                                <div className="col-md-6 mb-3"><label className="form-label">Last Name</label>
                                                                    <input type="text" className="form-control " placeholder="Ex.-" {...register("lastName")} />
                                                                    <p>{errors.lastName?.message}</p>
                                                                </div>
                                                                <div className="col-md-12 mb-3"><label className="form-label">Phone
                                                                    Number</label>
                                                                    <input type="text" className="form-control "
                                                                        placeholder="Ex.- 00012-52166 " {...register("phoneNumber")} />
                                                                    <p>{errors.phoneNumber?.message}</p>
                                                                </div>
                                                                <div className="col-md-12 mb-3"><label className="form-label">Email</label>
                                                                    <input type="text" className="form-control "  {...register("email")}
                                                                        placeholder="Ex.- mailto:email@gmail.com" />
                                                                    <p>{errors.email?.message}</p>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="form-label">Password</label>
                                                                    <input type="text" className="form-control "
                                                                        {...register("password")} placeholder="Ex.- ******** " />
                                                                    <p>{errors.password?.message}</p>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control "  {...register("confirmPassword")}
                                                                        placeholder="Ex.- ******** " />
                                                                    <p>{errors.confirmPassword?.message}</p>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="mb-3 form-check">
                                                                        <input type="checkbox" className="form-check-input"
                                                                            id="exampleCheck1" />
                                                                        <label className="form-check-label" for="exampleCheck1">Terms And
                                                                            Conditions</label>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button className="btn Sign_btn_submit" >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="card Sign-Up-card-section-img">
                                                    <div className="card-body">
                                                        <img src={Sign_Up} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ---sign in  */}
                                    <div className={`tab-pane fade ${activeTab === 'signIn' ? 'active show' : ''}`} id="pills-Sign-In" role="tabpanel" aria-labelledby="pills-Sign-In-tab" tabIndex="0">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="card Sign-Up-card-section">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <h3 className="fw-bold">SIGN IN</h3>
                                                                <p className="Sign_Up_subheading">On the other hand, we denounce
                                                                    with righteous indignation and dislike men who are so
                                                                    beguiled and demoralized by the charms of pleasure of the
                                                                    moment.</p>
                                                            </div>
                                                            <form onSubmit={handleSubmit(onSubmitHandlerSignIn)}>
                                                                <div className="col-md-12 mb-3"><label className="form-label">Email</label>
                                                                    <input type="email" className="form-control " {...register("email")}
                                                                        placeholder="Ex.- email@gmail.com" required />
                                                                    <p>{errors.email?.message}</p>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <label className="form-label">Password</label>
                                                                    <input  {...register("password")}
                                                                        type="password" className="form-control "
                                                                        placeholder="Ex.- ******** " required />
                                                                    <p>{errors.password?.message}</p>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="mb-3 form-check">
                                                                        <input type="checkbox" className="form-check-input"
                                                                            id="exampleCheck1" />
                                                                        <label className="form-check-label" for="exampleCheck1">Remember me
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 text-end">
                                                                    <a href={<ForgetPassword />} className="forget_password"> Forget Password?</a>
                                                                </div>
                                                                <div>
                                                                    <button className="btn Sign_btn_submit" type="submit">
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="card Sign-Up-card-section-img">
                                                    <div className="card-body">
                                                        <img src={Sign_Up} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </section>
            </div>
        </div>
    )
}

export default Signup
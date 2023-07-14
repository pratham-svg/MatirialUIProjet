 
import React from 'react';
 import Address from "../../assets/Address.png"
 import mail from "../../assets/mail.png"
 import call from "../../assets/call.png"
 import facebook from "../../assets/facebook.png"
 import twitter from "../../assets/twitter.png"
 import google from "../../assets/google.png"
 const Contact = () => {
   return (
    <>
   
      <section className="container-fluid PageTitle_banner_section p-0">
        <div className="container">
            <h1 className="PageTitle_banner_heading">CONTACT US</h1>
        </div>
    </section>
    <section className="container-fluid contact_info_section py-5 bg-white">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                    <div className="why_choose_us_item">
                        <div className="why_choose_us_item_img ">
                            <img src={Address} alt=""/>
                        </div>
                        <div className="why_choose_us_item_content text-start">
                            <h5 className="fw-bold text-muted">Address</h5>
                            <p>1531 Moonlight Drive, Maple Shade, NJ</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                    <div className="why_choose_us_item">
                        <div className="why_choose_us_item_img">
                            <img src={mail} alt=""/>
                        </div>
                        <div className="why_choose_us_item_content text-start">
                            <h5 className="fw-bold text-muted">E-mail</h5>
                            <p>MechanicalCal@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                    <div className="why_choose_us_item">
                        <div className="why_choose_us_item_img">
                            <img src={call} alt=""/>
                        </div>
                        <div className="why_choose_us_item_content text-start">
                            <h5 className="fw-bold text-muted">Phone Number</h5 >
                            <p>1 (609) 123-45-67</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid Touch_section py-5 ">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="fw-bold">Get In Touch</h3>
                        <p>We believe our warranties set us apart from
                            our competitors and show our commitment to
                            quality work and service. We believe our
                            warranties set us apart from our competitors
                            and show our commitment to quality work and
                            service.</p>
                        <h3 className="fw-bold my-4">Follow us</h3>
                            <a className="text-decoration-none"  href="">
                                <img src={facebook} className="social-media" alt=""/>
                            </a>
                            <a  className="text-decoration-none" href="">
                                <img src={twitter} className="social-media" alt=""/>
                            </a>
                            <a className="text-decoration-none"  href="">
                                <img src={google} className="social-media" alt=""/>
                            </a>
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control  form-control-lg" placeholder="First name"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control  form-control-lg" placeholder="last name"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <input type="text" className="form-control  form-control-lg" placeholder="Email"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <input type="text" className="form-control  form-control-lg" placeholder="Subject"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <textarea className="form-control form-control-lg" placeholder="Message" name="" id=""
                                    cols="30" rows="5"></textarea>
                            </div>
                            <div>
                                <button className="btn btn_submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid">
        <div className="row">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7157.406093584441!2d73.01710454171354!3d26.238836658220727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b54195f2839%3A0xb3633326d8efe16f!2sMANISHA%20MEHANDI%20ART!5e0!3m2!1sen!2sin!4v1688728656125!5m2!1sen!2sin"
                width="600" height="450" style={{ border: 0 }} allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" title=" "/>
        </div>
    </section>

   
    </>
   )
 }
 
 export default Contact;
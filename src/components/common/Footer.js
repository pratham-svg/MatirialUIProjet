import React from 'react'
import logo from '../../assets/logo.png' 

const Footer = () => {
  return (
    <div>
    <footer className="container-fluid footer_section p-0">
    <div className="container">
        <div className="row pt-5 pb-1">
            <div className="col-md-6 mb-4">
                <div className="footer_left_area">
                    <img src={logo} className="footer_logo" alt=""/>
                    <p className="my-4">On the other hand, we denounce with righteous indignation and dislike men who
                        are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                        desire, that they cannot foresee the pain and.</p>
                    <div className="footer_socail_area">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="footer_right_area">
                    <h2>Contact Info</h2>
                    <p className="my-3">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                    <div className="contact_info">
                        <div> <i className="fa-solid fa-envelope"></i> mechanicalcalculator@gmail.com </div>
                        <div> <i className="fa-solid fa-phone"></i> 012-924-533 </div>
                        <div> <i className="fa-solid fa-location-dot"></i> USA</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div className="row footer_copy_right_section">
        <p>
            Copyright 2023
        </p>
    </div>
</footer>
<div className="modal fade" id="watch_video_modal" tabindex="-1" aria-labelledby="watch_video_modalLabel"
aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
        <div className="modal-body">
            <i className="fa-regular fa-circle-play "></i>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Footer

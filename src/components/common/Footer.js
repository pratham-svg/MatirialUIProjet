import React from 'react'
import logo from '../../assets/logo.png' 

const Footer = () => {
  return (
    <div>
    <footer class="container-fluid footer_section p-0">
    <div class="container">
        <div class="row pt-5 pb-1">
            <div class="col-md-6 mb-4">
                <div class="footer_left_area">
                    <img src={logo} class="footer_logo" alt=""/>
                    <p class="my-4">On the other hand, we denounce with righteous indignation and dislike men who
                        are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                        desire, that they cannot foresee the pain and.</p>
                    <div class="footer_socail_area">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="footer_right_area">
                    <h2>Contact Info</h2>
                    <p class="my-3">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                    <div class="contact_info">
                        <div> <i class="fa-solid fa-envelope"></i> mechanicalcalculator@gmail.com </div>
                        <div> <i class="fa-solid fa-phone"></i> 012-924-533 </div>
                        <div> <i class="fa-solid fa-location-dot"></i> USA</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="row footer_copy_right_section">
        <p>
            Copyright 2023
        </p>
    </div>
</footer>
    </div>
  )
}

export default Footer

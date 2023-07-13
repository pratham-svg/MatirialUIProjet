import React from 'react'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div>
    <header class="container-fluid header_section">
    <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="container">
            <a class="navbar-brand logo_area p-0" href="#">
                <img src={logo}/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i class=" fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto  my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="Calculator.html">Free Calculator</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Pricing.html">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact-us.html">Contact Us</a>
                    </li>
                </ul>
                <div class="d-flex align-items-center nav_right_side">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        // style={"--bs-scroll-height: 100px;"}
                        >
                        <li class="nav-item">
                            <a class="nav-link" href="#">Free Trial</a>
                        </li>
                    </ul>
                    <a href="SignIn.html" class="btn btn_signin ">SIGN IN</a>
                </div>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header

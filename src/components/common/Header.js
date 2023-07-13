import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div>
    <header className="container-fluid header_section">
    <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container">
            <a className="navbar-brand logo_area p-0" href="#">
                <img src={logo} alt=''/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i className=" fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto  my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="Calculator.html">Free Calculator</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Pricing.html">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Contact-us.html">Contact Us</a>
                    </li>
                </ul>
                <div className="d-flex align-items-center nav_right_side">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        // style={"--bs-scroll-height: 100px;"}
                        >
                        <li className="nav-item">
                            <a className="nav-link" href="#">Free Trial</a>
                        </li>
                    </ul>
                    <a href="SignIn.html" className="btn btn_signin ">SIGN IN</a>
                </div>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header;

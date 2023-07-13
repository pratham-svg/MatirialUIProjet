import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname)
  let routes = [
   {
    id : 1 ,
    name : "Home",
    path : "Home",
    Active : pathname === '/Home' ? "active" : ""
} ,
   {
    id : 1 ,
    name : "Free Calculator",
    path : "Home",
    Active : pathname === '/Home' ? "active" : ""
   } ,
   {
    id : 1 ,
    name : "About Us",
    path : "Home",
    Active : pathname === '/Home' ? "active" : ""
   } ,
   ,
   {
    id : 1 ,
    name : "Pricing",
    path : "Home",
    Active : pathname === '/Home' ? "active" : ""
   } ,
   {
    id : 1 ,
    name : "Contact Us",
    path : "Home",
    Active : pathname === '/Home' ? "active" : ""
   } 
  ]


  return (
    <div>
    <header className="container-fluid header_section">
    <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container">
            <a className="navbar-brand logo_area p-0" href="#">
                <img src={logo}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i className=" fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto  my-lg-0 navbar-nav-scroll">
            {    routes.map(({ id , name , path , Active})=>  <li className="nav-item">
              <Link className={`nav-link ${Active}`} to={path} >{name}</Link>
          </li>
            )}
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

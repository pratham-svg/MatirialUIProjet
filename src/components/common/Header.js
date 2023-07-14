import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation();
    const { pathname } = location;
  let routes = [
   {
    id : 1 ,
    name : "Home",
    path : "/",
    Active : pathname === '/' ? "active" : ""
} ,
   {
    id : 2,
    name : "Free Calculator",
    path : "/Calculator",
    Active : pathname === '/Calculator' ? "active" : ""
   } ,
   {
    id : 3 ,
    name : "About Us",
    path : "/About",
    Active : pathname === '/About' ? "active" : ""
   } ,
   ,
   {
    id : 4,
    name : "Pricing",
    path : "/Pricing",
    Active : pathname === '/Pricing' ? "active" : ""
   } ,
   {
    id : 5 ,
    name : "Contact Us",
    path : "/Contact",
    Active : pathname === '/Contact' ? "active" : ""
   } 
  ]


  return (
    <div>
    <header className="container-fluid header_section">
    <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container">
            <Link className="navbar-brand logo_area p-0" to="/">
                <img src={logo}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i className=" fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto  my-lg-0 navbar-nav-scroll">
            {    routes.map(({ id , name , path , Active})=>  <li className="nav-item">
              <Link className={`nav-link ${Active}`} to={path} id={id} >{name}</Link>
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
                    <Link to='Signup' className="btn btn_signin ">SIGN IN</Link>
                </div>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header;

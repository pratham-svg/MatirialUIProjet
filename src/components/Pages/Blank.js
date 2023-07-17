import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import Sidebar from '../Common/Sidebar'


function Blank() {
  return (
    <div>
          <div id="wrapper">


<Sidebar/>

<div id="content-wrapper" className="d-flex flex-column">

    <div id="content">

     <Navbar/>
      

        <div className="container-fluid">

          
            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

        </div>
    

    </div>
 
    <footer className="sticky-footer bg-white">
        <div className="container my-auto">
            <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
            </div>
        </div>
    </footer>


</div>


</div>



<Link className="scroll-to-top rounded" to="#page-top">
<i className="fas fa-angle-up"></i>
</Link>

<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div className="modal-dialog" role="document">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <Link className="btn btn-primary" to="/Login">Logout</Link>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Blank
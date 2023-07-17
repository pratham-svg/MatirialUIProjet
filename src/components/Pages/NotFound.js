import React from 'react'
import Sidebar from '../Common/Sidebar'
import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
         <div id="wrapper">


<Sidebar/>


<div id="content-wrapper" className="d-flex flex-column">

  
    <div id="content">

        
       <Navbar/>
      
        <div className="container-fluid">

          
            <div className="text-center">
                <div className="error mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <Link to="/Index">&larr; Back to Dashboard</Link>
            </div>

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

export default NotFound
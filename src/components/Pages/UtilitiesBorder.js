import React from 'react'
import Sidebar from '../Common/Sidebar'
import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'

function UtilitiesBorder() {
  return (
    <div>
         <div id="wrapper">


<Sidebar/>



<div id="content-wrapper" className="d-flex flex-column">

 
    <div id="content">

  <Navbar/>
     

      
        <div className="container-fluid">

            <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
            <p className="mb-4">Bootstrap's default utility classNamees can be found on the official <Link
                    to="https://getbootstrap.com/docs">Bootstrap Documentation</Link> page. The custom utilities
                below were created to extend this theme past the default utility classNamees built into Bootstrap's
                framework.</p>

           
            <div className="row">

               
                <div className="col-lg-6">

                    <div className="card mb-4 py-3 border-left-primary">
                        <div className="card-body">
                            .border-left-primary
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-secondary">
                        <div className="card-body">
                            .border-left-secondary
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-success">
                        <div className="card-body">
                            .border-left-success
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-info">
                        <div className="card-body">
                            .border-left-info
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-warning">
                        <div className="card-body">
                            .border-left-warning
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-danger">
                        <div className="card-body">
                            .border-left-danger
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-left-dark">
                        <div className="card-body">
                            .border-left-dark
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="card mb-4 py-3 border-bottom-primary">
                        <div className="card-body">
                            .border-bottom-primary
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-secondary">
                        <div className="card-body">
                            .border-bottom-secondary
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-success">
                        <div className="card-body">
                            .border-bottom-success
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-info">
                        <div className="card-body">
                            .border-bottom-info
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-warning">
                        <div className="card-body">
                            .border-bottom-warning
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-danger">
                        <div className="card-body">
                            .border-bottom-danger
                        </div>
                    </div>

                    <div className="card mb-4 py-3 border-bottom-dark">
                        <div className="card-body">
                            .border-bottom-dark
                        </div>
                    </div>

                </div>

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

export default UtilitiesBorder
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Common/Sidebar'
import Navbar from '../Common/Navbar'

function Button() {
  return (
    <div>
         <div id="wrapper">


<Sidebar/>



<div id="content-wrapper" className="d-flex flex-column">

   
    <div id="content">

        <Navbar/>
       
        <div className="container-fluid">

            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

            <div className="row">

                <div className="col-lg-6">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                        </div>
                        <div className="card-body">
                            <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                buttons as shown in the examples below!</p>
                            <div className="mb-2">
                                <code>.btn-circle</code>
                            </div>
                            <Link to="#" className="btn btn-primary btn-circle">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="btn btn-success btn-circle">
                                <i className="fas fa-check"></i>
                            </Link>
                            <Link to="#" className="btn btn-info btn-circle">
                                <i className="fas fa-info-circle"></i>
                            </Link>
                            <Link to="#" className="btn btn-warning btn-circle">
                                <i className="fas fa-exclamation-triangle"></i>
                            </Link>
                            <Link to="#" className="btn btn-danger btn-circle">
                                <i className="fas fa-trash"></i>
                            </Link>
                          
                            <div className="mt-4 mb-2">
                                <code>.btn-circle .btn-sm</code>
                            </div>
                            <Link to="#" className="btn btn-primary btn-circle btn-sm">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="btn btn-success btn-circle btn-sm">
                                <i className="fas fa-check"></i>
                            </Link>
                            <Link to="#" className="btn btn-info btn-circle btn-sm">
                                <i className="fas fa-info-circle"></i>
                            </Link>
                            <Link to="#" className="btn btn-warning btn-circle btn-sm">
                                <i className="fas fa-exclamation-triangle"></i>
                            </Link>
                            <Link to="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-trash"></i>
                            </Link>
                          
                            <div className="mt-4 mb-2">
                                <code>.btn-circle .btn-lg</code>
                            </div>
                            <Link to="#" className="btn btn-primary btn-circle btn-lg">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="btn btn-success btn-circle btn-lg">
                                <i className="fas fa-check"></i>
                            </Link>
                            <Link to="#" className="btn btn-info btn-circle btn-lg">
                                <i className="fas fa-info-circle"></i>
                            </Link>
                            <Link to="#" className="btn btn-warning btn-circle btn-lg">
                                <i className="fas fa-exclamation-triangle"></i>
                            </Link>
                            <Link to="#" className="btn btn-danger btn-circle btn-lg">
                                <i className="fas fa-trash"></i>
                            </Link>
                        </div>
                    </div>

                  
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                        </div>
                        <div className="card-body">
                            <p>Google and Facebook buttons are available featuring each company's respective
                                brand color. They are used on the user login and registration pages.</p>
                            <p>You can create more custom buttons by adding a new color variable in the
                                <code>_variables.scss</code> file and then using the Bootstrap button variant
                                mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                file.</p>
                            <Link to="#" className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                                .btn-google</Link>
                            <Link to="#" className="btn btn-facebook btn-block"><i
                                    className="fab fa-facebook-f fa-fw"></i> .btn-facebook</Link>

                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                        </div>
                        <div className="card-body">
                            <p>Works with any button colors, just use the <code>.btn-icon-split</code> className and
                                the markup in the examples below. The examples below also use the
                                <code>.text-white-50</code> helper className on the icons for additional styling,
                                but it is not required.</p>
                            <Link to="#" className="btn btn-primary btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag"></i>
                                </span>
                                <span className="text">Split Button Primary</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-success btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-check"></i>
                                </span>
                                <span className="text">Split Button Success</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-info btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-info-circle"></i>
                                </span>
                                <span className="text">Split Button Info</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-warning btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                                <span className="text">Split Button Warning</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-danger btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-trash"></i>
                                </span>
                                <span className="text">Split Button Danger</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-secondary btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                                <span className="text">Split Button Secondary</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-light btn-icon-split">
                                <span className="icon text-gray-600">
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                                <span className="text">Split Button Light</span>
                            </Link>
                            <div className="mb-4"></div>
                            <p>Also works with small and large button classNamees!</p>
                            <Link to="#" className="btn btn-primary btn-icon-split btn-sm">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag"></i>
                                </span>
                                <span className="text">Split Button Small</span>
                            </Link>
                            <div className="my-2"></div>
                            <Link to="#" className="btn btn-primary btn-icon-split btn-lg">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag"></i>
                                </span>
                                <span className="text">Split Button Large</span>
                            </Link>
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
            <Link className="btn btn-primary" to="login.html">Logout</Link>
        </div>
    </div>
</div>
</div>


    </div>
  )
}

export default Button
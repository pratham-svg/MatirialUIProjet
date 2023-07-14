import React from 'react'

function ResetPassword() {
  return (
    <div>
        <section className="container-fluid Sign-section  Sign-section-Password">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card Sign-Up-card-section">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <h3 className="fw-bold">Reset Password</h3>
                                        <p className="Sign_Up_subheading">On the other hand, we denounce
                                            with righteous indignation and
                                            dislike men who are so beguiled and demoralized by the
                                            charms of
                                            pleasure of the moment.</p>
                                </div>
                            
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">New Password</label>
                                    <input type="email" className="form-control " placeholder="Ex.-"/>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Confirm  Password</label>
                                    <input type="email" className="form-control " placeholder="Ex.-"/>
                                </div>
                               
                                <div>
                                    <button className="btn Sign_btn_submit">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card Sign-Up-card-section-img">
                        <div className="card-body">
                            <img src="img/Sign_Up.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ResetPassword;
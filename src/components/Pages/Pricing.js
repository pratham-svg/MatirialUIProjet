import React from 'react'

const Pricing = () => {
  return (
    <div> 
        <section className="container-fluid PageTitle_banner_section Pricing-select p-0">
        <div className="container">
            <h1 className="PageTitle_banner_heading">Pricing</h1>
        </div>
    </section>

    <section className="container-fluid Pricing">
        <div className="container">
            <div className="row mb-5 justify-content-center">
                <div className="col-md-12 mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 text-center Protection_Plans">
                            <h2 className="fw-bold">Protection Plans</h2>
                                <p>
                                    On the other hand, we denounce with righteous indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 justify-content-center mx-auto">
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 mt-4 ">
                    <div className="card border-0 Free_Plans">
                        <div className="card-body">
                            <h3 className="text-center">Free Plans</h3>
                                <p className="text-center">On the other hand, we denounce with righteous indignation and
                                    dislike men who are so beguiled and demoralized by the charms of pleasure of the
                                    moment.</p>
                                <div className="plans_list">
                                    <p><i className="fa-solid fa-check-double"></i> Duct size calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> Velocity calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> Friction loss calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> 1 duct at a time</p>
                                </div>


                        </div>
                        <div className="card-footer card-footer-Pricing">
                            <div className="text-center">
                                <button className="btn btn-select">
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 mt-4 ">
                    <div className="card border-0 Free_Plans">
                        <div className="card-body">
                            <h3 className="text-center">Subscription</h3>
                                <p className="text-center">On the other hand, we denounce with righteous indignation and
                                    dislike men who are so beguiled and demoralized by the charms of pleasure of the
                                    moment.</p>
                                <div className="plans_list">
                                    <p><i className="fa-solid fa-check-double"></i>Duct size calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> Velocity calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> Friction loss calculation</p>
                                    <p><i className="fa-solid fa-check-double"></i> Add unlimited ducts</p>
                                    <p><i className="fa-solid fa-check-double"></i> Project structured in Treeview</p>
                                    <p><i className="fa-solid fa-check-double"></i> Create, edit, save and remove projects
                                    </p>
                                    <p><i className="fa-solid fa-check-double"></i> Calculation saved on the cloud</p>
                                    <p><i className="fa-solid fa-check-double"></i> Calculation reports </p>
                                    <p><i className="fa-solid fa-check-double"></i> Ducts schedule</p>
                                    <p><i className="fa-solid fa-check-double"></i> Export calculation to excel</p>
                                    <p><i className="fa-solid fa-check-double"></i> Add notes for each duct</p>

                                </div>
                                <div className="text-center">
                                    <h3>1$ / Monthly</h3>
                                    <div className="d-flex justify-content-center my-3 Pricing-switch">
                                        <label className="form-check-label me-2">Yearly</label>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch"/>
                                        </div>
                                        <label className="form-check-label">Monthly</label>
                                    </div>

                                </div>

                        </div>
                        <div className="card-footer card-footer-Pricing">
                            <div className="text-center">
                                <button className="btn btn-select">
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>

    </section>
    </div>
  )
}

export default Pricing
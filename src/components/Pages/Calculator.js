import React from 'react'

const Calculator = () => {
  return (
   <>
    <section className="container-fluid Calculator_section  py-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-12 mb-4">
                    <div className="row Calculator_subProject_List_area">
                        <div className="col-xl-12 col-lg-8 col-md-7 col-12">
                            <div className="Calculator_subProject_List">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur corporis
                                perspiciatis quibusdam aut quidem velit provident iusto autem ex saepe placeat, magni
                                nihil
                                architecto officiis natus esse, voluptas rerum.Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque pariatur corporis perspiciatis quibusdam aut quidem velit
                                provident
                                iusto autem ex saepe placeat, magni nihil architecto officiis natus esse, voluptas
                                rerum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur corporis
                                perspiciatis quibusdam aut quidem velit provident iusto autem ex saepe placeat, magni
                                nihil
                                architecto officiis natus esse, voluptas rerum.Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque pariatur corporis perspiciatis quibusdam aut quidem velit
                                provident
                                iusto autem ex saepe placeat, magni nihil architecto officiis natus esse, voluptas
                                rerum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur corporis
                                perspiciatis quibusdam aut quidem velit provident
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-4 col-md-5 col-12">
                            <div className="Calculator_subProject_buttonList pt-lg-3">
                                <button className="btn subProject_btn">Add main duct</button>
                                <button className="btn subProject_btn">Add Multiple main duct</button>
                                <button className="btn subProject_btn">Add Branch</button>
                                <button className="btn subProject_btn">Add multiple Branches</button>
                                <button className="btn subProject_btn">Remove</button>
                                <button className="btn subProject_btn">Clear all</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-12 mb-4">
                    <div className="row Calculator_projectName_area">
                        <div className="col-lg-6 col-md-12 mb-3">
                            <div className="form-group">
                                <label for="">Project Name</label>
                                <input type="text" name="" readonly id="" className="form-control" placeholder="XYZ"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-3">
                            <div className="form-group">
                                <label for="">Units System</label>
                                <select name="" id="" className="form-select">
                                    <option value="" selected disabled>Select units system</option>
                                    <option value="">Sl</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="col-xl-4 col-lg-6 col-md-12 mx-auto mt-3">
                            <div className="Calculator_AirData_area">
                                <h5 className="Calculator_AirData_heading">Air Data</h5>
                                <form action="" className="mt-4">
                                    <div className="form-group mb-3">
                                        <label for="">Air Data</label>
                                        <input type="text" name="" id="" className="form-control"
                                            placeholder="Ex.- Main Duct"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="">Air Quantity ( L/s )</label>
                                        <input type="text" name="" id="" className="form-control"
                                            placeholder="Ex.- Main Duct"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="">Friction loss ( Pa/m )</label>
                                        <input type="text" name="" id="" className="form-control"
                                            placeholder="Ex.- Main Duct"/>
                                        <div className="slider-wrapper">
                                            <div id="slider1"></div>

                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="">Velocity ( m/s )</label>
                                        <input type="text" name="" id="" className="form-control" placeholder="Ex.- 07"/>
                                        <div className="slider-wrapper">
                                            <div id="slider3"></div>

                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="">Surface Roughness</label>
                                        <select name="" id="" className="form-select" disabled>
                                            <option value="" selected disabled>0.9</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <button className="btn btn_viewDuct">Calculate</button>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 mx-auto mt-3">
                            <div className="Calculator_AirData_area">
                                <h5 className="Calculator_AirData_heading">Duct Size</h5>
                                <form action="" className="mt-4">
                                    <div className="form-group mb-3">
                                        <label for="">Round duct diameter ( mm )</label>
                                        <input type="text" name="" id="" className="form-control" placeholder="" readonly/>
                                    </div>
                                    <p className="fw-bold">Rectangular duct Dimensions ( mm )</p>
                                    <div className="form-group mb-3">
                                        <label for="">Width</label>
                                        <input type="text" name="" id="" className="form-control" placeholder="" readonly/>
                                        <div className="slider-wrapper">
                                            <div id="slider4"></div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="">height</label>
                                        <input type="text" name="" id="" className="form-control" placeholder="Ex.- 500"/>

                                        <div className="slider-wrapper">
                                            <div id="slider2"></div>
                                        </div>
                                    </div>

                                    <button className="btn m-auto btn_lock_Duct mb-3"> <i className="fa-solid fa-lock me-2"></i>
                                        Lock Duct Size</button>

                                    <div className="form-group mb-3">
                                        <label for="">Flow area ( m2 )</label>
                                        <input type="text" name="" id="" className="form-control" placeholder="" readonly/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 mx-auto mt-3">
                            <div className="Calculator_AirData_area">
                                <h5 className="Calculator_AirData_heading">Possible sizing</h5>
                                <div>
                                    <div className="Possible_sizing_heading mb-3 mt-4">
                                        <div>Width ( mm )</div>
                                        <div>X</div>
                                        <div>Height ( mm )</div>
                                    </div>
                                    <div className="Possible_sizing_data mb-2">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 250</div>
                                    </div>
                                    <div className="Possible_sizing_data mb-2">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 300</div>
                                    </div>
                                    <div className="Possible_sizing_data mb-2">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 350</div>
                                    </div>
                                    <div className="Possible_sizing_data mb-2">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 400</div>
                                    </div>
                                    <div className="Possible_sizing_data mb-2">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 500</div>
                                    </div>
                                    <div className="Possible_sizing_data">
                                        <div> </div>
                                        <div>X</div>
                                        <div> 600</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <label for="">Remarks</label>
                                <textarea name="" id="" placeholder="Ex.- Remarks" className="form-control"
                                    rows="5"></textarea>
                            </div>

                            <button className="btn btn_viewDuct">View all ducts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}

export default Calculator
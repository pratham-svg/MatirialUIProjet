import React from 'react'
import about_img from '../../assets/about_img.png'
import mission from '../../assets/Mission_Vision_img.png'

function About() {
    return (
        <div>

            <section className="container-fluid PageTitle_banner_section p-0">
                <div className="container">
                    <h1 className="PageTitle_banner_heading">ABOUT US</h1>
                </div>
            </section>

            <section className="container-fluid about_section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="about_img_area">
                                <img src={about_img} alt="Image" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12">
                            <div className="about_content_area">
                                <p className="about_content_heading_taglin">ABOUT US</p>
                                <h2 className="h2">History of Our Company</h2>
                                <p>Welcome to our website, where innovative solutions meet mechanical engineering expertise. We
                                    are proud to introduce our cutting-edge calculation software designed to revolutionize the
                                    way mechanical ducts are sized. With our powerful tool, engineers can bid farewell to
                                    tedious manual calculations and welcome an era of efficiency, accuracy, and significant time
                                    and cost savings.</p>
                                <p>Our software harnesses the latest advancements in technology, enabling engineers to quickly
                                    and effortlessly determine the optimal size for ducts in any project. Whether you are a
                                    seasoned professional or just starting your engineering journey, our software is designed to
                                    simplify your work and empower you to deliver exceptional results. Join us in embracing the
                                    future of duct sizing calculations and unlock a world of possibilities.</p>
                                <p>Our software harnesses the latest advancements in technology, enabling engineers to quickly
                                    and effortlessly determine the optimal size for ducts in any project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid Mission_Vision_section my-5 pt-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="Mission_Vision_content">
                                <div className="Mission_Vision_heading mb-4">
                                    <h3 className="fw-bolder">Company Mission & Vision</h3>
                                    <p className="w-75 text-muted">We believe our warranties set us apart from our competitors and
                                        show our commitment to
                                        quality work and service.</p>
                                </div>

                                <div className="Mission_Vision_accordion accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header mb-2" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Mission" aria-expanded="true" aria-controls="Mission">
                                                Company Mission
                                            </button>
                                        </h2>
                                        <div id="Mission" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                On the other hand, we denounce with righteous indignation and dislike men who
                                                are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                blinded by desire, that they cannot foresee the pain and.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header mb-2" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Vision" aria-expanded="false" aria-controls="Vision">
                                                Company Vision
                                            </button>
                                        </h2>
                                        <div id="Vision" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                On the other hand, we denounce with righteous indignation and dislike men who
                                                are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                blinded by desire, that they cannot foresee the pain and.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header mb-2" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Valuesssss" aria-expanded="false" aria-controls="Valuesssss">
                                                Company Values
                                            </button>
                                        </h2>
                                        <div id="Valuesssss" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                On the other hand, we denounce with righteous indignation and dislike men who
                                                are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                blinded by desire, that they cannot foresee the pain and.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="Mission_Vision_img">
                                <img src={mission} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About;
import React from 'react'
import whyChooseImg1 from '../../assets/whyChooseImg1.png'
import whyChooseImg2 from '../../assets/whyChooseImg2.png'
import whyChooseImg3 from '../../assets/whyChooseImg3.png'
import step_arrow from '../../assets/step_arrow.png'
import hero_banner from '../../assets/hero_banner.png'
const Home = () => {
  return (
    <div>
    <section className="container-fluid hero_banner_section p-0">
    <div className="hero_banner_img">
        <img src={hero_banner} alt=""/>
    </div>
</section>

<section className="container-fluid why_choose_us_section my-5">
    <div className="container">
        <div className="row">
            <div className="con-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                <div className="why_choose_us_item text-center">
                    <div className="why_choose_us_item_img">
                        <img src={whyChooseImg1} alt=""/>
                    </div>
                    <div className="why_choose_us_item_content mt-3">
                        <h5 className="fw-bold">Certified Dealer</h5 >
                        <p>Whether you are looking for quality service our company has you covered.</p>
                    </div>
                </div>
            </div>
            <div className="con-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                <div className="why_choose_us_item text-center">
                    <div className="why_choose_us_item_img">
                        <img src={whyChooseImg2} alt=""/>
                    </div>
                    <div className="why_choose_us_item_content mt-3">
                        <h5 className="fw-bold">Request A Service Call</h5 >
                        <p>Having problems with your heating or cooling system. Call us 24/7.</p>
                    </div>
                </div>
            </div>
            <div className="con-xl-4 col-lg-4 col-md-6 col-12 mb-4 m-auto">
                <div className="why_choose_us_item text-center">
                    <div className="why_choose_us_item_img">
                        <img src={whyChooseImg3} alt=""/>
                    </div>
                    <div className="why_choose_us_item_content mt-3">
                        <h5 className="fw-bold">Need Financing?</h5>
                        <p>We offer financing through reliable.Financial companies.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="container-fluid Software_video_section">
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="Software_video_content">
                    <h2 className="fw-bolder mb-3">Introducing Our Software</h2>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain and trouble that are bound to ensue.</p>
                    <button className="btn btn_watching_video mt-5" data-bs-toggle="modal"
                        data-bs-target="#watch_video_modal">
                        <i className="fa-regular fa-circle-play me-2"></i> watch the video
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="container-fluid Use_Software_section my-5">
    <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="Use_Software_heading text-center">
                    <h1>How to Use Our Software</h1>
                    <p className="text-muted">On the other hand, we denounce with righteous indignation and dislike men
                        who are so beguiled
                        and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
        </div>
        <div className="Use_Software_steps_area ">
            <div className="Use_Software_step_item mb-2">
                <div className="Use_Software_step_number m-auto">
                    <div className="d-flex align-items-end">
                        <span>1</span>
                        <small>Stap</small>
                    </div>
                </div>
                <div className="Use_Software_step_content m-auto">
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
            <div className="Use_Software_step_arrow mx-3">
                <img src={step_arrow} alt=""/>
            </div>
            <div className="Use_Software_step_item mb-2">
                <div className="Use_Software_step_number m-auto">
                    <div className="d-flex align-items-end">
                        <span>2</span>
                        <small>Stap</small>
                    </div>
                </div>
                <div className="Use_Software_step_content m-auto">
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
            <div className="Use_Software_step_arrow mx-3">
                <img src={step_arrow} alt=""/>
            </div>
            <div className="Use_Software_step_item mb-2">
                <div className="Use_Software_step_number m-auto">
                    <div className="d-flex align-items-end">
                        <span>3</span>
                        <small>Stap</small>
                    </div>
                </div>
                <div className="Use_Software_step_content m-auto">
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="container-fluid Testimonials_section py-5">
    <div className="container">
        <div className="row mb-4">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="Testimonials_section_heading text-center">
                    <h1>Customer Testimonials</h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-8 col-lg-9 col-md-12 m-auto">
                <div className="Testimonials_contect_area text-center py-4">
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain and trouble that are bound to ensue.</p>
                    <h4 className="mt-4 fw-bold">Wilson Trayer,</h4>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home

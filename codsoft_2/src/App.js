import logo from './logo.svg';
import React from 'react';
import './App.css';



function App() {
  return (
    <div className='App'>
      <div className="container-xxl bg-white p-0">
          {/* <!-- Spinner Start --> */}
          <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" style={{width: '3rem', height:'3rem'}} role="status">
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
          {/* <!-- Spinner End --> */}

          {/* <!-- Navbar Start --> */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
              <a href="public\index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                  <h1 className="m-0 text-primary">JOBify</h1>
              </a>
              <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-4 p-lg-0">
                      <a href="public\index.html" className="nav-item nav-link active">Home</a>
                      <a href="public\about.html" className="nav-item nav-link">About</a>
                      <div className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
                          <div className="dropdown-menu rounded-0 m-0">
                              <a href="public\job-list.html" className="dropdown-item">Job List</a>
                              <a href="public\job-detail.html" className="dropdown-item">Job Detail</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dashboard</a>
                          <div className="dropdown-menu rounded-0 m-0">
                              <a href="public\dashboard-admin.html" className="dropdown-item">Admin</a>
                              <a href="public\dashboard-user.html" className="dropdown-item">User</a>
                          </div>
                      </div>
                      <a href="public\contact.html" className="nav-item nav-link">Contact</a>
                  </div>
                  <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i className="fa fa-arrow-right ms-3"></i></a>
              </div>
          </nav>
          {/* <!-- Navbar End --> */}

          {/* <!-- Carousel Start --> */}
          <div className="container-fluid p-0">
              <div className="owl-carousel header-carousel position-relative">
                  <div className="owl-carousel-item position-relative">
                      <img className="img-fluid" src="C:\Users\91929\jobportal\public\img\carousel-1.jpg" alt="" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(43, 57, 64, .5)'}}>
                          <div className="container">
                              <div className="row justify-content-start">
                                  <div className="col-10 col-lg-8">
                                      <h1 className="display-3 text-white animated slideInDown mb-4">Unlock Your Career Potential</h1>
                                      <p className="fs-5 fw-medium text-white mb-4 pb-2">Connect with talented professionals with a wide range of exciting employment opportunities. Find, apply, and succeed in your desired career path with JOBify's user-friendly platform and extensive job listings.</p>
                                      <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

          {/* <!-- Search Start --> */}
          <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
              <div className="container">
                  <div className="row g-2">
                      <div className="col-md-10">
                          <div className="row g-2">
                              <div className="col-md-4">
                                  <input type="text" className="form-control border-0" placeholder="Keyword" />
                              </div>
                              <div className="col-md-4">
                                  <select className="form-select border-0">
                                      <option selected>Category</option>
                                      <option value="1">Category 1</option>
                                      <option value="2">Category 2</option>
                                      <option value="3">Category 3</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <select className="form-select border-0">
                                      <option selected>Location</option>
                                      <option value="1">Location 1</option>
                                      <option value="2">Location 2</option>
                                      <option value="3">Location 3</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <button className="btn btn-dark border-0 w-100">Search</button>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Search End --> */}

          {/* <!-- About Start --> */}
          <div className="container-xxl py-5">
              <div className="container">
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                          <div className="row g-0 about-bg rounded overflow-hidden">
                              <div className="col-6 text-start">
                                  <img className="img-fluid w-300" src="C:\Users\91929\jobportal\public\img\about-1.jpg" style={{height: '100%'}} />
                              </div>
                              <div className="col-6 text-start">
                                  <img className="img-fluid" src="C:\Users\91929\jobportal\public\img\about-2.jpg" />
                              </div>
                              <div className="col-6 text-end">
                                  <img className="img-fluid" src="C:\Users\91929\jobportal\public\img\about-3.jpg" style={{height: '100%'}} />
                              </div>
                              <div className="col-6 text-end">
                                  <img className="img-fluid w-100" src="C:\Users\91929\jobportal\public\img\about-4.jpg" />
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                          <h1 className="mb-4">About JOBify</h1>
                          <p className="mb-4">At JOBify, we are passionate about connecting individuals with their dream careers and helping businesses find the perfect candidates. Our mission is to facilitate the job search process, making it easier, more efficient, and enjoyable for both job seekers and employers.</p>
                          <p><i className="fa fa-check text-primary me-3"></i>Extensive Network</p>
                          <p><i className="fa fa-check text-primary me-3"></i>Industry Expertise</p>
                          <p><i className="fa fa-check text-primary me-3"></i>Continuous Innovation</p>
                          <p><i className="fa fa-check text-primary me-3"></i>User-Focused Approach</p>
                          <p><i className="fa fa-check text-primary me-3"></i>Community Building</p>
                          <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- About End --> */}

          {/* <!-- Jobs Start --> */}
          <div className="container-xxl py-5">
              <div className="container">
                  <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                  <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                      <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                          <li className="nav-item">
                              <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                  <h6 className="mt-n1 mb-0">Featured</h6>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                  <h6 className="mt-n1 mb-0">Full Time</h6>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                  <h6 className="mt-n1 mb-0">Part Time</h6>
                              </a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div id="tab-1" className="tab-pane fade show p-0 active">
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/soft-eng.png" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Software Engineer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Pune, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>

                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 11 Dec, 2023</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/marketing-manager.png" alt="" style={{width: '80px', height: '80px' }} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Marketing Manager</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Chennai, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2023</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/prod-des.png" alt="" style={{width: '80px' , height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Product Designer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Chennai, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2024</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/creative-dir.png" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Creative Director</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Bangalore, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 15 Jan, 2024</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/wp-dev.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Wordpress Developer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Bangalore, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 11 Dec, 2023</small>
                                      </div>
                                  </div>
                              </div>
                              <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                          </div>
                          <div id="tab-2" className="tab-pane fade show p-0">
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Software Engineer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Marketing Manager</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Product Designer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Creative Director</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Wordpress Developer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                          </div>
                          <div id="tab-3" className="tab-pane fade show p-0">
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Software Engineer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Marketing Manager</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Product Designer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Creative Director</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <div className="job-item p-4 mb-4">
                                  <div className="row g-4">
                                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                          <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}} />
                                          <div className="text-start ps-4">
                                              <h5 className="mb-3">Wordpress Developer</h5>
                                              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rewa, INDIA</span>
                                              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                          <div className="d-flex mb-3">
                                              <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                              <a className="btn btn-primary" href="">Apply Now</a>
                                          </div>
                                          <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                      </div>
                                  </div>
                              </div>
                              <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Jobs End --> */}

  

          {/* <!-- Back to Top --> */}
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>

    </div>
    </div>
  </div>
  </div>
  );
}

export default App ;

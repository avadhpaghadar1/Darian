// import "../Vendors/js/carousal";
// const Demo = () => {
//   return (
//     <div>
//       {/* Spinner Start  */}
//       <div
//         id="spinner"
//         className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
//       >
//         <div
//           className="spinner-border text-primary"
//           style={{ width: "3rem", height: "3rem" }}
//           role="status"
//         >
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//       {/* Spinner End  */}

//       {/* Navbar & Hero Start */}
//       <div className="container-fluid position-relative p-0">
//         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
//           <a href="" className="navbar-brand p-0">
//             {/* <h1 className="text-primary">
//               <i className="fas fa-hand-holding-water me-3"></i>Acuas
//             </h1> */}
//             <img src="../Vendors/image/logo.png" alt="Logo" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="fa fa-bars"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-0">
//               <a href="index.html" className="nav-item nav-link active">
//                 Home
//               </a>
//               <a href="about.html" className="nav-item nav-link">
//                 About
//               </a>
//               <a href="service.html" className="nav-item nav-link">
//                 Service
//               </a>
//               <a href="blog.html" className="nav-item nav-link">
//                 Blog
//               </a>
//               <div className="nav-item dropdown">
//                 <a
//                   href="#"
//                   className="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                 >
//                   Pages
//                 </a>
//                 <div className="dropdown-menu m-0">
//                   <a href="feature.html" className="dropdown-item">
//                     Our Feature
//                   </a>
//                   <a href="product.html" className="dropdown-item">
//                     Our Product
//                   </a>
//                   <a href="team.html" className="dropdown-item">
//                     Our Team
//                   </a>
//                   <a href="testimonial.html" className="dropdown-item">
//                     Testimonial
//                   </a>
//                   <a href="404.html" className="dropdown-item">
//                     404 Page
//                   </a>
//                 </div>
//               </div>
//               <a href="contact.html" className="nav-item nav-link">
//                 Contact
//               </a>
//             </div>
//             <div className="d-none d-xl-flex me-3">
//               <div className="d-flex flex-column pe-3 border-end border-primary">
//                 <span className="text-body">Get Free Delivery</span>
//                 <a href="tel:+4733378901">
//                   <span className="text-primary">Free: + 0123 456 7890</span>
//                 </a>
//               </div>
//             </div>
//             <button
//               className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle me-3"
//               data-bs-toggle="modal"
//               data-bs-target="#searchModal"
//             >
//               <i className="fas fa-search"></i>
//             </button>
//             <a
//               href=""
//               className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4"
//             >
//               Order Now
//             </a>
//           </div>
//         </nav>

//         {/* Carousel Start */}
//         <div className="carousel-header">
//           <div
//             id="carouselId"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <ol className="carousel-indicators">
//               <li
//                 data-bs-target="#carouselId"
//                 data-bs-slide-to="0"
//                 className="active"
//               ></li>
//               <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
//               <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner" role="listbox">
//               <div className="carousel-item active">
//                 <img
//                   src="../Vendors/image/carousel-1.jpg"
//                   className="img-fluid w-100"
//                   alt="image"
//                 />
//                 <div className="carousel-caption-1">
//                   <div
//                     className="carousel-caption-1-content"
//                     style={{ maxWidth: "900px" }}
//                   >
//                     <h4
//                       className="text-white text-uppercase fw-bold mb-4 fadeInLeft animated"
//                       data-animation="fadeInLeft"
//                       data-delay="1s"
//                       style={{ animationDelay: "1s", letterSpacing: "3px" }}
//                     >
//                       Importance life
//                     </h4>
//                     <h1
//                       className="display-2 text-capitalize text-white mb-4 fadeInLeft animated"
//                       data-animation="fadeInLeft"
//                       data-delay="1.3s"
//                       style={{ animationDelay: "1.3s" }}
//                     >
//                       Always Want Safe Water For Healthy Life
//                     </h1>

//                     <p
//                       className="mb-5 fs-5 text-white fadeInLeft animated"
//                       data-animation="fadeInLeft"
//                       data-delay="1.5s"
//                       style={{ animationDelay: "1.5s" }}
//                     >
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s,
//                     </p>
//                     <div
//                       className="carousel-caption-1-content-btn fadeInLeft animated"
//                       data-animation="fadeInLeft"
//                       data-delay="1.7s"
//                       style={{ animationDelay: "1.7s" }}
//                     >
//                       <a
//                         className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2"
//                         href="#"
//                       >
//                         Order Now
//                       </a>
//                       <a
//                         className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2"
//                         href="#"
//                       >
//                         Free Estimate
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src="../Vendors/image/carousel-2.jpg"
//                   className="img-fluid w-100"
//                   alt="image"
//                 />
//                 <div className="carousel-caption-2">
//                   <div
//                     className="carousel-caption-2-content"
//                     style={{ maxWidth: "900px" }}
//                   >
//                     <h4
//                       className="text-white text-uppercase fw-bold mb-4 fadeInRight animated"
//                       data-animation="fadeInRight"
//                       data-delay="1s"
//                       style={{ animationDelay: "1s", letterSpacing: "3px" }}
//                     >
//                       Importance life
//                     </h4>
//                     <h1
//                       className="display-2 text-capitalize text-white mb-4 fadeInRight animated"
//                       data-animation="fadeInRight"
//                       data-delay="1.3s"
//                       style={{ animationDelay: "1.3s" }}
//                     >
//                       Always Want Safe Water For Healthy Life
//                     </h1>
//                     <p
//                       className="mb-5 fs-5 text-white fadeInRight animated"
//                       data-animation="fadeInRight"
//                       data-delay="1.5s"
//                       style={{ animationDelay: "1.5s" }}
//                     >
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s,
//                     </p>
//                     <div
//                       className="carousel-caption-2-content-btn fadeInRight animated"
//                       data-animation="fadeInRight"
//                       data-delay="1.7s"
//                       style={{ animationDelay: "1.7s" }}
//                     >
//                       <a
//                         className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2"
//                         href="#"
//                       >
//                         Order Now
//                       </a>
//                       <a
//                         className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2"
//                         href="#"
//                       >
//                         Free Estimate
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselId"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon btn btn-primary fadeInLeft animated"
//                 aria-hidden="true"
//                 data-animation="fadeInLeft"
//                 data-delay="1.1s"
//                 style={{ animationDelay: "1.3s" }}
//               >
//                 <i className="fa fa-angle-left fa-3x"></i>
//               </span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselId"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon btn btn-primary fadeInRight animated"
//                 aria-hidden="true"
//                 data-animation="fadeInLeft"
//                 data-delay="1.1s"
//                 style={{ animationDelay: "1.3s" }}
//               >
//                 <i className="fa fa-angle-right fa-3x"></i>
//               </span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//         {/* Carousel End */}
//       </div>
//       {/* Navbar & Hero End */}

//       {/* Modal Search Start */}
//       <div
//         className="modal fade"
//         id="searchModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-fullscreen">
//           <div className="modal-content rounded-0">
//             <div className="modal-header">
//               <h4 className="modal-title mb-0" id="exampleModalLabel">
//                 Search by keyword
//               </h4>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body d-flex align-items-center">
//               <div className="input-group w-75 mx-auto d-flex">
//                 <input
//                   type="search"
//                   className="form-control p-3"
//                   placeholder="keywords"
//                   aria-describedby="search-icon-1"
//                 />
//                 <span
//                   id="search-icon-1"
//                   className="input-group-text btn border p-3"
//                 >
//                   <i className="fa fa-search text-white"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal Search End */}

//       {/* feature Start */}
//       <div className="container-fluid feature bg-light py-5">
//         <div className="container py-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Our Feature</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               A Trusted Name In Bottled Water Industry
//             </h1>
//           </div>
//           <div className="row g-4">
//             <div
//               className=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="feature-item p-4">
//                 <div className="feature-icon mb-3">
//                   <i className="fas fa-hand-holding-water text-white fa-3x"></i>
//                 </div>
//                 <a href="#" className="h4 mb-3">
//                   Quality Check
//                 </a>
//                 <p className="mb-3">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Libero repellat deleniti necessitatibus
//                 </p>
//                 <a href="#" className="btn text-secondary">
//                   Read More <i className="fa fa-angle-right"></i>
//                 </a>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="feature-item p-4">
//                 <div className="feature-icon mb-3">
//                   <i className="fas fa-filter text-white fa-3x"></i>
//                 </div>
//                 <a href="#" className="h4 mb-3">
//                   5 Steps Filtration
//                 </a>
//                 <p className="mb-3">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Libero repellat deleniti necessitatibus
//                 </p>
//                 <a href="#" className="btn text-secondary">
//                   Read More <i className="fa fa-angle-right"></i>
//                 </a>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.6s"
//             >
//               <div className="feature-item p-4">
//                 <div className="feature-icon mb-3">
//                   <i className="fas fa-recycle text-white fa-3x"></i>
//                 </div>
//                 <a href="#" className="h4 mb-3">
//                   Composition
//                 </a>
//                 <p className="mb-3">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Libero repellat deleniti necessitatibus
//                 </p>
//                 <a href="#" className="btn text-secondary">
//                   Read More <i className="fa fa-angle-right"></i>
//                 </a>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.8s"
//             >
//               <div className="feature-item p-4">
//                 <div className="feature-icon mb-3">
//                   <i className="fas fa-microscope text-white fa-3x"></i>
//                 </div>
//                 <a href="#" className="h4 mb-3">
//                   Lab Control
//                 </a>
//                 <p className="mb-3">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Libero repellat deleniti necessitatibus
//                 </p>
//                 <a href="#" className="btn text-secondary">
//                   Read More <i className="fa fa-angle-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* feature End */}

//       {/* About Start */}
//       <div className="container-fluid about overflow-hidden py-5">
//         <div className="container py-5">
//           <div className="row g-5">
//             <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
//               <div className="about-img rounded h-100">
//                 <img
//                   src="../Vendors/image/about.jpg"
//                   className="img-fluid rounded h-100 w-100"
//                   style={{ objectFit: "cover" }}
//                   alt=""
//                 />

//                 <div className="about-exp">
//                   <span>20 Years Experiance</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
//               <div className="about-item">
//                 <h4 className="text-primary text-uppercase">About Us</h4>
//                 <h1 className="display-3 mb-3">
//                   We Deliver The Quality Water.
//                 </h1>
//                 <p className="mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Harum quidem quas totam nostrum! Maxime rerum voluptatem sed,
//                   facilis unde a aperiam nulla voluptatibus excepturi ipsam
//                   iusto consequuntur
//                 </p>
//                 <div className="bg-light rounded p-4 mb-4">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="d-flex">
//                         <div className="pe-4">
//                           <div
//                             className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
//                             style={{ width: "80px", height: "80px" }}
//                           >
//                             <i className="fas fa-tint text-white fa-2x"></i>
//                           </div>
//                         </div>
//                         <div className="">
//                           <a href="#" className="h4 d-inline-block mb-3">
//                             Satisfied Customer
//                           </a>
//                           <p className="mb-0">
//                             Lorem, ipsum dolor sit amet consectetur adipisicing
//                             elit. Quas provident maiores quisquam.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-light rounded p-4 mb-4">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="d-flex">
//                         <div className="pe-4">
//                           <div
//                             className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
//                             style={{ width: "80px", height: "80px" }}
//                           >
//                             <i className="fas fa-faucet text-white fa-2x"></i>
//                           </div>
//                         </div>
//                         <div className="">
//                           <a href="#" className="h4 d-inline-block mb-3">
//                             Standard Product
//                           </a>
//                           <p className="mb-0">
//                             Lorem, ipsum dolor sit amet consectetur adipisicing
//                             elit. Quas provident maiores quisquam.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <a
//                   href="#"
//                   className="btn btn-secondary rounded-pill py-3 px-5"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* About End */}

//       {/* Fact Counter */}
//       <div className="container-fluid counter py-5">
//         <div className="container py-5">
//           <div className="row g-5">
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="counter-item">
//                 <div className="counter-item-icon mx-auto">
//                   <i className="fas fa-thumbs-up fa-3x text-white"></i>
//                 </div>
//                 <h4 className="text-white my-4">Happy Clients</h4>
//                 <div className="counter-counting">
//                   <span
//                     className="text-white fs-2 fw-bold"
//                     data-toggle="counter-up"
//                   >
//                     456
//                   </span>
//                   <span className="h1 fw-bold text-white">+</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="counter-item">
//                 <div className="counter-item-icon mx-auto">
//                   <i className="fas fa-truck fa-3x text-white"></i>
//                 </div>
//                 <h4 className="text-white my-4">Transport</h4>
//                 <div className="counter-counting">
//                   <span
//                     className="text-white fs-2 fw-bold"
//                     data-toggle="counter-up"
//                   >
//                     513
//                   </span>
//                   <span className="h1 fw-bold text-white">+</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.6s"
//             >
//               <div className="counter-item">
//                 <div className="counter-item-icon mx-auto">
//                   <i className="fas fa-users fa-3x text-white"></i>
//                 </div>
//                 <h4 className="text-white my-4">Employees</h4>
//                 <div className="counter-counting">
//                   <span
//                     className="text-white fs-2 fw-bold"
//                     data-toggle="counter-up"
//                   >
//                     53
//                   </span>
//                   <span className="h1 fw-bold text-white">+</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.8s"
//             >
//               <div className="counter-item">
//                 <div className="counter-item-icon mx-auto">
//                   <i className="fas fa-heart fa-3x text-white"></i>
//                 </div>
//                 <h4 className="text-white my-4">Years Experiance</h4>
//                 <div className="counter-counting">
//                   <span
//                     className="text-white fs-2 fw-bold"
//                     data-toggle="counter-up"
//                   >
//                     17
//                   </span>
//                   <span className="h1 fw-bold text-white">+</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Fact Counter */}

//       {/* Service Start */}
//       <div className="container-fluid service bg-light overflow-hidden py-5">
//         <div className="container py-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Our Service</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               Protect Your Family with Best Water
//             </h1>
//           </div>
//           <div className="row gx-0 gy-4 align-items-center">
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInLeft"
//               data-wow-delay="0.2s"
//             >
//               <div className="service-item rounded p-4 mb-4">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="service-content text-end">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Residential Waters
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                       <div className="ps-4">
//                         <div className="service-btn">
//                           <i className="fas fa-hand-holding-water text-white fa-2x"></i>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="service-item rounded p-4 mb-4">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="service-content text-end">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Commercial Waters
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                       <div className="ps-4">
//                         <div className="service-btn">
//                           <i className="fas fa-dumpster-fire text-white fa-2x"></i>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="service-item rounded p-4 mb-0">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="service-content text-end">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Filtration Plants
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                       <div className="ps-4">
//                         <div className="service-btn">
//                           <i className="fas fa-filter text-white fa-2x"></i>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.3s"
//             >
//               <div className="bg-transparent">
//                 <img src="../Vendors/image/water.png" className="img-fluid w-100" alt="" />
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInRight"
//               data-wow-delay="0.2s"
//             >
//               <div className="service-item rounded p-4 mb-4">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="pe-4">
//                         <div className="service-btn">
//                           <i className="fas fa-assistive-listening-systems text-white fa-2x"></i>
//                         </div>
//                       </div>
//                       <div className="service-content">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Water Softening
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="service-item rounded p-4 mb-4">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="pe-4">
//                         <div className="service-btn">
//                           <i className="fas fa-recycle text-white fa-2x"></i>
//                         </div>
//                       </div>
//                       <div className="service-content">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Market Research
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="service-item rounded p-4 mb-0">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="d-flex">
//                       <div className="pe-4">
//                         <div className="service-btn">
//                           <i className="fas fa-project-diagram text-white fa-2x"></i>
//                         </div>
//                       </div>
//                       <div className="service-content">
//                         <a href="#" className="h4 d-inline-block mb-3">
//                           Project Planning
//                         </a>
//                         <p className="mb-0">
//                           Lorem, ipsum dolor sit amet consectetur adipisicing
//                           elit. Quas provident maiores quisquam.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Service End */}

//       {/* Products Start */}
//       <div className="container-fluid product py-5">
//         <div className="container py-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Our Products</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               We Deliver Best Quality Bottle Packs.
//             </h1>
//           </div>
//           <div className="row g-4 justify-content-center">
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="product-item">
//                 <img
//                   src="img/product-3.png"
//                   className="img-fluid w-100 rounded-top"
//                   alt="image"
//                 />
//                 <div className="product-content bg-light text-center rounded-bottom p-4">
//                   <p>2L 1 Bottle</p>
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     Mineral Water Bottle
//                   </a>
//                   <p className="fs-4 text-primary mb-3">$35:00</p>
//                   <a
//                     href="#"
//                     className="btn btn-secondary rounded-pill py-2 px-4"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="product-item">
//                 <img
//                   src="img/product-2.png"
//                   className="img-fluid w-100 rounded-top"
//                   alt="image"
//                 />
//                 <div className="product-content bg-light text-center rounded-bottom p-4">
//                   <p>4L 2 Bottles</p>
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     RO Water Bottle
//                   </a>
//                   <p className="fs-4 text-primary mb-3">$70:00</p>
//                   <a
//                     href="#"
//                     className="btn btn-secondary rounded-pill py-2 px-4"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.6s"
//             >
//               <div className="product-item">
//                 <img
//                   src="img/product-1.png"
//                   className="img-fluid w-100 rounded-top"
//                   alt="image"
//                 />
//                 <div className="product-content bg-light text-center rounded-bottom p-4">
//                   <p>6L 3 Bottles</p>
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     UV Water Bottle
//                   </a>
//                   <p className="fs-4 text-primary mb-3">$100:00</p>
//                   <a
//                     href="#"
//                     className="btn btn-secondary rounded-pill py-2 px-4"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Products End  */}

//       {/* Blog Start */}
//       <div className="container-fluid blog pb-5">
//         <div className="container pb-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Our Blog</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               Latest Blog & News
//             </h1>
//           </div>
//           <div className="row g-4 justify-content-center">
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="blog-item">
//                 <div className="blog-img">
//                   <img
//                     src="img/blog-1.jpg"
//                     className="img-fluid rounded-top w-100"
//                     alt=""
//                   />
//                   <div className="blog-date px-4 py-2">
//                     <i className="fa fa-calendar-alt me-1"></i> Jan 12 2025
//                   </div>
//                 </div>
//                 <div className="blog-content rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Unde
//                   </a>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Vel, officiis?
//                   </p>
//                   <a href="#" className="fw-bold text-secondary">
//                     Read More <i className="fa fa-angle-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="blog-item">
//                 <div className="blog-img">
//                   <img
//                     src="img/blog-2.jpg"
//                     className="img-fluid rounded-top w-100"
//                     alt=""
//                   />
//                   <div className="blog-date px-4 py-2">
//                     <i className="fa fa-calendar-alt me-1"></i> Jan 12 2025
//                   </div>
//                 </div>
//                 <div className="blog-content rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Unde
//                   </a>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Vel, officiis?
//                   </p>
//                   <a href="#" className="fw-bold text-secondary">
//                     Read More <i className="fa fa-angle-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-lg-6 col-xl-4 wow fadeInUp"
//               data-wow-delay="0.6s"
//             >
//               <div className="blog-item">
//                 <div className="blog-img">
//                   <img
//                     src="img/blog-3.jpg"
//                     className="img-fluid rounded-top w-100"
//                     alt=""
//                   />
//                   <div className="blog-date px-4 py-2">
//                     <i className="fa fa-calendar-alt me-1"></i> Jan 12 2025
//                   </div>
//                 </div>
//                 <div className="blog-content rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-3">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Unde
//                   </a>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Vel, officiis?
//                   </p>
//                   <a href="#" className="fw-bold text-secondary">
//                     Read More <i className="fa fa-angle-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Blog End */}

//       {/* Team Start */}
//       <div className="container-fluid team pb-5">
//         <div className="container pb-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Our Team</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               What is Really seo & How Can I Use It?
//             </h1>
//           </div>
//           <div className="row g-4">
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="team-item p-4">
//                 <div className="team-inner rounded">
//                   <div className="team-img">
//                     <img
//                       src="img/team-1.jpg"
//                       className="img-fluid rounded-top w-100"
//                       alt="image"
//                     />
//                     <div className="team-share">
//                       <a
//                         className="btn btn-secondary btn-md-square rounded-pill text-white mx-1"
//                         href=""
//                       >
//                         <i className="fas fa-share-alt"></i>
//                       </a>
//                     </div>
//                     <div className="team-icon rounded-pill py-2 px-2">
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill mx-1"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="bg-light rounded-bottom text-center py-4">
//                     <h4 className="mb-3">Hard Branots</h4>
//                     <p className="mb-0">CEO & Founder</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="team-item p-4">
//                 <div className="team-inner rounded">
//                   <div className="team-img">
//                     <img
//                       src="img/team-2.jpg"
//                       className="img-fluid rounded-top w-100"
//                       alt="image"
//                     />
//                     <div className="team-share">
//                       <a
//                         className="btn btn-secondary btn-md-square rounded-pill text-white mx-1"
//                         href=""
//                       >
//                         <i className="fas fa-share-alt"></i>
//                       </a>
//                     </div>
//                     <div className="team-icon rounded-pill py-2 px-2">
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill mx-1"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="bg-light rounded-bottom text-center py-4">
//                     <h4 className="mb-3">Hard Branots</h4>
//                     <p className="mb-0">CEO & Founder</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.6s"
//             >
//               <div className="team-item p-4">
//                 <div className="team-inner rounded">
//                   <div className="team-img">
//                     <img
//                       src="img/team-3.jpg"
//                       className="img-fluid rounded-top w-100"
//                       alt="image"
//                     />
//                     <div className="team-share">
//                       <a
//                         className="btn btn-secondary btn-md-square rounded-pill text-white mx-1"
//                         href=""
//                       >
//                         <i className="fas fa-share-alt"></i>
//                       </a>
//                     </div>
//                     <div className="team-icon rounded-pill py-2 px-2">
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill mx-1"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="bg-light rounded-bottom text-center py-4">
//                     <h4 className="mb-3">Hard Branots</h4>
//                     <p className="mb-0">CEO & Founder</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
//               data-wow-delay="0.8s"
//             >
//               <div className="team-item p-4">
//                 <div className="team-inner rounded">
//                   <div className="team-img">
//                     <img
//                       src="img/team-4.jpg"
//                       className="img-fluid rounded-top w-100"
//                       alt="image"
//                     />
//                     <div className="team-share">
//                       <a
//                         className="btn btn-secondary btn-md-square rounded-pill text-white mx-1"
//                         href=""
//                       >
//                         <i className="fas fa-share-alt"></i>
//                       </a>
//                     </div>
//                     <div className="team-icon rounded-pill py-2 px-2">
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill mx-1"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                       <a
//                         className="btn btn-secondary btn-sm-square rounded-pill me-1"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="bg-light rounded-bottom text-center py-4">
//                     <h4 className="mb-3">Hard Branots</h4>
//                     <p className="mb-0">CEO & Founder</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Team End */}

//       {/* Testimonial Start */}
//       <div className="container-fluid testimonial pb-5">
//         <div className="container pb-5">
//           <div
//             className="text-center mx-auto pb-5 wow fadeInUp"
//             data-wow-delay="0.2s"
//             style={{ maxWidth: "800px" }}
//           >
//             <h4 className="text-uppercase text-primary">Testimonials</h4>
//             <h1 className="display-3 text-capitalize mb-3">
//               Our clients reviews.
//             </h1>
//           </div>
//           <div
//             className="owl-carousel testimonial-carousel wow fadeInUp"
//             data-wow-delay="0.3s"
//           >
//             <div className="testimonial-item text-center p-4">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Incidunt pariatur officiis quis molestias, sit iure sunt
//                 voluptatibus accusantium laboriosam dolore.
//               </p>
//               <div className="d-flex justify-content-center mb-4">
//                 <img
//                   src="img/testimonial-1.jpg"
//                   className="img-fluid border border-4 border-primary"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50px",
//                   }}
//                   alt=""
//                 />
//               </div>
//               <div className="d-block">
//                 <h4 className="text-dark">Client Name</h4>
//                 <p className="m-0 pb-3">Profession</p>
//                 <div className="d-flex justify-content-center text-secondary">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="testimonial-item text-center p-4">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Incidunt pariatur officiis quis molestias, sit iure sunt
//                 voluptatibus accusantium laboriosam dolore.
//               </p>
//               <div className="d-flex justify-content-center mb-4">
//                 <img
//                   src="img/testimonial-2.jpg"
//                   className="img-fluid border border-4 border-primary"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50px",
//                   }}
//                   alt=""
//                 />
//               </div>
//               <div className="d-block">
//                 <h4 className="text-dark">Client Name</h4>
//                 <p className="m-0 pb-3">Profession</p>
//                 <div className="d-flex justify-content-center text-secondary">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="testimonial-item text-center p-4">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Incidunt pariatur officiis quis molestias, sit iure sunt
//                 voluptatibus accusantium laboriosam dolore.
//               </p>
//               <div className="d-flex justify-content-center mb-4">
//                 <img
//                   src="img/testimonial-3.jpg"
//                   className="img-fluid border border-4 border-primary"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50px",
//                   }}
//                   alt=""
//                 />
//               </div>
//               <div className="d-block">
//                 <h4 className="text-dark">Client Name</h4>
//                 <p className="m-0 pb-3">Profession</p>
//                 <div className="d-flex justify-content-center text-secondary">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="testimonial-item text-center p-4">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Incidunt pariatur officiis quis molestias, sit iure sunt
//                 voluptatibus accusantium laboriosam dolore.
//               </p>
//               <div className="d-flex justify-content-center mb-4">
//                 <img
//                   src="img/testimonial-3.jpg"
//                   className="img-fluid border border-4 border-primary"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50px",
//                   }}
//                   alt=""
//                 />
//               </div>
//               <div className="d-block">
//                 <h4 className="text-dark">Client Name</h4>
//                 <p className="m-0 pb-3">Profession</p>
//                 <div className="d-flex justify-content-center text-secondary">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Testimonial End */}

//       {/* Footer Start */}
//       <div
//         className="container-fluid footer py-5 wow fadeIn"
//         data-wow-delay="0.2s"
//       >
//         <div className="container py-5">
//           <div className="row g-5 mb-5 align-items-center">
//             <div className="col-lg-7">
//               <div className="position-relative mx-auto">
//                 <input
//                   className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
//                   type="text"
//                   placeholder="Email address to Subscribe"
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-5">
//               <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
//                 <a
//                   className="btn btn-secondary btn-md-square rounded-circle me-3"
//                   href=""
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   className="btn btn-secondary btn-md-square rounded-circle me-3"
//                   href=""
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a
//                   className="btn btn-secondary btn-md-square rounded-circle me-3"
//                   href=""
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-secondary btn-md-square rounded-circle me-0"
//                   href=""
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="row g-5">
//             <div className="col-md-6 col-lg-6 col-xl-3">
//               <div className="footer-item d-flex flex-column">
//                 <div className="footer-item">
//                   <h3 className="text-white mb-4">
//                     <i className="fas fa-hand-holding-water text-primary me-3"></i>
//                     Acuas
//                   </h3>
//                   <p className="mb-3">
//                     Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
//                     ipsum dolor sit amet, consectetur adipiscing elit
//                     consectetur adipiscing elit.
//                   </p>
//                 </div>
//                 <div className="position-relative">
//                   <input
//                     className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
//                     type="text"
//                     placeholder="Enter your email"
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
//                   >
//                     SignUp
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3">
//               <div className="footer-item d-flex flex-column">
//                 <h4 className="text-white mb-4">About Us</h4>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Why Choose Us
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Free Water Bottles
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Water Dispensers
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Bottled Water
//                   Coolers
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Contact us
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-angle-right me-2"></i> Terms & Conditions
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3">
//               <div className="footer-item d-flex flex-column">
//                 <h4 className="text-white mb-4">Business Hours</h4>
//                 <div className="mb-3">
//                   <h6 className="text-muted mb-0">Mon - Friday:</h6>
//                   <p className="text-white mb-0">09.00 am to 07.00 pm</p>
//                 </div>
//                 <div className="mb-3">
//                   <h6 className="text-muted mb-0">Saturday:</h6>
//                   <p className="text-white mb-0">10.00 am to 05.00 pm</p>
//                 </div>
//                 <div className="mb-3">
//                   <h6 className="text-muted mb-0">Vacation:</h6>
//                   <p className="text-white mb-0">All Sunday is our vacation</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3">
//               <div className="footer-item d-flex flex-column">
//                 <h4 className="text-white mb-4">Contact Info</h4>
//                 <a href="#">
//                   <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New
//                   York, USA
//                 </a>
//                 <a href="mailto:info@example.com">
//                   <i className="fas fa-envelope me-2"></i> info@example.com
//                 </a>
//                 <a href="mailto:info@example.com">
//                   <i className="fas fa-envelope me-2"></i> info@example.com
//                 </a>
//                 <a href="tel:+012 345 67890">
//                   <i className="fas fa-phone me-2"></i> +012 345 67890
//                 </a>
//                 <a href="tel:+012 345 67890" className="mb-3">
//                   <i className="fas fa-print me-2"></i> +012 345 67890
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Footer End */}

//       {/* Copyright Start */}
//       <div className="container-fluid copyright py-4">
//         <div className="container">
//           <div className="row g-4 align-items-center">
//             <div className="col-md-6 text-center text-md-start mb-md-0">
//               <span className="text-body">
//                 <a href="#" className="border-bottom text-white">
//                   <i className="fas fa-copyright text-light me-2"></i>Your Site
//                   Name
//                 </a>
//                 , All right reserved.
//               </span>
//             </div>
//             <div className="col-md-6 text-center text-md-end text-body">
//               Designed By{" "}
//               <a
//                 className="border-bottom text-white"
//                 href="https://htmlcodex.com"
//               >
//                 HTML Codex
//               </a>{" "}
//               Distributed By{" "}
//               <a
//                 className="border-bottom text-white"
//                 href="https://themewagon.com"
//               >
//                 ThemeWagon
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Copyright End */}

//       {/* Back to Top */}
//       <a
//         href="#"
//         className="btn btn-secondary btn-lg-square rounded-circle back-to-top"
//       >
//         <i className="fa fa-arrow-up"></i>
//       </a>

//       {/* avaScript Libraries */}
//       <script src="lib/easing/easing.min.js"></script>
//       <script src="lib/waypoints/waypoints.min.js"></script>
//       <script src="lib/counterup/counterup.min.js"></script>

//       {/* Template Javascript */}
//       <script src="js/main.js"></script>
//     </div>
//   );
// };

// export default Demo;

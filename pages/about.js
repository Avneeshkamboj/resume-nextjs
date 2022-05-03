import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import AboutImg from "../assets/img/me.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "./styles.css";
// import required modules
import { Pagination } from "swiper";
import Testi1 from "../assets/img/testimonials/testimonials-1.jpg"
import Testi2 from "../assets/img/testimonials/testimonials-2.jpg"
import Testi3 from "../assets/img/testimonials/testimonials-3.jpg"
import Testi4 from "../assets/img/testimonials/testimonials-4.jpg"
import Testi5 from "../assets/img/testimonials/testimonials-5.jpg"

const about = () => {
  
  
  
  return (
    <section id="about" className="about">

<div className="about-me container">

  <div className="section-title">
    <h2>About</h2>
    <p>Learn more about me</p>
  </div>

  <div className="row">
    <div className="col-lg-4" data-aos="fade-right" style={{position:'relative'}}>
      <Image src={AboutImg} className="img-fluid" alt="" layout='fill' />
    </div>
    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
      <h3>UI/UX &amp; Graphic Designer</h3>
      <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
          </ul>
        </div>
      </div>
      <p>
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
      </p>
    </div>
  </div>

</div>

<div className="counts container">

  <div className="row">

    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className="bi bi-emoji-smile"></i>
        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
        <p>Happy Clients</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
      <div className="count-box">
        <i className="bi bi-journal-richtext"></i>
        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
        <p>Projects</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div className="count-box">
        <i className="bi bi-headset"></i>
        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">1463</span>
        <p>Hours Of Support</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div className="count-box">
        <i className="bi bi-award"></i>
        <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter">24</span>
        <p>Awards</p>
      </div>
    </div>

  </div>

</div>


<div className="skills container">

  <div className="section-title">
    <h2>Skills</h2>
  </div>

  <div className="row skills-content">

    <div className="col-lg-6">
    
      <div className="progress">
        <span className="skill">HTML <i className="val">100%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">CSS <i className="val">90%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">JavaScript <i className="val">75%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

    <div className="col-lg-6">

      <div className="progress">
        <span className="skill">PHP <i className="val">80%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">Photoshop <i className="val">55%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

  </div>

</div>

<div className="interests container">

  <div className="section-title">
    <h2>Interests</h2>
  </div>

  <div className="row">
    <div className="col-lg-3 col-md-4">
      <div className="icon-box">
        <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
        <h3>Lorem Ipsum</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <i className="ri-bar-chart-box-line" style={{color:"#5578ff"}}></i>
        <h3>Dolor Sitema</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
        <h3>Sed perspiciatis</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
      <div className="icon-box">
        <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
        <h3>Magni Dolores</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
        <h3>Nemo Enim</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
        <h3>Eiusmod Tempor</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
        <h3>Midela Teren</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
        <h3>Pira Neve</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
        <h3>Dirada Pack</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-disc-line" style={{color: "#b20969"}}></i>
        <h3>Moton Ideal</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
        <h3>Verdo Park</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
        <h3>Flavor Nivelanda</h3>
      </div>
    </div>
  </div>

</div>


<div className="testimonials container">

  <div className="section-title">
    <h2>Testimonials</h2>
  </div>
  <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
         <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <Image src={Testi1} className="testimonial-img" alt="" width="90" height="90" />
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
        </div>
        </SwiperSlide>
      <SwiperSlide> 
        <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <Image src={Testi2} className="testimonial-img" alt="" width="90" height="90" />
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <Image src={Testi3} className="testimonial-img" alt="" width="90" height="90" />
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
        </div></SwiperSlide>
      <SwiperSlide>
      <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <Image src={Testi4} className="testimonial-img" alt="" width="90" height="90" />
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
        </div>
      </SwiperSlide>
    </Swiper>
 

</div>

</section>
  )
}

export default about
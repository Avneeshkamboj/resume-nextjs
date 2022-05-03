import React from 'react'

const contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div className="row mt-2">

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-map"></i>
            <h3>My Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div className="social-links">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-envelope"></i>
            <h3>Email Me</h3>
            <p>contact@example.com</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
      </div>

      <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
        <div className="row">
          <div className="col-md-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
          </div>
        </div>
        <div className="form-group mt-3">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section>
  )
}

export default contact
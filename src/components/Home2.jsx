import React from "react";
import '../styles/Home2.css'


const Hero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="hero-title">
              Where <span className="text-danger">Skills</span> <br />
              are Sharpened <span className="text-danger">and</span> <br />
              Code Comes to Life
            </h1>

            <p className="hero-subtitle">
              Unlock your coding potential through interactive challenges,
              real-time feedback, and a supportive community.
            </p>

            <button className="btn btn-primary px-4 py-2 mt-3">
              Get Started
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={personImg}
              alt="Hero Person"
              className="img-fluid hero-person"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

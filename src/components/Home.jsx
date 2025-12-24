import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
import twoImg from "../images/two.png";
import footer from '../images/footer.png'
export default function Home() {
    const navigate = useNavigate()
    const spanColor = {
        color: "#e41f3a"
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <div className='intro mt-1'>
                <div className='intro1'>
                    <h2><span style={spanColor}>Where</span> Skills <br />
                        are Sharpened <span style={spanColor}> and</span> <br />
                        Code Comes to Life</h2>
                    <p>Unlock your coding potential through interactive challenges,real-time <br />
                        feedback,and a supportive community</p>
                    <button
                        className="py-2 px-3"
                        onClick={() => navigate("/signup")}>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='heading mt-5'>
                <h2 className='text-center'><span style={spanColor}>Feature</span> Highlights</h2>
                <div className='features px-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 text-center">
                        <div className="col">
                            <div className="card h-100 custom-card">
                                <div className='fa-icon'>
                                    <i className="fa-regular fa-lightbulb"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Solution</h5>
                                    <h5>Walkthroughs</h5>
                                    <p className="card-text mb-3">See multiple approaches to each coding <br /> challenge</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 custom-card">
                                <div className='fa-icon'>
                                    <i className="fa-regular fa-clock"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Real-Time </h5>
                                    <h5>Feedback</h5>
                                    <p className="card-text mb-3">Get immediate feedback as you code, <br /> along with hints</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 custom-card">
                                <div className='fa-icon'>
                                    <i className="fa-solid fa-book"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Adaptive</h5>
                                    <h5> Learning Paths</h5>
                                    <p className="card-text mb-3">Follow personalized learning paths that <br /> adapt to your skill level and goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img width='100%' src={twoImg} alt="banner" />
            </div>
            <div>
                <h2 className='text-center'><span style={spanColor}>Built for</span> Every one</h2>
                <div className="container my-5">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="position-relative overlay-card">
                                <img src='https://thumbs.dreamstime.com/b/portrait-young-business-woman-modern-startup-office-interior-team-meeting-background-women-94645094.jpg' alt="Professionals" />
                                <div className="overlay-content text-white text-center">
                                    <h5 className="fw-bold mb-3">FOR PROFESSIONALS</h5>
                                    <button
                                        className="py-2 px-3"
                                        onClick={() => navigate("/signup")}>
                                        Get Started
                                    </button>                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="position-relative overlay-card">
                                <img src='https://thumbs.dreamstime.com/b/creative-people-meeting-cafe-portrait-young-friends-sitting-coffee-shop-discussing-70779786.jpg' alt="Students" />
                                <div className="overlay-content text-white text-center">
                                    <h5 className="fw-bold mb-3">FOR STUDENTS</h5>
                                    <button
                                        className="py-2 px-3"
                                        onClick={() => navigate("/signup")}>
                                        Get Started
                                    </button>                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='works'>
                <div className='conatiner'>
                    <div className="row align-items-center ">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 text-white">
                            <h3 className="fw-bold mb-2 how-it-works">How It Works</h3>
                            <p className="mb-4">
                                Simplify the onboarding process by showing how easy it is to
                                <br />
                                start using CodeArena.
                            </p>
                            <div className="steps">
                                <div className="step-box">
                                    <h5>01 Sign Up</h5>
                                </div>
                                <div className="step-box">
                                    <h5>02 Code and Learn</h5>
                                </div>
                                <div className="step-box">
                                    <h5>03 Understand</h5>
                                </div>
                                <div className="step-box">
                                    <h5>04 Practice</h5>
                                </div>
                                <div className="step-box mb-md-5">
                                    <h5>05 Achieve</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='conatiner subscribe d-flex flex-column justify-content-center align-items-center text-center text-white p-4'>
                <h3>Subscribe for our tips</h3>
                <p>Clearly communicate the benefits of subscribing,such as exclusive <br /> content.</p>
                {
                    <form className='subscribe-input' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your email address' />
                        <button className='btn text-white px-3 py-2'>Subscribe</button>
                    </form>
                }
            </div>
            <footer className="footer py-2 mb-0 text-white ">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Logo/Image */}
                        <div className="col-md-3 text-center text-md-start">
                            <img width="70%" height='70px' src={footer} alt="Logo" className='footer-image' />
                        </div>

                        {/* Navigation Links */}
                        <div className="col-md-6 text-center">
                            <ul className="nav justify-content-center gap-3">
                                <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">About Us</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Prepare</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Dashboard</a></li>
                            </ul>
                        </div>

                        {/* Social Icons */}
                        <div className="col-md-3 text-center text-md-end">
                            <a href="#" className="social-icon me-2"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="social-icon me-2"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social-icon me-2"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#" className="social-icon me-2"><i className="fa-brands fa-youtube"></i></a>
                        </div>

                    </div>

                    <hr className="bg-white" />

                    <div className="row align-items-center">
                        <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">

                        </div>
                        <div className="col-md-6 text-center mb-3 mb-md-0">
                            <ul className="nav justify-content-center justify-content-center gap-3">
                                <li className="nav-item"><a className="nav-link text-white" href="#">Privacy Policy</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Terms of Use</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Legal</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 text-center text-md-end">
                            © 2024 Codegnan Destination. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

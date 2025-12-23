import React from 'react'
import '../styles/Home.css'
export default function Home() {
    const spanColor = {
        color: "#e41f3a"
    }
    return (
        <>
            <div className='intro'>
                <div className='intro1'>
                    <h2><span style={spanColor}>Where</span> Skills <br />
                        are Sharpened <span style={spanColor}> and</span> <br />
                        Code Comes to Life</h2>
                    <p>Unlock your coding potential through interactive challenges,real-time <br />
                        feedback,and a supportive community</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='heading mt-5'>
                <h2 className='text-center'><span style={spanColor}>Feature</span> Highlights</h2>
               <div className='features px-5'>
                 <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 text-center">
                    <div className="col">
                        <div className="card h-100 custom-card">
                           <div className='fa-icon'>
                            <i class="fa-regular fa-lightbulb"></i>
                           </div>
                            <div className="card-body">
                                <h5 className="card-title">Solution <br /> Walkthroughs</h5>
                                <p className="card-text">See multiple approaches to each coding <br /> challenge</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 custom-card">
                           <div className='fa-icon'>
                            <i class="fa-regular fa-clock"></i>
                           </div>
                            <div className="card-body">
                                <h5 className="card-title">Real-Time <br /> Feedback</h5>
                                <p className="card-text">Get immediate feedback as you code, <br /> along with hints</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 custom-card">
                            <div className='fa-icon'>
                                <i class="fa-solid fa-book"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Adaptive <br /> Learning Paths</h5>
                                <p className="card-text">Follow personalized learning paths that <br /> adapt to your skill level and goals</p>
                            </div>
                        </div>
                    </div>

                </div>
               </div>
            </div>
        </>
    )
}

import React from 'react';
import { gsap } from 'gsap'

const Signin = () => {

    gsap.fromTo('div .card', {y:100, opacity:0}, {y:0, opacity:1, stagger:0.1,});

    return (
        <>
                <nav>
                    <div className="nav-wrapper z-depth-0 blue-grey darken-3">
                        <a href="#" className="brand-logo center">j.DevSpace</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</a></li>
                            <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="card-wrapper">
                    <h1>The Squad</h1>
                </div>

                <div className="intro-wrapper">
                <div className="card left z-depth-0 blue-grey lighten-5">
                    <img className="intro-images" src="/images/Aliyah2.jpg" alt="" />
                    <h3>Aliyah</h3>
                    <p><strong>Aliyah Gamble</strong> is a junior developer based in the Atlanta area.</p>
                </div>    
                <div className="card z-depth-0 blue-grey lighten-5">
                    <img className="intro-images" src="/images/shaiah_profile.jpg" alt="" />    
                    <h3>Luke</h3>
                    <p><strong>Luke Brazil</strong> is a junior developer based in the Houston area.</p>
                 </div>
                <div className="card z-depth-0 blue-grey lighten-5">
                    <img className="intro-images" src="/images/shaiah_profile.jpg" alt="" /> 
                    <h3>Shaiah</h3>
                    <p><strong>Shaiah Emigh-doyle</strong> is a junior developer based in the NYC area.</p>
                </div>
                <div className="card right z-depth-0 blue-grey lighten-5">
                    <img className="intro-images" src="/images/tait.JPG" alt="" />
                    <h3>Tait</h3>
                    <p><strong>Tait Loughridge</strong> is a junior developer based in the Houston area.</p>
                </div>
            </div>

        </>
    )
};

export default Signin;
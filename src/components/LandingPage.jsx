
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { gsap } from 'gsap'

//Components
import AboutUs from './AboutUs';
import Navbar from './Navbar';

const LandingPage = ({ users }) => {

    gsap.fromTo('div .card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, });
    
    return (
        <>

            <Route exact path="/">
                <Navbar />

                <div className='intro'>
                    <h1 id="top">Your go to place to study</h1>
                    <p className="intro-para"><strong className="intro-title">j.DevSpace</strong> brings emerging software developers into a supportive and educational environment of tools and resources necessary for career success. This app features four “Dashboard” components: news, flashcards, videos, and jobs. Users can navigate through an informational feed related to the newest developments happening in the coding world, practice interview questions about coding languages and frameworks, watch educational videos, and search for employment in the industry. Come to j.DevSpace to enhance your skills and launch your career!</p>
                </div>
                <div className="intro-wrapper">
                    <div className="row">
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                
                                <a href="#news"><img className="intro-images" src="/images/news.png" alt="" /></a>
                                
                               
                                {/* <p>A place for sharing news and resources about projects, tech, etc!</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <a href="#flashcards"><img className="intro-images" src="/images/flashcards.png" alt="" /></a>
                                
                                {/* <p>Quiz yourself on JS, React, etc!</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <a href="#videos"></a><img className="intro-images" src="/images/video.png" alt="" />
                                
                                {/* <p>Video tutorials and more</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <a href="#jobs"><img className="intro-images" src="/images/jobs.png" alt="" /></a>
                                
                                {/* <p>Job info for junior devs</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-scroll">
                    <div>
                        <div className='descriptions card z-depth-0'>
                            <div className='cardMarg'>
                            <h2 className="bullot" id="news">News</h2>
                            <p className='cardMarg'>

                            The <strong className="topic">News</strong> feature provides updates about latest technologies and developments  within the tech world. This component encourages junior developers to seek out new information and learn different ways that companies may be implementing new technologies. Staying primed to happenings in the coding world and becoming adaptable to new technologies within the field will make for an easy transition during your career. Spending time on this news feed will keep junior developers updated and encourage curiosity about the ever-changing and evolving technology scene.  

                            </p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>
                            </div>
                        </div>
                        <div className='descriptions card z-depth-0'>
                            <h2 className="bullot" id="flashcards">Flashcards</h2>
                            <p className='cardMarg'>The <strong className='topic'>FlashCard</strong> feature helps junior developers strengthen foundational concepts in coding languages and libraries: Python, JavaScript, and React. Critical thinking and problem-solving are important when having technical interviews, reading others code, and debugging. They both help junior developers engage with the why question of a problem before jumping right to the answer. As a junior developer or developer at any stage it is important to have a skill that allows you to analyze your work, others work etc. Using the flash card component allows you the space to do that before rushing into an ineffective or incomplete solution. </p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>
                        </div>
                        <div className='descriptions card z-depth-0'>
                            <h2 className="bullot" id="videos">Videos</h2>
                            <p className='cardMarg'>The <strong className="topic">Video</strong> feature is a space to search live coding tutorials on and videos for any challenge one might be faced with as a junior developer.  Working in software development involves problem-solving, trouble-shooting, and learning, no matter what level of experience one brings to a given project. Success as a junior developer requires humility and resilience when bugs emerge, and the video feature encourages developers to reach out to the wider software engineering community for help. As a dashboard feature within a single app, our video searchbar reduces the amount of time spent clicking between windows and tabs on the browser and streamlines the process of producing functional code. </p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>

                        </div>
                        <div className='descriptions card z-depth-0'>
                            <h2 className="bullot" id="jobs">Jobs</h2>
                            <p className='cardMarg'>The <strong className="topic">Jobs</strong> component  is a space to search software engineering jobs. It provides insight into what  the job market is looking for and what technologies are being used by certain companies. Knowing what your strengths are as a junior developer is critical when applying to a job. Having a clear distinction of what those strengths and weaknesses are will help a junior developer know what companies are the best fit for their needs as a junior developer.. Also, as a junior developer, it is encouraged to have technical skills that can help evolve your career when being onboarded with a new company. Using this feature can help any junior developer understand where they should be investing their time best!</p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/aboutus">
                <AboutUs />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </>
    )
}

export default LandingPage;

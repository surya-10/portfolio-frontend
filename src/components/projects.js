import Base from "./base";
import cake from "./icons/project1.png";
import receipeApp from "./icons/receipe-app.png";
import qr from "./icons/qr-code.png";
import dietapp from "./icons/diet-app.png";
import crud from "./icons/full-stack-crud.png";
import dashboard from "./icons/admin-dashboard.png";
import cali from "./icons/calci.png";
import aiImage from "./icons/ai-image.png";
import bike from "./icons/rental.webp";
import crd from "./icons/crud.png";

function Projects(){
    return (
        <div className="project-div">
            <Base/>
            <div className="skills projects d-flex flex-column justify-content-evenly align-items-center">
            <div className="skill-title project-title">
                    <p className="skill h3 text-white mt-4">PROJECTS</p>
                    <hr id="hr1" /><hr id="hr2" />
             </div>
             <p className="text-white mt-5 skill-list">I have added my full stacks projects below.</p>
             <div className="my-projects">
                <div className="project-1 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={aiImage} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                            <a href="https://superlative-kelpie-d6c149.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>AI Image generator</p></a>
                            <a href="https://github.com/surya-10/dall-e-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <a href="https://github.com/surya-10/dall-e-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small>
                            <small>EXPRESS</small><small>OPENAI</small><small>DALL-E</small></div>
                        </div>
                    </div>
                </div>
                <div className="project-2 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={bike} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                            <a href="https://zippy-mermaid-f891a4.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Bike rental app</p></a>
                            <a href="https://github.com/surya-10/rentall-app-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <a href="https://github.com/surya-10/rentall-app-backend-2.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>STRIPE</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small><small>EXPRESS</small></div>
                        </div>
                    </div>
                </div>
                <div className="project-3 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={crd} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                           <a href="https://fastidious-arithmetic-9a7132.netlify.app" target="_blank"> <p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>CRUD Application</p></a>
                           <a href="https://github.com/surya-10/forgot-password-final-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <a href="https://github.com/surya-10/forgot-password-final-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend Source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small><small>EXPRESS</small></div>

                        </div>
                    </div>
                </div>
                <div className="project-4 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={dietapp} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center align-content-center">
                            <a href="https://food-suugestion-app.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Diet Suggestion App</p></a>
                            <a href="https://github.com/surya-10/capstone-frondend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <a href="https://github.com/surya-10/capstone-backend-trail.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small>
                            <small>EXPRESS</small></div>
                        </div>
                    </div>
                </div>
                {/* <div className="project-5 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={crud} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                            <a href="https://final-full-stack.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>CRUD Application for Student and Mentor</p></a>
                            <a href="https://github.com/surya-10/node-4.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <a href="https://github.com/surya-10/node-3.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small>
                            <small>EXPRESS</small></div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="project-5 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={dashboard} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                            <a href="https://spontaneous-chaja-2ae0a6.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Admin Dashboard</p></a>
                            <a href="https://github.com/surya-10/react-day3-trail.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>CSS</small><small>JAVASCRIPT</small></div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="project-5 bg-white p-3 border pr">
                    <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                        <img src={cali} className="mb-2 border"/>
                        <div className="description d-flex flex-column justify-content-center align-items-center">
                            <a href="https://calcidesign.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Simple Calculator</p></a>
                            <a href="https://github.com/surya-10/calci-final" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a>
                            <div className="tags d-flex flex-wrap"><small>HTML</small><small>CSS</small><small>JAVASCRIPT</small></div>
                        </div>
                    </div>
                </div> */}
             </div>
            </div>
        </div>
    )
}
export default Projects;
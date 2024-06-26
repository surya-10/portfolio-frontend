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
import imdb from "./icons/project-5.png";

function Projects() {
    return (
        <div className="project-div">
            <Base />
            <div className="skills projects d-flex flex-column justify-content-evenly align-items-center">
                <div className="skill-title project-title">
                    <p className="skill h3 text-white mt-4">PROJECTS</p>
                    <hr id="hr1" /><hr id="hr2" />
                </div>
                <p className="text-white mt-5 skill-list">I have added my full stacks projects below.</p>
                <div className="my-projects">
                    <div className="project-1 bg-white p-3 border pr d-flex flex-md-row flex-column gap-2">
                        <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                            <img src={aiImage} className="mb-2 border" />
                            <div className="description d-flex flex-column justify-content-center align-items-center">
                                <a href="https://superlative-kelpie-d6c149.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>AI Image generator</p></a>
                                {/* <a href="https://github.com/surya-10/dall-e-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a> */}
                                {/* <a href="https://github.com/surya-10/dall-e-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a> */}

                            </div>
                        </div>
                        <div className="d-flex flex-column ms-2 flex-wrap me-2">
                            <p className="h4 p-2">AI Image generator</p>
                            <p className="proj-des">Experience the power of AI magic here. You can give life to your imagination by using AI image generator.</p>
                            <div className="src-code d-flex flex-column mb-3">
                                <ul>
                                    <li> <a href="https://github.com/surya-10/dall-e-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a></li>
                                    <li><a href="https://github.com/surya-10/dall-e-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a></li>
                                </ul>
                                <div>
                                    <p className="cred">Demo credential</p>
                                    <div className="d-flex gap-1 flex-lg-row flex-column">
                                    <p className="cred">Email: <b>sp659151@gmail.com</b></p>
                                    <p className="cred">Password:<b className="ms-2">DemoLogin</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small>
                                <small>EXPRESS</small><small>OPENAI</small><small>DALL-E</small></div>

                        </div>
                    </div>
                    <div className="project-2 bg-white p-3 border pr d-flex flex-md-row flex-column flex-md-row-reverse">
                        <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                            <img src={bike} className="mb-2 border" />
                            <div className="description d-flex flex-column justify-content-center align-items-center">
                                <a href="https://zippy-mermaid-f891a4.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Bike rental app</p></a>

                            </div>
                        </div>
                        <div className="d-flex flex-column ms-2 flex-wrap me-2">
                            <p className="h4 p-2">Bike rental app</p>
                            <p className="proj-des">Don't have a bike? No worries! We've got you covered. Rent a bike from us at a very affordable local cost.</p>
                            <div className="src-code d-flex flex-column">
                                <ul>
                                    <li><a href="https://github.com/surya-10/rentall-app-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a></li>
                                    <li> <a href="https://github.com/surya-10/rentall-app-backend-2.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a></li>
                                </ul>
                                <div>
                                    <p className="cred">Demo credential</p>
                                    <div className="d-flex gap-1 flex-lg-row flex-column">
                                    <p className="cred">Email: <b>sp659151@gmail.com</b></p>
                                    <p className="cred">Password:<b className="ms-2">DemoLogin</b></p>
                                    </div>
                                </div>
                                <div className="tags d-flex flex-wrap"><small>REACT</small><small>STRIPE</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small><small>EXPRESS</small></div>

                            </div>
                        </div>
                    </div>
                    <div className="project-3 bg-white p-3 border pr d-flex flex-md-row flex-column">
                        <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                            <img src={crd} className="mb-2 border" />
                            <div className="description d-flex flex-column justify-content-center align-items-center">
                                <a href="https://spontaneous-crepe-f6b6a1.netlify.app" target="_blank"> <p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>CRUD Application</p></a>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-wrap ms-2 me-2">
                            <p className="h4 p-2">CRUD Application</p>
                            <p className="proj-des">Implemented two roles: one is a DB admin, and the other is a student. The admin has access to edit, delete, and
                                update student data, while students can only view their own data and others, with no other permissions allowed.</p>
                            <div className="d-flex flex-column">
                                <ul>
                                    <li><a href="https://github.com/surya-10/forgot-password-final-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a></li>
                                    <li><a href="https://github.com/surya-10/forgot-password-final-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend Source code</p></a></li>
                                </ul>
                                <div>
                                    <p className="cred">Demo credentials</p>
                                    <p className="fs-6">admin Login</p>
                                    <div className="d-flex gap-1 flex-lg-row flex-column">
                                    <p className="cred">Email: <b>sp659151@gmail.com</b></p>
                                    <p className="cred">Password:<b className="ms-2">admin@659Surya</b></p>
                                    </div>
                                    <p className="fs-6">Student Login</p>
                                    <div className="d-flex gap-1 flex-lg-row flex-column">
                                    <p className="cred">Email: <b>sp659151@gmail.com</b></p>
                                    <p className="cred">Password:<b className="ms-2">DemoLogin</b></p>
                                    </div>
                                </div>
                                <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small><small>EXPRESS</small></div>
                            </div>

                        </div>
                    </div>
                    <div className="project-4 bg-white p-3 border pr d-flex flex-md-row flex-column flex-md-row-reverse">
                        <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                            <img src={dietapp} className="mb-2 border" />
                            <div className="description d-flex flex-column justify-content-center align-items-center align-content-center">
                                <a href="https://food-suugestion-app.netlify.app/" target="_blank"><p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>Diet Suggestion App</p></a>
                            </div>
                            
                        </div>
                        <div className="d-flex flex-column ms-2 flex-wrap me-2">
                                <p className="h4 p-2">Diet Suggestion App</p>
                                <p className="proj-des">Welcome to your personalized food companion! With our app, you can calculate your BMI by providing simple details like height, weight, and age. Once your BMI is determined, we offer tailored food suggestions, empowering you to make informed and healthy dietary choices aligned with your specific health and fitness goals.</p>
                                <div className="d-flex flex-column">
                                    <ul>
                                        <li><a href="https://github.com/surya-10/capstone-frondend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a></li>
                                        <li><a href="https://github.com/surya-10/capstone-backend-trail.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend source code</p></a></li>
                                    </ul>
                                    <div>
                                    <p className="cred">Demo credential</p>
                                    <div className="d-flex gap-1 flex-lg-row flex-column">
                                    <p className="cred">Email: <b>sp659151@gmail.com</b></p>
                                    <p className="cred">Password:<b className="ms-2">DemoLogin</b></p>
                                    </div>
                                </div>
                                </div>
                                <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small>
                                    <small>EXPRESS</small></div>
                            </div>
                    </div>
                    <div className="project-5 bg-white p-3 border pr d-flex flex-md-row flex-column">
                        <div className="proj d-flex flex-column justify-content-evenly align-items-center">
                            <img src={imdb} className="mb-2 border" />
                            <div className="description d-flex flex-column justify-content-center align-items-center">
                                <a href="https://friendly-puppy-0c0960.netlify.app/" target="_blank"> <p className="project-name text-center"><i class="fa-solid fa-location-arrow me-2"></i>IMDB Clone</p></a>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-wrap ms-2 me-2">
                            <p className="h4 p-2">IMDB clone</p>
                            <p className="proj-des">Our IMDb Clone application, developed using the MERN stack, provides users with a platform to browse, review, and edit movie information. The app includes comprehensive details about movies, actors, and producers, emulating the functionality of the popular IMDb website.
                            </p>
                            <div className="d-flex flex-column">
                                <ul>
                                    <li><a href="https://github.com/surya-10/imdb-clone-frontend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Frontend source code</p></a></li>
                                    <li><a href="https://github.com/surya-10/imdb-clone-backend.git" target="_blank"><p><i class="fa-brands fa-github me-2"></i>Backend Source code</p></a></li>
                                </ul>
                    
                                <div className="tags d-flex flex-wrap"><small>REACT</small><small>BOOTSTRAP</small><small>MONGODB</small><small>NODE</small><small>EXPRESS</small></div>
                            </div>

                        </div>
                    </div>
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
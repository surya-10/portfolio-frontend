import { useNavigate } from "react-router-dom";
import Base from "./base";
import mern from "./mern.png";

function Home() {
    let navigate = useNavigate();
    return (
        <div className="base-div">
            <Base />
            <div className="content d-flex mt-3 gap-10 justify-content-center flex-column flex-md-row align-items-center align-items-md-start">
                
                <div className="name">
                    <p className="display-6 text-white name text-align-left user-details"><span className="user-title">Full stack WEB DEVELOPER<br/></span><span className="iam text-white">I am</span><br/><span className="user-name mt-2">Suryaprakash</span></p>
                </div>
                <hr id="hr"/>
                <hr id="hr"/>
                <div className="img-div">
                    <img src={mern}/>
                    {/* <p className="display-5 text-white title-text text-center">A full stack <span className="user-title">WEB DEVELOPER</span></p> */}
                </div>
            </div>
            
            <div className="main-content d-flex flex-column justify-content-center align-items-center mt-5">
                <h4 className="mb-3  btn overview mt-3">Overview</h4>
                <p className="text-white">Hi, I am a full stack web developer(MERN). I have good knowledge in both frontend and backend technologies. I am using <span className="little">REACT JS</span> for frontend, <span className="little">NODE JS</span> for server and <span className="little">MONGODB</span> for database. And I have good experience with <span className="text-warning api">REST API</span> endpoints. I have made lots of projects. I have added all my projects in projects section.   </p>
            </div>
            <div className="about-me d-flex justify-content-end me-5 justify-content-md-start">
            <button className="btn about-btn d-flex justify-content-center align-items-center" onClick={()=>navigate("/about")}>More<i class="fa-solid fa-arrow-right arrow ms-2"></i></button>
            </div>
        </div>
    )
}
export default Home;
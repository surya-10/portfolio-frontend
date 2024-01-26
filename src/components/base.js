import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mylogo from "./logo3.png";
import Typewriter from "typewriter-effect";

function Base({name, title, children}){
    let [show, setShow] = useState(false);
    let navigate = useNavigate();

    function hideNav(){
        
        let nav = document.querySelector(".navv");
        if(nav.className=="navv nav-bar1"){
            nav.classList.add("nav-bar");
            nav.classList.remove("nav-bar1");
            // console.log(nav.className)
        }
        else{
            // console.log(nav.className)
            nav.classList.add("nav-bar1");
            nav.classList.remove("nav-bar");
        }
    }

    return (
        <div className="container-fluid">
            <div className="child-div">
                <div className="main-div">
                    <div className="cont d-flex justify-content-between p-3 pb-4 align-items-center">
                        {/* <p className="text-white title display-6">SURYA</p> */}
                        {/* <img src={mylogo} className="my-logo"/> */}
                        <p className="my-logo mt-4"><span>S</span><span>u</span><span>r</span>
                        <span>y</span>
                        <span>a</span>
                        <hr id="hr3"/>
                        </p>
                        
                        <i class="fa-solid fa-bars bar" onClick={hideNav}>
                            <div className="navv nav-bar1">
                                <button className="btn text-dark nav-btn" onClick={()=>navigate("/")}>Home</button>
                                <button className="btn text-dark nav-btn" onClick={()=>navigate("/skills")}>Skills</button>
                                <button className="btn text-dark nav-btn" onClick={()=>navigate("/projects")}>Projects</button>
                                <button className="btn text-dark nav-btn" onClick={()=>navigate("/about")}>About</button>
                            </div>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Base;
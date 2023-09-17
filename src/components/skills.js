import Base from "./base";
import html from "./icons/html.png";
import css from "./icons/css.png";
import js from "./icons/js.png";
import react from "./icons/react.png";
import node from "./icons/node.png";
import exp from "./icons/express.png";
import mongo from "./icons/mongodb.png";
import htmlicon from "./icons/hicon.png";
import db from "./icons/database.png";
import program from "./icons/language.png";
function Skills() {
    return (
        <div className="skills-div">
            <Base />
            <div className="skills d-flex flex-column justify-content-center align-items-center">
                <div className="skill-title">
                    <p className="skill h1 text-white mt-4">SKILLS</p>
                    <hr id="hr1" /><hr id="hr2" />
                </div>
                <p className="text-white mt-5 skill-list">Below is a quick overview of main technical skills.</p>
                <div className="technologies d-flex flex-md-row flex-column flex-wrap align-items-center align-content-center justify-content-center">
                    <div className="frontend d-flex justify-content-center align-items-center flex-column">
                        <img src={htmlicon} className="front-icon"/>
                        <p className="text-white mt-5 h5 mb-3">FRONTEND</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>

                    </div>
                    <div className="backend">
                    <div className="frontend d-flex justify-content-center align-items-center flex-column">
                        <img src={db} className="front-icon"/>
                        <p className="text-white mt-5 h5 mb-3">BACKEND</p>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongodB</li>
                            <li>Mongoose</li>
                            <li>SQL</li>
                        </ul>

                    </div>
                    </div>
                <div className="others">
                    <div className="frontend d-flex justify-content-center align-items-center flex-column">
                    <img src={program} className="front-icon"/>
                        <p className="text-white mt-5 h5 mb-3">PROGRAMMING LANGUAGES</p>
                        <ul>
                            <li>Python</li>
                            <li>Basics of DSA</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>


        </div>
    )
}
export default Skills;
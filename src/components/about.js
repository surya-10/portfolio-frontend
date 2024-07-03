import { useFormik } from "formik";
import Base from "./base";
import * as yup from "yup";
import resume from "./icons/resume.pdf";
import { useState } from "react";

let contactMe = yup.object({
    name:yup.string().required("name is required"),
    email:yup.string().required("enter email"),
    msg:yup.string().required("leave a comment")
})

function About() {
    let givenDate = new Date("2021-06-21");
    let today = new Date();

// Calculate the difference in years and months
    let yearsDiff = today.getFullYear() - givenDate.getFullYear();
    let monthsDiff = today.getMonth() - givenDate.getMonth();

// Adjust for negative months difference
    if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
    }


    let [mailBtn, setMailBtn] = useState("Send");
    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            name:"",
            email:"",
            msg:""
        },
        validationSchema:contactMe,
        onSubmit:(obj)=>{
            
            sendMail(obj);
        }
    })

    async function sendMail(obj){
        setMailBtn("Sending....")
        let result = await fetch("https://portfolio-6yjn.onrender.com/get-data", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let out = await result.json();
        setMailBtn("Send");
        
        values.email="";
        values.msg="";
        values.name="";
        setMailBtn("Send");
    }
    return (
        <div className="about-div">
            <Base />
            <div className="skills projects d-flex flex-column justify-content-evenly align-items-center">
                <div className="skill-title project-title">
                    <p className="skill h3 text-white mt-4">ABOUT ME</p>
                    <hr id="hr1" /><hr id="hr2" />
                </div>
                <div className="about">
                {/* <p className="text-white mt-5 abt">Hi, I am <span className="little">Suryaprakash</span>. I am a full-stack web developer (MERN). I have good knowledge in both frontend and backend technologies. I am using <span className="little">React JS</span> for the frontend, <span className="little">Node JS</span> for the server, and <span className="little">MongoDB</span> for the database. I also have good experience with <span className="text-warning api">REST API</span> endpoints. I have completed four full-stack projects, and I have added those four projects on the projects page. Currently, I am enrolled in a full-stack developer course. I have been working at Infosys for 2.6 years.</p> */}
                <p className="text-white mt-5 abt">
  Hi, I am <span className="little">Suryaprakash</span>, a full-stack web developer specializing in the MERN stack. I have extensive knowledge of both frontend and backend technologies. For the frontend, I utilize <span className="little">React JS</span>, while for server-side development, I rely on <span className="little">Node JS</span>. The database aspect is handled with <span className="little">MongoDB</span>. 

  I also possess considerable experience working with <span className="text-warning api">REST API</span> endpoints. Currently, I'm enrolled in a full-stack developer course to further enhance my skills.

  Having completed four full-stack projects, I've showcased them on the projects page. My professional journey includes {yearsDiff} years and {monthsDiff} months at <span className="little">Infosys</span>.
</p>
                <div className="education mt-5">
                    <p className="little">Education</p>
                    <table>
                        <tr>
                            <th>Degree</th>
                            <td>BE-ECE</td>
                        </tr>
                        <tr>
                            <th>College</th>
                            <td>Sona College of Technology</td>
                        </tr>
                        <tr>
                            <th>Passed out year</th>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>Salem, Tamilnadu, India</td>
                        </tr>
                    </table>
                    
                    
                </div>
                <div className="profiles d-flex flex-column justify-content-center align-items-center mt-4">
                    <p className="text-white prof">Do checkout my profiles.</p>
                    <div>
                    <a href="https://www.linkedin.com/in/suryaprakash-m-357296190/" target="_blank"><i class="fa-brands fa-linkedin-in text-white me-2"></i></a>
                    <a href="https://github.com/surya-10" target="_blank"><i class="fa-brands fa-github text-white ms-2"></i></a>
                    <a href={resume} className="resume" download>RESUME</a>
                    </div>
                </div>

                </div>
                {/* <form onSubmit={handleSubmit}> */}
                <div className="contact-me d-flex flex-column justify-content-center align-items-center">
                    <p className="text-upper contact">Contact me</p>
                   
                    <div className="form-divi">
                    <form onSubmit={handleSubmit}>
                        <div>
                       
                        <div className="form-group d-flex flex-column justify-content-center align-items-center">
                            <label htmlFor="name text-white" className="text-white">Name</label>
                            <input type="text" className="form-control" placeholder="enter your name" id="name"
                            value={values.name}
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.name && errors.name ? <p className="small error-msg">name cannot be empty</p>:""}
                        <div className="form-group d-flex flex-column justify-content-center align-items-center mt-3">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input type="email" className="form-control" placeholder="enter your email" id="email"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.email && errors.email ? <small className="small error-msg text-center">name cannot be empty</small>:""}
                        <div className="form-group d-flex flex-column justify-content-center align-items-center mt-3">
                            <label htmlFor="area" className="text-white">Give feedback</label>
                            <textarea type="email" className="form-control" placeholder="leave a comment..." id="area"
                            value={values.msg}
                            name="msg"
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.msg && errors.msg ? <small className="small error-msg">name cannot be empty</small>:""}

                    </div>
                    <div className="d-flex justify-content-end mt-3">
                    <button className="btn mt-4 bg-danger text-white p-2" type="submit">{mailBtn}</button>
                    </div>
                    </form>
                    
                    </div>
                    
                    
                    
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}
export default About;
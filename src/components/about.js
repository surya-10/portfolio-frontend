import { useFormik } from "formik";
import Base from "./base";
import * as yup from "yup";
import resume from "./icons/resume.pdf";

let contactMe = yup.object({
    name:yup.string().required("name is required"),
    email:yup.string().required("enter email"),
    msg:yup.string().required("leave a comment")
})

function About() {
    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            name:"",
            email:"",
            msg:""
        },
        validationSchema:contactMe,
        onSubmit:(obj)=>{
            console.log(obj)
            sendMail(obj);
        }
    })

    async function sendMail(obj){
        let result = await fetch("https://portfolio-6yjn.onrender.com/get-data", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let out = await result.json();
        if(out.response){
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#area").value = "";
            alert("Thank you for your email !....")
        }
        console.log(out);
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
                <p className="text-white mt-5 abt">Hi, I am <span className="little">Suryaprakash</span>. I am a full stack web developer(MERN). I have good knowledge in both frontend and backend technologies. I am using <span className="little">REACT JS</span> for frontend, <span className="little">NODE JS</span> for server and <span className="little">MONGODB</span> for database. And I have good experience with <span className="text-warning api">REST API</span> endpoints. I have made lots of projects. Currently i am doing full stack developer course. I have been working at Infosys for two years.
                </p>
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
                        {touched.name && errors.name ? <small className="small">name cannot be empty</small>:""}
                        <div className="form-group d-flex flex-column justify-content-center align-items-center mt-3">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input type="email" className="form-control" placeholder="enter your email" id="email"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.email && errors.email ? <small className="small">name cannot be empty</small>:""}
                        <div className="form-group d-flex flex-column justify-content-center align-items-center mt-3">
                            <label htmlFor="area" className="text-white">Give feedback</label>
                            <textarea type="email" className="form-control" placeholder="leave a comment..." id="area"
                            value={values.msg}
                            name="msg"
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.msg && errors.msg ? <small className="small">name cannot be empty</small>:""}

                    </div>
                    <div className="d-flex justify-content-end">
                    <button className="btn mt-4 bg-danger text-white p-2" type="submit">Send Mail</button>
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
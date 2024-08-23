import React from "react";
import './about.css';

const About = () => {
    return (
        <div id="about" className=" about ">
            <div className="big-box">
                <div className="about-me">
                    <h1 className="about-h1">
                        ABOUT ME 👨‍💻
                        <span className="span"></span>
                    </h1>
                    <p className="about-pera">
                        In this section, you'll get to know more about me, my skills, and
                        the tech stack I work with!
                    </p>
                </div>
            
                <div className="big">
                    <div className="first-1 first">
                        <h2 className="cart">
                            Who am I?
                        </h2>
                        <p className="text-pera">
                            I'm a frontend-focused web developer dedicated to crafting
                            captivating user experiences. With a keen eye for design and a
                            passion for coding, I specialize in building and managing the
                            frontend of websites and web applications.
                        </p>
                    </div>

                    <div className="first-2 first">
                        <h2 className="cart">Skills</h2>
                        <div className="head-box">
                            <span className="box-0">
                                HTML
                            </span>
                            <span className="box-0">
                                CSS 
                            </span>
                            <span className="box-0">
                                JavaScript
                            </span>
                            <span className="box-0">
                                React Js
                            </span>
                            <span className="box-0">
                                Next Js
                            </span>
                            
                         
                           
                            <span className="box-0">
                                NodeJs
                            </span>
                           
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
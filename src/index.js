import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css"


//-----------------------------NAVIGATION SECTION---------------------------------------------------
function Navigation() {
    return (
        <div className="nav">
            <img className="homeIcon" src={require('./homeIcon.png')}/>
            <p> | </p>
            <div className="contact">Contact Me</div>
            <p> | </p>
            <div className="career">Career & Education</div>
            <p> | </p>
            <div className="projects">My Projects</div>
            <p> | </p>
            <div className="certs">Tech Certificates</div>
            
        </div>
    ) 
}

//-------------------------------------BODY SECTION-------------------------------------------
function HomePageBody() {
    return (
        <div className="body">

            <div className="pageSection1" id="Section1">
                <div className="panel1">
                    <div className="aboutSection">
                        <div className="aboutPanel">
                                <div className="aboutPin">
                                    <img src={require('./redPin.png')}/>
                                </div>
                                <div className="aboutHeader1">
                                    Hi, i'm
                                </div>
                                <div className="aboutHeader2">
                                    Luyanda Madonsela
                                </div>
                                <div className="aboutHeader3">
                                    A bit about me...
                                </div>
                                <div className="aboutPara">
                                    I love code. I have aspirations to be the finest web application developer I can be. I am particularly interested in the back end and cloud development. I designed this responsive website myself to showcase some of my skills. Feel free to look around...
                                </div>
                        </div>
                    </div>

                    <div className="myPhoto">
                        <div className="photoPanel">

                                <div className="photoPin">
                                    <img src={require('./redPin.png')}/>
                                </div>

                                <div className="insertPhoto">
                                    <div className="photo"></div>
                                </div>

                        </div>
                    </div>   
                </div>

            </div>

        
        
            <div className="pageSection2">

                <div className="panel2">
                    <div className="pin2">
                        <img src={require('./redPin.png')}/>
                    </div>
                    <div className="panelHeader2">
                        My Technical Skills
                    </div>
                    <div className="panelContent2">
                        <div className="panelSection1">
                            <div className="panelSection1Header">
                                I have experience with these technologies:
                            </div>
                            <div className="panelSection1Body">
                                <ul>
                                    <li>Basic UX/UI Design using Figma</li>
                                    <p></p>
                                    <li>Responsive Web Design using React.js</li>
                                    <p></p>
                                    <li>Python Django Framework</li>
                                        <ul>
                                            <li>CRUD Operations with SQLi</li>
                                            <li>Login & Form Validation</li>
                                            <li>Payment Systems</li>
                                            <li>MVC</li>
                                            <li>REST Framework</li>
                                        </ul>
                                    <p></p>
                                    <li>Cloud Development</li>
                                        <ul>
                                            <li>Docker & Kubernetes</li>
                                            <li>AWS Cloud Development</li>
                                        </ul>
                                    <p></p>
                                    <li>Github Repository & Website Deployment</li>
                                </ul>
                            </div>
                        </div>

                        <div className="panelSection2">
                        <img src={require('./middleLine.png')}/>
                        </div>
                        <div className="panelSection3">
                            <div className="panelSection3Header">
                                I hold these certifications:
                            </div>
                            <div className="panelSection3Body" id="Section3Body">
                                <ul>
                                    <li>HTML5 Foundations</li>
                                    <li>CSS3 Foundations</li>
                                    <li>JavaScript Foundations</li>
                                    <li>PHP Foundations</li>
                                    <li>Python Foundations</li>
                                </ul>
                                <p className="clickHere1">Click here to check out my Certificates...</p>
                            </div>
                            <div className="badges">
                                <div>
                                    <img src={require('./threeBadges.png')}/>
                                </div>
                                <div>
                                    <img src={require('./phpBadge.png')}/>
                                </div>
                                <div>
                                    <img src={require('./pythonBadge.png')}/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>


            <div className="pageSection3">

                <div className="panel3">
                    <div className="pin3">
                        <img src={require('./redPin.png')}/>
                    </div>
                    <div className="panelHeader3">
                        My Portfolio Projects
                    </div>
                    <div className="panelContent3">
                        <div className="panelSection1">
                            <div className="panelSection1Header">
                                Recently Completed:
                            </div>
                            <div className="panelSection1Body" id="Section1Body">
                                <ul>
                                    <li>This Website</li>
                                    <p>~ I used React.js on the front end, Python Django for the back end operations.</p>
                                    <li>Loading...</li>
                                </ul>
                            </div>
                            <p className="clickHere2">Click here to check out my Github...</p>
                            <p className="clickHere3">Click here to check out my projects...</p>
                        </div>
                        <div className="panelSection2">
                            <img src={require('./middleLine.png')}/>
                        </div>
                        <div className="panelSection3">
                            <div className="panelSection3Header">
                                Under Construction:
                            </div>
                            <div className="panelSection3Body">
                                <ul>
                                    <li>Matric Past Paper Repository</li>
                                    <li>Online Contact Book</li>
                                    <li>To-do List Web Application</li>
                                    <li>Appointment Management Web Application</li>
                                    <li>Chat Room App</li>
                                    <li>Property Website</li>
                                    <li>Ecommerce Website</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            
            </div>

            <div className="pageSection4">

                <div className="panel4">
                    <div className="pin4">
                        <img src={require('./redPin.png')}/>
                    </div>
                    <div className="panelHeader4">
                        Next Steps In My Coding Journey
                    </div>
                    <div className="panelContent4">
                        <div className="panelSection1">
                            <div className="panelSection1Header">
                                I plan to learn these technologies next:
                            </div>
                            <div className="panelSection1Body">
                                <ul>
                                    <li>Node.js & Express.js</li>
                                    <p></p>
                                    <li>Java</li>
                                        <ul>
                                            <li>Spring Framework</li>
                                            <li>Maven</li>
                                            <li>Software Design Patterns</li>
                                            <li>Automated Testing</li>
                                        </ul>
                                    <p></p>
                                    <li>DevOps</li>
                                    <p></p>
                                    <li>IoT</li>
                                    <p></p>
                                    <li>Ethical Hacking</li>
                                </ul>
                            </div>

                        </div>
                        <div className="panelSection2">
                            <img src={require('./middleLine.png')}/>
                        </div>
                        <div className="panelSection3">
                            <div className="panelSection3Header">
                                Next certifications:
                            </div>
                            <div className="panelSection3Body">
                                <ul>
                                    <li>AWS Certified Cloud Deverloper (Associate)</li>
                                    <p></p>
                                    <li>CompTIA Security +</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            
            </div>
        
        </div>
        
    )  
}
//-------------------------------FOOTER SECTION-------------------------------------------------

function Footer() {
    return (
        <div className="footer">
            <div className="footerTopSection">
                <div className="footerGetInTouch">
                    Get in Touch
                </div>
                <div className="footerDivideLine">
                    |
                </div>
                <div className="footerSupportMe" >
                    Support Me
                </div>

            </div>
            <div className="footerMiddleSection">
                <img src={require('./github.png')}/>
                <img src={require('./linkdin.png')}/>
                <img src={require('./youtube.png')}/>   
            </div>
            <div className="footerBottomSection">
                    © 2022 Luyanda Madonsela. All Rights Reserved.
            </div>


        </div>   
    )  
}

//--------------------------------RENDERING THE PAGE------------------------------------------------

function Page() {
    return (
        <div className="page">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            <Navigation/>
            <HomePageBody/>
            <Footer/>
        </div>
    )  
}

ReactDOM.render(<Page/>, document.getElementById("root"))

//--------------------------------------------------------------------------------
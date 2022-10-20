
function HomePageBody() {
    return (
        <div className="body">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>

            <div className="pageSection1" id="Section1">
                <div className="panel1">
                    <div className="aboutSection">
                        <div className="aboutPanel">
                                <div className="aboutPin">
                                    <img src={require('./images/redPin.png')}/>
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
                                    Code is my life. I do freelance full-stack responsive web application development. I am particularly interested in the back end and cloud development. I designed this website myself to showcase some of my skills. Feel free to look around...
                                </div>
                        </div>
                        <div className="hireMeButton">
                            HIRE  ME
                        </div>
                    </div>

                    <div className="myPhoto">
                        <div className="photoPanel">

                                <div className="photoPin">
                                    <img src={require('./images/redPin.png')}/>
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
                        <img src={require('./images/redPin.png')}/>
                    </div>
                    <div className="panelHeader2">
                        My Coding Skills
                    </div>
                    <div className="panelContent2">
                        <div className="panelSection1">
                            <div className="panelSection1Header">
                                I have experience with these technologies:
                            </div>
                            <div className="panelSection1Body">
                                <ul>
                                    <li>UX/UI Design using Figma & CSS3</li>
                                    <p></p>
                                    <li>Responsive Web Design using React.js</li>
                                    <p></p>
                                    <li>Back end design with PHP & Python Django:</li>
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
                        <img src={require('./images/middleLine.png')}/>
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
                                <p className="clickHere1">Click here to check out my Certificates</p>
                            </div>
                            <div className="badges">
                                <div>
                                    <img src={require('./images/threeBadges.png')}/>
                                </div>
                                <div>
                                    <img src={require('./images/phpBadge.png')}/>
                                </div>
                                <div>
                                    <img src={require('./images/pythonBadge.png')}/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>


            <div className="pageSection3">

                <div className="panel3">
                    <div className="pin3">
                        <img src={require('./images/redPin.png')}/>
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
                            <p className="clickHere2">Click here to check out my Github</p>
                            <p className="clickHere3">Click here to check out my projects page</p>
                        </div>
                        <div className="panelSection2">
                            <img src={require('./images/middleLine.png')}/>
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
                        <img src={require('./images/redPin.png')}/>
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
                            <img src={require('./images/middleLine.png')}/>
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

export default HomePageBody;
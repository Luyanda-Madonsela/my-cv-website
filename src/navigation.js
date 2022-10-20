import {Link}from "react-router-dom"

function Navigation() {
    return (
        <div className="nav">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>

            <Link to="/"><img className="homeIcon" src={require('./images/homeIcon.png')}/></Link>
            <p> | </p>
            <Link to="/contact" className="contact">Contact Me</Link>
            <p> | </p>
            <Link to="/career" className="career">Career & Education</Link>
            <p> | </p>
            <Link to="/projects" className="projects">Projects</Link>
            <p> | </p>
            <Link to="/certificates" className="certs">Tech Certificates</Link>
        </div>
    ) 
}

export default Navigation;
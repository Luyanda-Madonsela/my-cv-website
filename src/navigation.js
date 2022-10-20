
function Navigation() {
    return (
        <div className="nav">
            <img className="homeIcon" src={require('./images/homeIcon.png')}/>
            <p> | </p>
            <div className="contact">Contact Me</div>
            <p> | </p>
            <div className="career">Career & Education</div>
            <p> | </p>
            <div className="projects">Projects</div>
            <p> | </p>
            <div className="certs">Tech Certificates</div>
        </div>
    ) 
}

export default Navigation;
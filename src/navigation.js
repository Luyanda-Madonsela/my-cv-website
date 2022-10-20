
function Navigation() {
    return (
        <div className="nav">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>

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
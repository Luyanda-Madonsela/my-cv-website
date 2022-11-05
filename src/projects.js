import {Link}from "react-router-dom"

function ProjectsPage(){
    return(
        <div className="projectsPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            
            <div className="projectsPanel">
                
                <div className="Pin2">
                        <img src={require('./images/redPin.png')}/>
                </div>

                <div className="headerSection">
                    <div className="welcomeHeader">Welcome To My Projects</div>
                    <div className="welcomeHeader2">Just some small formalities:</div>
                </div>
                <div className="ButtonsSection">
                    <Link to="/projects/login" className="clickHere6">Login</Link>
                    <Link to="/projects/register" className="clickHere6">Register</Link>
                    <Link to="/projects/myprojects" id="guestButton" className="clickHere6">Continue as Guest</Link>
                </div>
            </div>
        </div>
    )

}

export default ProjectsPage;
import {Link}from "react-router-dom"

function ProjectsPage(){
    return(
        <div className="projectsPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            
            <div className="projectsPanel">
                <h1 className="sorry">Sorry, i'm still working on this page.</h1>
                <img className="" src={require('./images/underConstruction.png')}/>
                <Link to="/contact" className="clickHere6">Click here to get notified when its up and running</Link>
            </div>
        </div>
    )

}

export default ProjectsPage;
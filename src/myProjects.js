import {Link}from "react-router-dom"

function MyProjects(){
    return(
        <div className="myProjectsPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@200&display=swap" rel="stylesheet"></link>
            
            < div className="myProjectsPanel">
                <div className="myProjectsHeaderSection">
                    <h1 className="myProjectsHeader1">You have arrived @ My Projects <span><img className="locationPin" src={require('./images/locationPin.png')}/></span></h1>
                    <div className="myProjectsHeader2">These are my Web Applications:</div>
                </div>
                
                <div className="gridSection">
                    <Link to="/projects/under_construction" className="proj">To-do List</Link>
                    <Link to="/projects/under_construction" className="proj">Contact Book</Link>
                    <Link to="/projects/under_construction" className="proj">Apointment Management App</Link>
                    <Link to="/projects/under_construction" className="proj">Matric Past Paper Repository</Link>
                    <Link to="/projects/under_construction" className="proj">Chat Room App</Link>
                    <Link to="/projects/under_construction" className="proj">Property Website</Link>
                    <Link to="/projects/under_construction" className="proj">Online Merchandise Store</Link>
                </div>
            
            </div>
        </div>
    )

}

export default MyProjects;
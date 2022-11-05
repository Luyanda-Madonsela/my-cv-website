import "./stylesheet.css"
import Navigation from "./navigation.js"
import HomePageBody from "./homePageBody.js"
import CertificatesPage from "./certificates.js"
import Contact from "./contact.js"
import Footer from  "./footer.js"
import ProjectsPage from  "./projects.js"
import MyProjects from  "./myProjects.js"
import Login from  "./login.js"
import Register from  "./register.js"
import UnderConstruction from  "./underConstruction.js"

import {BrowserRouter, Route, Routes}from "react-router-dom"

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="page">
                        <Navigation/>
                        <HomePageBody/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/certificates" element={
                    <div className="page">
                        <Navigation/>
                        <CertificatesPage/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects" element={
                    <div className="page">
                        <Navigation/>
                        <ProjectsPage/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/contact" element={
                    <div className="page">
                        <Navigation/>
                        <Contact/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects/login" element={
                    <div className="page">
                        <Navigation/>
                        <Login/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects/register" element={
                    <div className="page">
                        <Navigation/>
                        <Register/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects/myprojects" element={
                    <div className="page">
                        <Navigation/>
                        <MyProjects/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects/under_construction" element={
                    <div className="page">
                        <Navigation/>
                        <UnderConstruction/>
                        <Footer/>
                    </div>
                }/>

            </Routes>
        </BrowserRouter>
    )
}

export default App; 
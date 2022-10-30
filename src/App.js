import "./stylesheet.css"
import Navigation from "./navigation.js"
import HomePageBody from "./homePageBody.js"
import CertificatesPage from "./certificates.js"
import Contact from "./contact.js"
import Footer from  "./footer.js"
import ProjectsPage from  "./projects.js"
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

            </Routes>
        </BrowserRouter>
    )
}

export default App; 
import "./stylesheet.css"
import Navigation from "./navigation.js"
import HomePageBody from "./homePageBody.js"
import Footer from  "./footer.js"
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
                        <h1>certificates</h1>
                        <Footer/>
                    </div>
                }/>

                <Route path="/projects" element={
                    <div className="page">
                        <Navigation/>
                        <h1>projects</h1>
                        <Footer/>
                    </div>
                }/>

                <Route path="/contact" element={
                    <div className="page">
                        <Navigation/>
                        <h1>contact</h1>
                        <Footer/>
                    </div>
                }/>

                <Route path="/career" element={
                    <div className="page">
                        <Navigation/>
                        <h1>career</h1>
                        <Footer/>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App; 
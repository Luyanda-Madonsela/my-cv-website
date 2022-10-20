import Navigation from "./navigation.js"
import HomePageBody from "./homePageBody.js"
import Footer from  "./footer.js"
import {Route, Routes}from "react-router-dom"

function App() {
    return (
            <>
                <Navigation/>
                <HomePageBody/>
                <Footer/>
            </>
        
    )
}

export default App; 
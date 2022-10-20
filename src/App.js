import Navigation from "./navigation.js"
import HomePageBody from "./homePageBody.js"
import Footer from  "./footer.js"

function App() {
    return (
                <div className="page">
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
                    
                    <Navigation/>
                    <HomePageBody/>
                    <Footer/>
                </div> 
    
    )
}

export default App;
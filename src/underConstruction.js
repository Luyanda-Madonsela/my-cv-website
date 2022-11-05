
function UnderConstruction(){
    return(
        <div className="constructionPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
        
            < div className="constructionPanel">
                <div className="constructionHeaderSection">
                    <h1 className="constructionHeader">Sorry, I'm Still Working On This Project</h1>
                </div>
                
                <img src={require('./images/underConstruction.png')}/>

            </div>
        </div>
    )

}

export default UnderConstruction;
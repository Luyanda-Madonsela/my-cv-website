import {Link}from "react-router-dom"

function CertificatesPage(){
    return(
        <div className="certsPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            <div className="certs">
                <div className="verifyLink">
                    <a className="clickHere4" href="https://school.studioweb.com/profile/luyandasmadonsela_7880_solo">Click here to verify online</a>
                </div>
                <img className="cert" src={require('./images/SW_html5_foundations.png')}/>
                <img className="cert" src={require('./images/SW_css3_foundations.png')}/>
                <img className="cert" src={require('./images/SW_javascript_foundations.png')}/>
                <img className="cert" src={require('./images/SW_beginners_python_3.png')}/>
                <img className="cert" src={require('./images/SW_php_7_foundations.png')}/>
            </div>

        </div>
    )

}

export default CertificatesPage;
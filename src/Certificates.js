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
                <img className="cert1"/>
                <img className="cert2"/>
                <img className="cert3"/>
                <img className="cert4"/>
                <img className="cert5"/>
            </div>

        </div>
    )

}

export default CertificatesPage;
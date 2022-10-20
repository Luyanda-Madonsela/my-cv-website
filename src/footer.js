import {Link}from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            <div className="footerTopSection">
                <Link to="/contact" className="footerGetInTouch"><div>Get in Touch</div></Link>
                <div className="footerDivideLine">
                    |
                </div>
                <div className="footerSupportMe" >Support Me</div>

            </div>
            <div className="footerMiddleSection">
                <a href="https://github.com/Luyanda-Madonsela"><img src={require('./images/github.png')}/></a>
                <a className="linkdinIcon" href="https://www.linkedin.com/in/luyanda-madonsela-b52990120"><img src={require('./images/linkdin.png')}/></a>
                <a href="https://www.youtube.com/channel/UCAfhSA_jdALn9j_yKI_TDlA"><img src={require('./images/youtube.png')}/></a>   
            </div>
            <div className="footerBottomSection">
                    © 2022 Luyanda Madonsela. All Rights Reserved.
            </div>
        </div>   
    ) 
}

export default Footer;
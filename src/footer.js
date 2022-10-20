
function Footer() {
    return (
        <div className="footer">
            <div className="footerTopSection">
                <div className="footerGetInTouch">
                    Get in Touch
                </div>
                <div className="footerDivideLine">
                    |
                </div>
                <div className="footerSupportMe" >
                    Support Me
                </div>

            </div>
            <div className="footerMiddleSection">
                <img src={require('./images/github.png')}/>
                <img src={require('./images/linkdin.png')}/>
                <img src={require('./images/youtube.png')}/>   
            </div>
            <div className="footerBottomSection">
                    © 2022 Luyanda Madonsela. All Rights Reserved.
            </div>

        </div>   
    ) 
}

export default Footer;
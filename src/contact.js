import {Link}from "react-router-dom"

function ContactPage(){
    return(
        <div className="contactPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
            
            <div className="contactPanel">
                <div className="contactHeaderSection">
                    <div className="contactHeader">Leave A Message</div>
                </div>
                <div>_______________________________</div>

                <form class="form" action="">
                    <div className="contactFillInSection">
                        <div className="fullNameLabel">Full Name:<span className="star">*</span></div>
                        <input type="text" className="inputName"></input>
                        <p className="fullNameErrorDisplay"></p>
                        <div className="emailLabel">Email:<span className="star">*</span></div>
                        <input type="email" class="inputEmail"></input>
                        <p className="emailErrorDisplay"></p>
                        <div className="subjectLabel">Subject:<span className="star">*</span></div>
                        <input type="text" class="inputSubject"></input>
                        <p id="subjectErrorDisplay"></p>
                        <div className="messageLabel">Message:<span className="star">*</span></div>
                        <textarea className ="inputMessage" name="inputMessage" cols="42" rows="10"></textarea>
                    </div>
                    <div className="submitSection">
                        <input className="submitButton" type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
            <div className="downloadCVSection">
                <a href={"/Resume-Luyanda-Madonsela.pdf"} download className="clickHere5">Download my CV as PDF document</a>
            </div>
        
        </div>
    )

}

export default ContactPage;
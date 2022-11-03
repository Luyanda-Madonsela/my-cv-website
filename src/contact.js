import React, {useState, useRef} from "react"
import emailjs from '@emailjs/browser';

function ContactPage({submitForm}){

    const[values, setValues] = useState({ fullName:"", email:"", subject:"", message:"",});
    const [formErrors, setFormErrors] = useState({});


    const handleFullNameInputChange = (Event) => {
        setValues ({...values, fullName: Event.target.value});
    }

    const handleEmailInputChange = (Event) => {
        setValues ({...values, email: Event.target.value});
    }

    const handleSubjectInputChange = (Event) => {
        setValues ({...values, subject: Event.target.value});
    }

    const handleMessageInputChange = (Event) => {
        setValues ({...values, message: Event.target.value});
    }


    const handleSubmit = (Event) => {
        Event.preventDefault();
        setFormErrors(validate(values, Event)); 
    };

    const validate = (values, Event) => {
        Event.preventDefault();
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
            errors.fullName = "Name is required!";
            submitForm(false);
        } else {
            submitForm(true);
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.subject) {
            errors.subject = "Subject is required!";
        }

        if (!values.message) {
            errors.message = "Message is required!";
        }

        if (!values.fullName || !values.email || !values.subject || !values.message || !regex.test(values.email)) {
            submitForm(false);
        } else {
            submitForm(true);
            sendEmail(Event);
        }
        
        return errors;
    };

    const form = useRef();

    const sendEmail = (Event) => {
        Event.preventDefault();

        emailjs.sendForm('service_lt3bsaa', 'template_k7s02qs', form.current, 'WG2WZ263ImdohwGct')
        .then((result) => {
            console.log(result.text);
            console.log("SUCCESSFUL")
        }, (error) => {
            console.log(error.text);
            console.log("ERROR")
        });
    };

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
                
                <form className="form" onSubmit={handleSubmit} ref={form}>

                    <div className="contactFillInSection">
                        <div className="fullNameLabel">Full Name:<span className="star">* </span> <span className="errorDisplay">{formErrors.fullName}</span></div>
                        <input type="text" className="inputName" name="user_name" value={values.fullName} onChange={handleFullNameInputChange} ></input>
                        <p></p>
                        <div className="emailLabel">Email:<span className="star">* </span><span className="errorDisplay">{formErrors.email}</span></div>
                        <input type="email" class="inputEmail" name="user_email" value={values.email} onChange={handleEmailInputChange} ></input>
                        <p></p>
                        <div className="subjectLabel">Subject:<span className="star">* </span><span className="errorDisplay">{formErrors.subject}</span></div>
                        <input type="text" class="inputSubject" name="subject" value={values.subject} onChange={handleSubjectInputChange}></input>
                        <p></p>
                        <div className="messageLabel">Message:<span className="star">* </span><span className="errorDisplay">{formErrors.message}</span></div>
                        <textarea className ="inputMessage" name="message" cols="42" rows="10" value={values.message} onChange={handleMessageInputChange}></textarea>
                        <p></p>
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

function SuccessPage(){
    return(
        <div className="successPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>        

            <div className="successPanel">
                <h1 className="successMessage">Message Submitted Successfully!</h1>
                <h2 className="successMessage2">I will respond soon...</h2>
            </div>

        </div>
    )
}


function Contact(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    return(
        <div className="Page">
            
            {!isSubmitted ? <ContactPage submitForm={setIsSubmitted}/> : <SuccessPage/> }
            
        </div>
    )

}
export default Contact;

import React, {useState} from "react"

function Login(){
    
    const[values, setValues] = useState({ password:"", email:"",});
    const [formErrors, setFormErrors] = useState({});


    const handlePassInputChange = (Event) => {
        setValues ({...values, password: Event.target.value});
    }

    const handleEmailInputChange = (Event) => {
        setValues ({...values, email: Event.target.value});
    }

    const handleSubmit = (Event) => {
        Event.preventDefault();
        setFormErrors(validate(values, Event)); 
    };

    const validate = (values, Event) => {
        Event.preventDefault();
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.password) {
            errors.password = "Password is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    };

    return(

        <div className="loginPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
        

            <div className="loginPanel"> 
                <div className="Pin2">
                        <img src={require('./images/redPin.png')}/>
                </div>

                <div className="loginHeaderSection">
                    <div className="loginHeader">Log In</div>
                </div>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="loginFillInSection">
                        <div className="emailLabel">Enter Email:<span className="star">* </span> <span className="errorDisplay">{formErrors.email}</span></div>
                        <input type="email" className="inputEmail" value={values.email} onChange={handleEmailInputChange} ></input>
                        <p></p>
                        <div className="passwordLabel">Enter Password:<span className="star">* </span><span className="errorDisplay">{formErrors.password}</span></div>
                        <input type="password" class="inputPassword" value={values.password} onChange={handlePassInputChange} ></input>
                        <p></p>
                    </div>

                    <div className="submitSection">
                        <input className="LoginSubmitButton" type="submit" value="Continue"></input>
                    </div>

                </form>
                
            </div>

        </div>
    
    )
    
}

export default Login;
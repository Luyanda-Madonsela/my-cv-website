import React, {useState} from "react"

function Register(){
    const[values, setValues] = useState({ fullName:"",password:"",password2:"", email:"",});
    const [formErrors, setFormErrors] = useState({});

    const handleFullNameInputChange = (Event) => {
        setValues ({...values, fullName: Event.target.value});
    }
    const handlePassInputChange = (Event) => {
        setValues ({...values, password: Event.target.value});
    }
    const handlePassInputChange2 = (Event) => {
        setValues ({...values, password2: Event.target.value});
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
        
        if (!values.fullName) {
            errors.fullName = "Name is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (!values.password2) {
            errors.password2 = "Password is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        return errors;
    };

    return(

        <div className="registerPage">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Handlee&family=Headland+One&family=Yellowtail&display=swap" rel="stylesheet"></link>
        

            <div className="registerPanel"> 
                <div className="Pin2">
                        <img src={require('./images/redPin.png')}/>
                </div>
                
                <div className="registerHeaderSection">
                    <div className="registerHeader">Register As New User</div>
                </div>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="registerFillInSection">
                        <div className="fullNameLabel">Full Name:<span className="star">* </span> <span className="errorDisplay">{formErrors.fullName}</span></div>
                        <input type="text" className="inputName" value={values.fullName} onChange={handleFullNameInputChange} ></input>
                        <p></p>
                        <div className="emailLabel">Enter Email:<span className="star">* </span> <span className="errorDisplay">{formErrors.email}</span></div>
                        <input type="email" className="inputEmail" value={values.email} onChange={handleEmailInputChange} ></input>
                        <p></p>
                        <div className="passwordLabel">Choose Password:<span className="star">* </span><span className="errorDisplay">{formErrors.password}</span></div>
                        <input type="password" class="inputPassword" value={values.password} onChange={handlePassInputChange} ></input>
                        <p></p>
                        <div className="passwordLabel">Repeat Password:<span className="star">* </span><span className="errorDisplay">{formErrors.password2}</span></div>
                        <input type="password" class="inputPassword" value={values.password2} onChange={handlePassInputChange2} ></input>
                        <p></p>
                    </div>

                    <div className="submitSection">
                        <input className="submitButton" type="submit" value="Submit"></input>
                    </div>

                </form>
                
            </div>

        </div>
    
    )

}

export default Register;
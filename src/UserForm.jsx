import React, { useState } from  'react';
    
const UserForm = (props) => {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [person, setPerson] = useState({});
    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setconfirmPassError] = useState("");


    const handleFName = (e) => {
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name Must Be At Least 2 Characters Long.")
        } else (setFirstNameError(""))
        setFirstname(e.target.value);
    }

    const handleLName = (e) => {
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name Must Be At Least 2 Characters Long.")
        } else (setLastNameError(""))
        setLastname(e.target.value);
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Last Name Must Be At Least 5 Characters Long.")
        } else (setEmailError(""))
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password Must Be At Least 8 Characters Long.")
        } else (setPasswordError(""))
        setPassword(e.target.value);
    }

    const handleConfPassword = (e) => {
        if(e.target.value !== password) {
            setconfirmPassError("Passwords do not match");
        }
         else if(e.target.value.length < 1) {
            setconfirmPassError("Password is required!");
        } else if (e.target.value.length < 8) {
            setconfirmPassError("Password Must Be At Least 8 Characters Long.")
        } else {
            setconfirmPassError("")
        }
        setConfirmpassword(e.target.value);
    }
    
    const createUser = (e) => {
        e.preventDefault();
        if(password !== confirmpassword) {
            return;
        }
        const newUser = { firstname, lastname, email, password, confirmpassword};
        setPerson(newUser);
        // inside of the createUser function
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            
            return "Thank you for submitting the form!";
        } else {
            return "Hello, please submit the form!"
        }
    }

    return(
        <div>
            {JSON.stringify(password)}<br/>
            {JSON.stringify(confirmpassword)}<br/>
            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                {/* {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                } */}
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => handleFName(e) } value={ firstname } />
                    {
                        firstnameError ?
                        <p style={{color:'red'}}>{ firstnameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => handleLName(e) } value={ lastname } />
                    {
                        lastnameError ?
                        <p style={{color:'red'}}>{ lastnameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => handleEmail(e) } value={ email } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => handlePassword(e) } value={ password } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => handleConfPassword(e) } value={ confirmpassword } />
                    {
                        confirmPassError ?
                        <p style={{color:'red'}}>{ confirmPassError }</p>:
                        ''
                    }
                </div>
                    <input type="submit" value="Create User" />
                
            </form>
            <div>
                <h3>Your Entered:</h3>
                <p>First Name: </p>
                <p>{ firstname } </p>
                <p>Last Name: </p>
                <p>{ lastname }</p>
                <p>Email Address: </p>
                <p>{ email }</p>
                <p>Password: </p>
                <p>{ password }</p>
                <p>Confirm Password: </p>
                <p>{ confirmpassword }</p>
            </div>
    </div>
    );
};
    
export default UserForm;

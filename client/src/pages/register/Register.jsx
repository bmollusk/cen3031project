import "./register.css";
import validator from 'validator';

console.log("HELLO");


export default function Register() {

  function submitRegistration(){
    //e.preventDefault();
    console.log('Successfully Registered.');
    
  }

  let validateEmail = (email) => {
    if(validator.isEmail(email) && email.length > 0){
      console.log("Email is valid");
      return true;
    }
    console.log("Email is invalid");
    return false;
  }

  console.log("YES");

  return (

    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">We Clean</h3>
          <span className="loginDesc">
          Lets clean up the world!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton" onClick={submitRegistration}>Sign Up</button>
            <button className="loginRegisterButton">
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
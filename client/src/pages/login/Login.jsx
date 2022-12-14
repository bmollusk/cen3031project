import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            <GoogleLogin onSuccess={(response => {console.log(response); navigate("/")})} onError={()=>{console.log('errpr')}}/>
          </div>
        </div>
       
      </div>
    </div>
  );
}
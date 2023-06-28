import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {


  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      navigate("/main", {state : {token : tokenResponse}});
      console.log("data from login page -- ", tokenResponse);
    }
  });

  


  return (
    <div className="container">
      <div className="left">
        <div className="text-center">Board.</div>
      </div>
      <div className="right">
        <div className='right-div'>
            <div className="first-div">Sign In</div>
            <div className='simpletext'>Sign in to your account</div>
            <div className='signinbutton'>
                <button onClick={login} className="google-signin-button">
                    <span className="google-icon-wrapper">
                        <img className="google-icon" src="googlelogo.png" alt="Google Icon"/>
                    </span>
                    <span className="button-text">Sign in with Google</span>
                </button>

                <button className="apple-signin-button">
                    <span className="google-icon-wrapper">
                        <img className="apple-icon" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Icon"/>
                    </span>
                    <span className="button-text">Sign in with Apple</span>
                </button> 
            </div>

            <form>
                <label className='email' htmlFor="username">Email address</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label style={{marginTop: "30px"}} htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <div className='forgot'>Forgot Password?</div>

                <button className='login-button'>Sign In</button>
            </form>


            <div className='lasttext'>Don’t have an account? <span className='spantext'>Register here</span> </div>

        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

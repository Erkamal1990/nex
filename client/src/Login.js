import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Link,Redirect,useHistory } from "react-router-dom";
import config from './config.json';
import axios from 'axios';
import Comman from './includes/Comman';
import './App.css';
import {toast,Slide} from 'react-toastify';
toast.configure();
function Login() {
  var api_Path = process.env.REACT_APP_API_PATH;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPasswaord] = useState("");
 // Error Message
  const [emailErr,setEmailErr] = useState({});
  const [passwordErr,setPasswordErr] = useState({});

  // form show hide
  const [loginForm,setloginForm] = useState(true);
  const [forgotPasswordForm,setforgotPasswordForm] = useState(false);
  const showForgotPasswordForm = ()=>{
    setloginForm(false);
    setforgotPasswordForm(true);
  }
  const showLoginForm = ()=>{
    setloginForm(true);
    setforgotPasswordForm(false);
  }
  // form show hide

 // Login types
 const googleResponse = (response) => {
  const tokenBlob = new Blob([JSON.stringify({response: response,type:'3'}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  
  fetch(api_Path+'user/register', options).then(r => {
            r.json().then(user => {
              if (user.data.id) {
                sessionStorage.setItem("userData", JSON.stringify(user));
                sessionStorage.setItem("isLogin", true);
                history.push("/");
              }
      });
  })
}
const facebookResponse = (response) => {
const tokenBlob = new Blob([JSON.stringify({response: response,type:'2'}, null, 2)], {type : 'application/json'});
const options = {
    method: 'POST',
    body: tokenBlob,
    mode: 'cors',
    cache: 'default'
};
fetch(api_Path+'user/register', options).then(r => {
      r.json().then(user => {
          if (user.data.id) {
            sessionStorage.setItem("userData", JSON.stringify(user));
            sessionStorage.setItem("isLogin", true);
            history.push("/");
          }
    });
  })
};
  const onSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
    if(isValid){
      //Call Login Api
      const loginData = {
        email: email,
        password:password,
      }
    const tokenBlob = new Blob([JSON.stringify(loginData, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    fetch(api_Path+'user/signin', options).then(r => {
      r.json().then(user => {
        if (user.status != 'false') {
          sessionStorage.setItem("userData", JSON.stringify(user));
          sessionStorage.setItem("isLogin", true);
          history.push("/");
        }else{
          toast.dark(user.message, { 
            position: toast.POSITION.BOTTOM_RIGHT,
             autoClose:5000,hideProgressBar: true,transition: Slide,}
          )
          history.push("/login");
        }
      });
  })
    }
  }
// Login types

// Form Validation
  const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    if (email) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        emailErr.emailValid = "Please enter valid email address.";
        isValid = false;
      }
    }else{
      emailErr.emailBlank = "Please enter your email Address.";
      isValid = false;
    }
    if (!password) {
      passwordErr.passError = "Please enter password.";
      isValid = false;
    }
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  }
// Form Validation
// Form Validation
const forgotValidation = () => {
  const emailErr = {};
  let isValid = true;
  if (email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      emailErr.emailValid = "Please enter valid email address.";
      isValid = false;
    }
  }else{
    emailErr.emailBlank = "Please enter your email Address.";
    isValid = false;
  }
  setPasswordErr(passwordErr);
  return isValid;
}
// Form Validation
// Forgot Password
const forgotPassword = (e)=>{
  e.preventDefault();
  const isValid = forgotValidation();
  if(isValid){
    
    //Call Login Api
    const loginData = {
      email: email,
    }
  const tokenBlob = new Blob([JSON.stringify(loginData, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  fetch(api_Path+'user/forgotPassword', options).then(r => {
    r.json().then(user => {
        toast.dark(user.message, { 
          position: toast.POSITION.BOTTOM_RIGHT,
           autoClose:5000,hideProgressBar: true,transition: Slide,}
        )
        setloginForm(true);
        setforgotPasswordForm(false);
    });
})
  }
}
// Forgot Password
  return ( 
  <div className="container-scroller">
    <Comman />
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
      <div className="row flex-grow">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="auth-form-transparent text-left p-3">
            <div className="brand-logo">  
              <img src="./img/logo.jpg" alt="logo"/>
            </div>
            <h4>{loginForm?'Login':'Forgot Password'}</h4>
           { loginForm ?(
            <form className="pt-3" onSubmit={onSubmit}>
              <div className="form-group">
               
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <span className="input-group-text bg-transparent border-right-0 logincss">
                      <i className="fa fa-envelope text-primary"></i>
                    </span>
                  </div>
                  <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control form-control-lg border-left-0 logincss" autoComplete="new-password" placeholder="Email"/>
                  </div>
                {Object.keys(emailErr).map((key)=>{
                  return <div style={{color:'red'}}>{emailErr[key]}</div>
                })}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <span className="input-group-text bg-transparent border-right-0 logincss">
                      <i className="fa fa-lock text-primary"></i>
                    </span>
                  </div>
                  <input type="password" name="password" onChange={(e)=>{setPasswaord(e.target.value)}}  value={password} className="form-control form-control-lg border-left-0 logincss"  autoComplete="new-password"  placeholder="Password"/>
                </div>
                {Object.keys(passwordErr).map((key)=>{
                  return <div style={{color:'red'}}>{passwordErr[key]}</div>
                })}
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="mt-4">
                      Don't have an account? <Link to="/Register" className="text-primary"><strong>Register</strong></Link>
                </div> 
                <div className="mt-4">
                  <a href="#" className="text-primary" onClick={showForgotPasswordForm}>Forgot password?</a>
                  </div>
                </div>
              <div className="my-3">
                <input className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"  type="submit" value="SIGN IN" />
              </div> 
              <div className="mb-2 d-flex socialButtons">
                  <FacebookLogin
                    appId={config.FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    callback={facebookResponse} 
                    textButton="Facebook"
                    tag="button"
                    cssClass="btn btn-facebook auth-form-btn flex-grow mr-1"
                    icon={<i className="fab fa-facebook-f mr-2"></i>}
                    >
                </FacebookLogin>
                <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        onSuccess={googleResponse}
                        onFailure={googleResponse}
                        icon={false}
                        className="btn btn-google auth-form-btn flex-grow ml-1"
                  >
                  <i className="fab fa-google mr-2"></i>Google
                  </GoogleLogin>
                </div>                   
            </form>
            ):null}
            {/* Forgot password */}
            { forgotPasswordForm ?(
            <form className="pt-3" onSubmit={forgotPassword}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email Id</label>
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <span className="input-group-text bg-transparent border-right-0" style="">
                      <i className="fa fa-envelope text-primary"></i>
                    </span>
                  </div>
                  <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control form-control-lg border-left-0" autoComplete="new-password" placeholder="Email"/>
                  </div>
                {Object.keys(emailErr).map((key)=>{
                  return <div style={{color:'red'}}>{emailErr[key]}</div>
                })}
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="mt-4">
                  <a href="#" className="text-primary" onClick={showLoginForm}>Login</a>
                  </div>
                </div>
              <div className="my-3">
                <input className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  type="submit" value="Forgot Password" />
              </div>                    
            </form>
            ):null}
            {/* Forgot password */}
          </div>
        </div>
        <div className="col-lg-6 login-half-bg d-flex flex-row">
          <p className="text-white font-weight-medium  flex-grow align-self-end mystyel">Welcome to Nexstack <br/>
          Sign in your performance dashboard to review the campaigns result and lannch new campaigns !</p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Login;
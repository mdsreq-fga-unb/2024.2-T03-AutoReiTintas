import React from "react";
import '../styles/loginStyle.css';

const LoginPage = () => {
  return (
      <div className="container">
        <div className="heading">Cadastre-se</div>
        <form action="" className="form">
          <input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
        <span className="agreement">
          <a href="">Learn user licence agreement</a> 
        </span>
      </div>
  );
}

export default LoginPage;

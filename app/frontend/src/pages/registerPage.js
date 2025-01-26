import React from 'react';
import '../styles/registerStyle.css'

const RegisterPage = () =>{
    return (
    <div className="container">
        <div className="heading">Sign Up</div>
        <form action="" className="form">
          <input required="" className="input" type="nome" name="nome" id="email" placeholder="nome " />
          <input required="" className="input" type="email" name="email" id="password" placeholder="email" />
          <input required="" className="input" type="senha" name="senha" id="password" placeholder="senha " />
          <input required="" className="input" type="endereço" name="endereço" id="password" placeholder="endereço" />
          <input required="" className="input" type="telefone" name="telefone" id="password" placeholder="telefone *" />
          <input className="login-button" type="submit" value="Sign Up" />
        </form>
          <span className="agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
    );
}

export default RegisterPage;